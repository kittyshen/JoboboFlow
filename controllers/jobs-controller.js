
var express = require('express');

var router = express.Router();

router.get('/jobs',function(req,res) {
  console.log('Hello world! jobs');
});


module.exports = router;