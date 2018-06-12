
var express = require('express');
var router = express.Router();
var path = require('path');
var db = require(path.join(__dirname,'../models'));


router.get('/cohort',function(req,res) {
  console.log('Hello world! cohort');
});

module.exports = router;