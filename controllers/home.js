var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/',function(req,res) {
  console.log('Hello world! home');
//   res.sendFile(path.join(__dirname, "../public/home.html"));
  res.render(path.join(__dirname,"../views/index.handlebars"));
});

router.get('/user:id',function(req,res) {
    var id = req.params.id;
    console.log('Helhlkjlo world! user');

  //   res.sendFile(path.join(__dirname, "../public/home.html"));
    res.render(path.join(__dirname,"../views/user.handlebars"));
});
module.exports = router;