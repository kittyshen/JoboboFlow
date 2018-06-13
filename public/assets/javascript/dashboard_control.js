$(function() {
    //this function will run on default after user landing on their own dashboard
    function showUserData(){

        //have to use this localstorage to retain the userID information when user login
        var userID = localStorage.getItem("userID");
        console.log(userID);
        var url = "/user/"+userID+"/jobs";
        console.log(url);
        $.get(url,function(data){
            console.log(data);
            // location.reload();
        });
    }
    // showUserData();


    //add new job button clicked on user dashboard, pop up modal for adding job
	$(document).on("click","#newJob",function(){
		$("#addjobModal").show();
	});
	$(document).on("click","#addjobClose",function(){
        $("#addjobModal").hide();
    });

    //add job button on the form clicked process user input
    $('#addjob_btn').on("click",function(event){
        event.preventDefault();

        console.log("kjljflskjfalkj");
        var company_name = $("#company_name").val().trim();
        var job_title = $("#job_title").val().trim();
        var job_link = $("#job_link").val().trim();
        var userID = localStorage.getItem("userID");

        var jobObj = {
            company_name:company_name,
            job_title:job_title,
            job_link:job_link,
            UserId : userID
        }
        console.log(jobObj);
        $("#addjobModal").hide();

        $.post("/job/add",jobObj).then(function(data){
            // https://stackoverflow.com/questions/4744751/how-do-i-redirect-with-javascript
            console.log(data);
            // location.replace("/user"+data.id);
            location.reload();
        });
    })

    //alex deal with the delete(hide) card button
    $(document).on("click",".card-del", function(event){
        event.preventDefault();
        var id = $(this).data("id");
        console.log(id);
        console.log("kjljflskjfalkj");

        var jobObj = {
            hide:1
        }
        console.log(jobObj);
        $("#addjobModal").hide();
        $.ajax("/job/delete/"+id, {
            type: "PUT",
            data: jobObj
          })
        .then(function(data){
            // https://stackoverflow.com/questions/4744751/how-do-i-redirect-with-javascript
            console.log(data);
            // location.replace("/user"+data.id);
            location.reload();
        });
    })

    //deal with user press next button on job cards action 
    $(document).on("click",".nextbtn",function(event){
        event.preventDefault();
        //grab job id info 
        var id = $(this).data("id");
        //grab job card location info 
        var loc = $(this).data("loc");
        console.log("$$$$$$$loc= "+loc+" $$$$ jobId =\n",id);
        
        //define a function to handle the current card location with the user press butten event, output will be
        //the job obj new location data
        function LocToDataConvert(loc) {
            var dataArr = [];
            switch (loc) {
                case 1:
                    dataArr = [1,1,0,0,0,1,0,0]
                    break;
                case 2:
                    dataArr = [1,1,1,0,0,0,1,0]
                    break;
                case 3:
                    dataArr = [1,1,1,1,0,0,0,1]
                    break;
                default:
                    dataArr = [1,0,0,0,1,0,0,0]
                    break;
            }
            return dataArr;
        }

        var dataArr = LocToDataConvert(loc);
        //transfer it to dataObj prepare for put call
        var dataObj ={
            applied:dataArr[0],
            phone_interview:dataArr[1],
            site_interview:dataArr[2],
            outcome:dataArr[3],
            loc1:dataArr[4],
            loc2:dataArr[5],
            loc3:dataArr[6],
            loc4:dataArr[7]
        }

        // all put data ready, do the put to backend server
        $.ajax("/job/changeLoc"+id, {
            type: "PUT",
            data: dataObj
          })
        .then(function () {
              console.log( "card updated");
              location.reload();
        });
    })

    //deal with user press back button on job cards action 
    $(document).on("click",".backbtn",function(event){
        event.preventDefault();
        //grab job id info 
        var id = $(this).data("id");
        //grab job card location info 
        var loc = $(this).data("loc");
        
        //define a function to handle the current card location with the user press butten event, output will be
        //the job obj new location data
        function LocToDataConvert(loc) {
            var dataArr = [];
            switch (loc) {
                case 2:
                    dataArr = [1,0,0,0,1,0,0,0]
                    break;
                case 3:
                    dataArr = [1,1,0,0,0,1,0,0]
                    break;
                case 4:
                    dataArr = [1,1,1,0,0,0,1,0]
                    break;
                default:
                    dataArr = [0,0,0,1,0,0,0,1]
                    break;
            }
            return dataArr;
        }

        var dataArr = LocToDataConvert(loc);
        //transfer it to dataObj prepare for put call
        var dataObj ={
            applied:dataArr[0],
            phone_interview:dataArr[1],
            site_interview:dataArr[2],
            outcome:dataArr[3],
            loc1:dataArr[4],
            loc2:dataArr[5],
            loc3:dataArr[6],
            loc4:dataArr[7]
        }

        // all put data ready, do the put to backend server
        $.ajax("/job/changeLoc"+id, {
            type: "PUT",
            data: dataObj
          })
        .then(function () {
              console.log( "card updated");
              location.reload();
        });
        
    })

})