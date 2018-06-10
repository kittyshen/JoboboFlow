var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/',function(req,res) {
  console.log('Hello world! home');
//   res.sendFile(path.join(__dirname, "../public/home.html"));
  res.render(path.join(__dirname,"../views/index.handlebars"));
});

module.exports = router;