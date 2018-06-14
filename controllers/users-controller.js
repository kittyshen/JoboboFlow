
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

  // We need to grab the cohort ID associated with the cohort name the user selected.
  // This is due to users created having a CohortId property which would otherwise
  // be null upon creating a new user. The other alternative to this would be
  // to add a hidden associated cohort ID on the front end when they 
  // initially select a cohort they belong to. The cohorts to select from on the
  // front end is still populated with a query results already.
  // With more time, I would go back and apply a data-attribute holding the needed ID
  // This realization came after the fact

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

router.post('/user/exists',function(req,res) {
  var username = req.body.user_name;
  // Attempt to grab matching users from DB.
  // If none a found, an empty array gets sent back
  // the length check happens on the front-end
  db.User.findAll({
    where: { user_name: username }
  })
  .then(function(hits) {
    var hits = hits.map(function(hit) {return hit.dataValues});
    res.json(hits);
  })
  .catch(function(error) {
    console.error(error);
  });

});

router.post('/user/authenticate',function(req,res) {
  var username = req.body.user_name;
  var password = req.body.password;
  console.log(`Username: ${username}, Password:${password}`);
  db.User.findAll({
    where: { user_name: username, password: password }
  })
  .then(function(data) {
    res.json(data);
  })
  .catch(function(err) {
    console.error(err);
  })

})

module.exports = router;

