$(function () {
  //signup button clicked on landing page, pop up modal for the signup form
  $("#signup").on("click", function () {
    $("#signupModal").show();
  });
  $("#signupClose").on("click", function () {
    $("#signupModal").hide();
  });
  // $("#loginModal").show();
  //login button clicked on landing page, pop up modal for the login form
  $("#login").on("click", function () {
    $("#loginModal").show();
  });

  $("#loginClose").on("click", function () {
    $("#loginModal").hide();
  });

  //login button on the form clicked process user input. Props here is optional
  $('#login_btn').on("click", function (event, props) {
    event.preventDefault();

    var userObj = {};
    // Mapping the data between the props object and the userObj manually
    // This block is hit as a way to direct people to automatically login
    // if they are signing up.
    if (props) {
      for (var key in props) {
        userObj[key] = props[key];
      };
      // This block is for returning users providing their information
    } else {
      userObj.user_name = $("#login_user_name").val().trim();
      userObj.password = $("#login_password").val().trim();
    };

    $("#loginModal").hide();
    $.post("/user/login", userObj).then(function (data) {
      // https://stackoverflow.com/questions/4744751/how-do-i-redirect-with-javascript
      var userID = data.id;
      localStorage.setItem("userID", userID);
      location.replace("/user" + userID);
      // location.reload();
    });

  });


  //signup button on the form clicked process user input
  $("#signup_btn").on("click", function (event) {
    event.preventDefault();

    var cohort_name = $("#cohort_name").val().trim();
    var user_name = $("#user_name").val().trim();
    var first_name = $("#first_name").val().trim();
    var last_name = $("#last_name").val().trim();
    var password = $("#password").val().trim();
    var userObj = {
      cohort_name: cohort_name,
      user_name: user_name,
      first_name: first_name,
      last_name: last_name,
      password: password
    };

    // Check form for valid inputs
    var valid = true;
    for (var key in userObj) {

      if (userObj[key].length === 0) {
        alert('Please fill out the ' + key + ' field.');
        valid = false;
        return;
      };

      if (key === 'password') {
        if (userObj[key].length < 6) {
          alert('Please provide a password longer than 6 characters!');
          valid = false;
        };
      };

    };

    if (valid) {
      $("#signupModal").hide();
      $.post("/user/add", userObj).then(function (data) {
        console.log('Here is data returned from signup: ' + data);
        // location.replace("/user"+data.id);
      });
    };

  });

});

/**
 * Logs a user in using credentials that are either provided by signing up, or doing 
 * a basic login
 * 
 * @param  {Object} credentials is an object containing login form data {user_name: 'jo' , password: 123456}
 * @returns {Object} the 
 */
function login(credentials) {
  var userObj = {};
  // Mapping the data between the credentials object and the userObj manually
  // This block is hit as a way to direct people to automatically login
  // if they are signing up.
  if (credentials) {
    for (var key in credentials) {
      userObj[key] = credentials[key];
    };
    // This block is for returning users providing their information
  } else {
    userObj.user_name = $("#login_user_name").val().trim();
    userObj.password = $("#login_password").val().trim();
  };
  return userObj;
}

function authenticate(userObj) {
  // Query DB for this user and password
  // return true if they are found to exist in the DB with the correct password
  // otherwise, prompt the user that they have provided an incorrect password
}