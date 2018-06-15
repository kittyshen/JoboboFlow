
$(function () {
  var userData;
  var allData;
  var cohortData;

  function showUserData() {

    var userID = localStorage.getItem("userID");
    var cohortID = localStorage.getItem("cohortID");
    var url = "/user/" + userID + "/jobs";

    var p0 = $.get(url, function (data) {
      return data;
    });   //returns specific user's job's data as an array

    var p1 = $.get("/api/jobs", function (data) {
      return data;
    });  // returns all jobs in the database as an array

    var p2 = $.get("/api/cohort/" + cohortID + "/users/jobs", function (data) {
      return data;
    })  // returns all jobs in a specefic cohort as an array

    var p3 = $.get("/user/all", function (data) {
      return data;
    }); // returns all users in the database as an array

    var p4 = $.get("/api/cohort/" + cohortID + "/users", function (data) {
      return data;
    });  // returns all users in a specific cohort as an array

    return Promise.all([p0, p1, p2, p3, p4]);
    
  }

  showUserData().then(function (data) {
    var sumAppliedUser = data[0].length;
    var sumPhoneUser = 0;
    var sumSiteUser = 0;
    var sumAppliedAll = data[1].length;
    var sumPhoneAll = 0;
    var sumSiteAll = 0;
    var sumAppliedCohort = data[2].length;
    var sumPhoneCohort = 0;
    var sumSiteCohort = 0;
    //get the total number of users in cohort and overall users in database 
    var totalUserNumberAll = data[3].length;
    var totalUserNumberCohort = data[4].length;
    
    // extract user data
    for (var i = 0; i < data[0].length; i++) {

      if (data[0][i].phone_interview) {
        sumPhoneUser++;
      } 
      if (data[0][i].site_interview) {
        sumSiteUser++;
      }
    }

    // extract all user data
    for (var i = 0; i < data[1].length; i++) {

      if (data[1][i].phone_interview) {
        sumPhoneAll++;
      } 
      if (data[1][i].site_interview) {
        sumSiteAll++;
      }
    }

    // extract cohort data
    for (var i = 0; i < data[2].length; i++) {

      if (data[2][i].phone_interview) {
        sumPhoneCohort++;
      } 
      if (data[2][i].site_interview) {
        sumSiteCohort++;
      }
    }

    //now we average the all user data
    var aveAppliedAll = sumAppliedAll / totalUserNumberAll ;
    var avePhoneAll = sumPhoneAll / totalUserNumberAll ;
    var aveSiteAll = sumSiteAll / totalUserNumberAll ;
    var aveAppliedCohort = sumAppliedCohort / totalUserNumberCohort;
    var avePhoneCohort = sumPhoneCohort / totalUserNumberCohort;
    var aveSiteCohort = sumSiteCohort / totalUserNumberCohort;

    console.log("sumAppliedU", sumAppliedUser)
    console.log("sumphoneU", sumPhoneUser)
    console.log("sumsiteU", sumSiteUser)
    console.log("sumAppliedA", aveAppliedAll)
    console.log("sumphoneA", avePhoneAll)
    console.log("sumsiteA", aveSiteAll)
    console.log("all data", data)

    barChart(sumAppliedUser, sumPhoneUser, sumSiteUser, aveAppliedCohort, avePhoneCohort, aveSiteCohort, aveAppliedAll, avePhoneAll, aveSiteAll)

    console.log("user", data[0])
    console.log("all", data[1])
  })
})

function barChart(sumAppliedU, sumphoneU, sumsiteU, aveAppliedC, avephoneC, avesiteC, aveAppliedA, avephoneA, avesiteA) {
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ["Applied", "Phone-interview", "On-site interview"],
      datasets: [
        {
          label: "You",
          backgroundColor: '#4F909A',
          borderColor: '#4F909A',
          data: [sumAppliedU, sumphoneU, sumsiteU],
        },
        {
          label: "Cohort Average",
          backgroundColor: '#D38A87',
          borderColor: '#D38A87',
          data: [aveAppliedC, avephoneC, avesiteC]
        },
        {
          label: "All Site User Average",
          backgroundColor: '#A7D48C',
          borderColor: '#A7D48C',
          data: [aveAppliedA, avephoneA, avesiteA]
        }
      ]
    },

    // Configuration options go here
    options: {
      title: {
        display: true,
        text: "Student's Job Application Status Compared to Cohort's Average and All Student's Average"
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Job Application Status by Volume'
          }
        }]
      }
    }
  });
}
