
var express = require('express');
var path = require('path');

var router = express.Router();

router.post('/user/add',function(req,res) {
  console.log('Hello world! users');
  var id = 2; //res.id;
  res.json({id:3});
  // return res.redirect('/user/'+id);
  // res.render(path.join(__dirname,"../views/user.handlebars"));
});
router.get('/user:id',function(req,res) {
  var id = req.params.id;
  console.log('Helhlkjlo world! user');

//   res.sendFile(path.join(__dirname, "../public/home.html"));
  res.render(path.join(__dirname,"../views/user.handlebars"));
});
router.get('/test',function(req,res) {
  var id = req.params.id;
  console.log('test world! user');

//   res.sendFile(path.join(__dirname, "../public/home.html"));
  res.render(path.join(__dirname,"../views/user5.handlebars"));
});

module.exports = router;