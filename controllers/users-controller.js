
var express = require('express');
var router = express.Router();
var path = require('path');
var db = require(path.join(__dirname, '../models'));

// ====================== Nick =========================
router.post('/user/add', function (req, res) {

  var formData = {
    user_name: req.body.user_name,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password
  };

  // Query DB for the cohort by name (req.body.cohort_name)
  db.Cohort.findOne({ where: { cohort_name: req.body.cohort_name } })
    .then(function (data) {
      // get dataValues from the response Sequelize response object
      var match = data.dataValues;
      // and take the id property from dataValues this is the cohortId
      var cohortId = match.id;
      // Need to return the value here to be accessed in subsequent .then() calls
      return cohortId;
    })
    .then(function (data) {
      // data is cohortId. We are adding a property to the formData equal to cohortId
      formData.CohortId = data;
      // create a user in the DB with their associated cohort ID
      return db.User.create(formData)
    })
    .then(function(data) {
      res.json(data);
    })
    // Add a .catch method to the end of our promise chain to provide some
    // error handling
    .catch(function (err) {
      console.error(err);
    });

  // return res.redirect('/user/'+id);
  // res.render(path.join(__dirname,"../views/user.handlebars"));
});
// ======================================================

router.post('/user/login', function (req, res) {
  db.User.findAll({
    where: { user_name: req.body.user_name }
  })
    .then(function(users) {
      console.log(users.dataValues);
      // users = users.dataValues;
      // users.forEach(function(user) {
      //   console.log(user);
      // })
    })
    .catch(function(err) {
      console.error(err);
    });

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


router.get('/user:id', function (req, res) {
  var id = req.params.id;
  // console.log(req.params.id + "kjljldjsf");
  // console.log('jon world! user show all user jobs');
  db.Job.findAll({
    include: [db.User],
    where: { UserId: id }
  }).then(function (data) {
    res.render(path.join(__dirname, "../views/user.handlebars"), { jobs: data });
    // console.log("../views/user.handlebars");
    // res.render(path.join(__dirname,"../views/user.handlebars"),{jobs:data})
  });
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get('/user/:id/jobs', function (req, res) {
  var id = req.params.id;
  // console.log('jon world! user show all user jobs');
  db.Job.findAll({
    include: [db.User],
    where: { UserId: id }
  }).then(function (data) {
    res.json(data);
    // res.render("../views/user.handlebars", { jobs: data });
  });
});

router.get('/user/all',function (req, res) {
  // console.log('jon world!show all users');
  db.User.findAll({
  }).then(function (data) {
    res.json(data);
  });
});
module.exports = router;

