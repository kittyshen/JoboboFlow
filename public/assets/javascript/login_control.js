$(function() {
    //signup button clicked on landing page, pop up modal for the signup form
	$("#signup").on("click",function(){
		$("#signupModal").show();
	});
	$("#signupClose").on("click",function(){
		$("#signupModal").hide();
    });
    // $("#loginModal").show();
    //login button clicked on landing page, pop up modal for the login form
	$("#login").on("click",function(){
		$("#loginModal").show();
	});
	$("#loginClose").on("click",function(){
		$("#loginModal").hide();
    });
    
    //login button on the form clicked process user input
    $('#login_btn').on("click",function(event){
        event.preventDefault();

        console.log("kjljflskjfalkj");
        var user_name = $("#login_user_name").val().trim();
        console.log(user_name);
        var password = $("#login_password").val().trim();
        var userObj = {
            user_name:user_name,
            password:password
        }
        console.log(userObj);
		$("#loginModal").hide();
        $.post("/user/login",userObj).then(function(data){
            // https://stackoverflow.com/questions/4744751/how-do-i-redirect-with-javascript
            console.log(data);
            var userID = data.id;
            localStorage.setItem("userID", userID);
            location.replace("/user"+userID);
            // location.reload();
        });

    })

    //signup button on the form clicked process user input
    $("#signup_btn").on("click",function(event){
		event.preventDefault();

        var cohort_name = $("#cohort_name").val().trim();
        var user_name = $("#user_name").val().trim();
        var first_name = $("#first_name").val().trim();        
        var last_name = $("#last_name").val().trim();        
        var password = $("#password").val().trim();
        var userObj = {
            cohort_name:cohort_name,
            user_name:user_name,
            first_name:first_name,
            last_name:last_name,
            password:password
        }

        console.log(userObj);
        $("#signupModal").hide();
        $.post("/user/add",userObj).then(function(){

        });
    })

})