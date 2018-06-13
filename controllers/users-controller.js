
var express = require('express');
var router = express.Router();
var path = require('path');
var db = require(path.join(__dirname, '../models'));

router.post('/user/add', function(req, res) {

  var formData = {
    user_name: req.body.user_name,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password
  };

  // Query DB for the cohort by name (req.body.cohort_name)
  db.Cohort.findOne({ where: { cohort_name: req.body.cohort_name } })
    .then(function(data) {
      // get dataValues from the Sequelize response object
      var match = data.dataValues;
      // and take the id property from dataValues this is the cohortId
      var cohortId = match.id;
      // We are adding a property to the formData equal to cohortId
      formData.CohortId = cohortId
      // create a user in the DB with their associated cohort ID
      return db.User.create(formData);
    })
    .then(function(data) {
      res.json(data);
    })
      // Handle errors
    .catch(function(err) {
      console.error(err);
    });
});

router.post('/user/login', function(req, res) {
  res.json({ id: 3 });
  // return res.redirect('/user/'+id);
  // res.render(path.join(__dirname,"../views/user.handlebars"));
});
// var url = window.location.search;
// var authorId;
// if (url.indexOf("?author_id=") !== -1) {
//   authorId = url.split("=")[1];
//   getPosts(authorId);
// }


router.get('/user:id', function(req, res) {
  var id = req.params.id;
  // console.log(req.params.id + "kjljldjsf");
  // console.log('jon world! user show all user jobs');
  db.Job.findAll({
    include: [db.User],
    where: { UserId: id }
  }).then(function(data) {
    res.render(path.join(__dirname, "../views/user.handlebars"), { jobs: data });
    // console.log("../views/user.handlebars");
    // res.render(path.join(__dirname,"../views/user.handlebars"),{jobs:data})
  });
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get('/user/:id/jobs', function(req, res) {
  var id = req.params.id;
  db.Job.findAll({
    include: [db.User],
    where: { UserId: id }
  }).then(function(data) {
    res.json(data);
    // res.render("../views/user.handlebars", { jobs: data });
  });
});

router.get('/user/all',function(req, res) {
  db.User.findAll({
  }).then(function(data) {
    res.json(data);
  });
});

router.post('/development',function(req,res) {

  var username = req.body.username;
  var password = req.body.password;
  // Check where user
  db.User.findAll({
    where: { user_name: username, password: password }
  })
  .then(function(hits) {
    var hits = hits.map(function(hit) {return hit.dataValues});
    res.json(hits);
  })
  .catch(function(error) {
    console.error(error);
  });

});


module.exports = router;

