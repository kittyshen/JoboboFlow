
var express = require('express');

var router = express.Router();

router.get('/students',function(req,res) {
  console.log('Hello world! users');
});

module.exports = router;