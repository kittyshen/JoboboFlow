
var express = require('express');
var router = express.Router();
var path = require('path');
var db = require(path.join(__dirname,'../models'));


router.post('/user/add',function(req,res) {
  console.log('Hello world! users');
  var id = 2; //res.id;
  res.json({id:3});
  db.User.create({user_name:req.body.user_name,first_name:req.body.first_name,last_name:req.body.last_name,password:req.body.password }).then(function(data){
    res.json(data);
  });
  // return res.redirect('/user/'+id);
  // res.render(path.join(__dirname,"../views/user.handlebars"));
});

router.post('/user/login',function(req,res) {

  console.log('Hello world! userlogin');
  res.json({id:3});
  // return res.redirect('/user/'+id);
  // res.render(path.join(__dirname,"../views/user.handlebars"));
});
// var url = window.location.search;
// var authorId;
// if (url.indexOf("?author_id=") !== -1) {
//   authorId = url.split("=")[1];
//   getPosts(authorId);
// }


router.get('/user:id',function(req,res) {
  var id = req.params.id;
  console.log( req.params.id+"kjljldjsf");
  console.log('jon world! user show all user jobs');
  db.Job.findAll({        
    include: [db.User],
    where:{UserId:id}
  }).then(function(data){
    res.render(path.join(__dirname,"../views/user.handlebars"),{jobs:data});
    // res.render(path.join(__dirname,"../views/user.handlebars"),{jobs:data})
  });
//   res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get('/user/:id/jobs',function(req,res) {
  var id = req.params.id;
  console.log('jon world! user show all user jobs');
  db.Job.findAll({        
    include: [db.User],
    where:{UserId:id}
  }).then(function(data){
    res.json(data);
    // res.render(path.join(__dirname,"../views/user.handlebars"),{jobs:data})
  });
});

module.exports = router;