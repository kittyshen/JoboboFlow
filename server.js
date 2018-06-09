
var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;


var app = express();

// Server static content
app.use(express.static('public'));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars',exphbs({ defaultLayout: 'main' }));
app.set('view engine','handlebars');

// Pulls in an array of paths to all of our controller files
var filePaths = require('./controllers/index');

// We attach each controller's Router instance to our app
// This is nice, because if we decide to continue adding more controllers with their own routes,
// we don't have to do anything beyond creating that controller file with its associated routes.
// There's no need to hop back into this file and add additional routes variables and app.use()'s that
// can clutter up our server.js over time. We also avoid possibly looking around all over the place for 
// where a breakdown occurred (the breakdown being that we forgot to add each additional route) 
// e.g.  var chickensRoutes = require('./controllers/chickens-controller');
//       app.use(chickensRoutes)
//       ...
//       ...
filePaths.forEach(function(route) {
  app.use(require(route));
});


app.listen(PORT, function() {
  console.log('Listening on port: ' + PORT);
})


// var db = require("./models");

// db.sequelize.sync({ force: true }).then(function() { //{ force: true }
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });