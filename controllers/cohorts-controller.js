
var express = require('express');
var router = express.Router();
var path = require('path');
var db = require(path.join(__dirname,'../models'));


router.get('/cohort',function(req,res) {
  console.log('Hello world! cohort');
});

//this route return all user belongs to a certain cohort
router.get("/api/cohort/:id/users",function(req,res) {
  db.User.findAll({
    where: {
      CohortId: req.params.id
    }
  }).then(function(result) {
    return res.json(result);
  });
});

//this route return all job belongs to a certain cohort users
router.get("/api/cohort/:id/users/jobs",function(req,res) {
  console.log('Hello world! cohort');
  //first call "/api/cohort/:id/users" to get all user belongs to the cohort
  db.User.findAll({
    where: {
      CohortId: req.params.id
    }
  })
  .then(function(result) {
    var arrayID = [];
    //define an array to catch all id from the returned obj
    for(var i=0; i< result.length; i++){
      var eachID = result[i].dataValues.id;
      arrayID.push(eachID);
    }
    //or using nick's map method, don't know whether it's a es6 thing or not?
    var result = result.map(function(meow) {return meow.dataValues.id});
    console.log("meow",result);
    // res.json(result);
    return arrayID;
  })
  .then(function(data) {
    console.log("haha got it",data);
    return db.Job.findAll({
      where: {
        UserId: {$or: data}  //this is the key for a or condition query call to use a array as all the condition fit
      }
    })
  })
  .then(function(result){
      //finnaly result is here , great! I got it now, you can pretty much return whatever we want as wemeow please  hahahhaha
      res.json(result)
  })
    // Handle errors  thanks nick great stacking then method instead of nesting  
  .catch(function(err) {
      console.error(err);
  });

});
module.exports = router;