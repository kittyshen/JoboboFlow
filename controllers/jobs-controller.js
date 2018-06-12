
var express = require('express');
var router = express.Router();
var path = require('path');
var db = require(path.join(__dirname,'../models'));


router.get('/jobs',function(req,res) {
  console.log('Hello world! jobs');
});


module.exports = router;