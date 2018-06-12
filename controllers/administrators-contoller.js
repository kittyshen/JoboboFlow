
var express = require('express');
var router = express.Router();
var path = require('path');
var db = require(path.join(__dirname,'../models'));

router.get('/admin',function(req,res) {
  console.log('Hello world! admin');
});

module.exports = router;
