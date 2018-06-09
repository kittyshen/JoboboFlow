
var express = require('express');

var router = express.Router();

router.get('/cohort',function(req,res) {
  console.log('Hello world! cohort');
});

module.exports = router;