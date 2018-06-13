
var express = require('express');
var router = express.Router();
var path = require('path');
var db = require(path.join(__dirname,'../models'));



router.get("/api/admin/cohort/:id?/job-table", function(req, res) {
  if(req.params.cohort_id) {
    db.Job.findAll({
    where: {
      cohort_id: req.params.cohort_id
    }
    }).then(function(result) {
      return res.json(result);
    });
  } 
  else {
    db.Job.findAll({}).then(function(result) {
      res.json(result)
    });
  }
});

router.get("/api/jobs", function(req,res) {
  db.Job.findAll({ }).then(function(result) {
    return res.json(result);
  });
})

router.get('/user/:id/jobs', function (req, res) {
  var id = req.params.id;
  // console.log(req.params.id + "kjljldjsf");
  // console.log('jon world! user show all user jobs');
  db.Job.findAll({
    include: [db.User],
    where: { UserId: id }
  }).then(function (data) {
    res.json(data);
  });
});



router.get("/api/admin/cohort/:id?/users/:id?/job-search", function(req, res) {
  if (cohort_id && user_id) {
    db.Job.findAll({
    where: {
      cohort_id: req.params.cohort_id,
      user_id: req.params.user_id
    }
    }).then(function(result) {
      return res.json(result);
    })
  }
  else {
    db.Job.findAll({}).then(function(result) {
      res.json(result)
    });
  }
});


//kitty adding routes for job card postion rearrange
router.put("/job/changeLoc:id",function(req,res){
  var id = req.params.id;
  console.log(id);
  var data = req.body;
  console.log(data);

  db.Job.update(
     data,
    {where:{id:id}})
  .then(function(result){
    res.json(result);
    }
  )
})

module.exports = router;
