
var express = require('express');

var router = express.Router();

router.get('/admin',function(req,res) {
  console.log('Hello world! admin');
});

module.exports = router;