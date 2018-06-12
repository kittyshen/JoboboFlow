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
    showUserData();

    //add new job button clicked on user dashboard, pop up modal for adding job
	$(document).on("click","#newJob",function(){
		$("#addjobModal").show();
	});
	$(document).on("click","#addjobClose",function(){
        $("#addjobModal").hide();
    });

    //login button on the form clicked process user input
    $('#addjob_btn').on("click",function(event){
        event.preventDefault();

        console.log("kjljflskjfalkj");
        var company_name = $("#company_name").val().trim();
        var job_title = $("#job_title").val().trim();
        var job_link = $("#job_link").val().trim();
        var jobObj = {
            company_name:company_name,
            job_title:job_title,
            job_link:job_link
        }
        console.log(jobObj);
        $("#addjobModal").hide();

        $.post("/job/add",jobObj).then(function(data){
            // https://stackoverflow.com/questions/4744751/how-do-i-redirect-with-javascript
            console.log(data);
            // location.replace("/user"+data.id);
            // location.reload();
        });
    })


})