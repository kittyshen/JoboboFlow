var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../models');

router.get('/', function (req, res) {
  // Grab all cohorts to be rendered via a handlebars each
  db.Cohort.findAll({})
    .then(function (data) {
      // grab all the cohorts values off the Sequelize response object 
      // and store them in an array
      var cohorts = data.map(function (cohort) {
        return cohort.dataValues;
      });
      // configure handlebars object
      var hbsObject = {
        cohorts: cohorts
      }
      // console.log(hbsObject);
      // Need to pass the handlebars info to 'each' the cohorts option menu
      res.render(path.join(__dirname, "../views/index.handlebars"), hbsObject);
    })
    // Error handling
    .catch(function (err) {
      console.error(err);
    });
});

router.get('/chart', function (req, res) {
  res.sendFile(path.join(__dirname, "../public/chart.html"));
});

module.exports = router;
