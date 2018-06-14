$(function() {
  //signup button clicked on landing page, pop up modal for the signup form
  $("#signup").on("click", function() {
    $("#signupModal").show();
  });
  $("#signupClose").on("click", function() {
    $("#signupModal").hide();
  });
  // $("#loginModal").show();
  //login button clicked on landing page, pop up modal for the login form
  $("#login").on("click", function() {
    $("#loginModal").show();
  });

  $("#loginClose").on("click", function() {
    $("#loginModal").hide();
  });

  //login button on the form clicked process user input.
  $('#login_btn').on("click", function(event) {
    event.preventDefault();

    // Grab login info
    var credentials = grabLoginInfo();

    // Authenticate if this user provided correct info and log them in
    authenticate(credentials)
      .then(function(authentic) {
        credentials.dashLocation = authentic.cohortId;
        if(authentic.authentic) {
          login(credentials);          
        }
      })
      .catch(function(err) {
        alert("You've provided improper login information. Please try again");
        console.error(err);
      })

    $("#loginModal").hide();

    // $.post("/user/login", userObj)
    //   .then(function(data) {
    //     // https://stackoverflow.com/questions/4744751/how-do-i-redirect-with-javascript
    //     var userID = data.id;
    //     localStorage.setItem("userID", userID);
    //     location.replace("/user" + userID);
    //     // location.reload();
    //   })
  });


  // signup button on the form clicked process user input
  $("#signup_btn").on("click", function(event) {
    event.preventDefault();

    // Grab data from forms
    var formData = grabSignUpInfo();
    // Validate form inputs
    var valid = validateSignUp(formData);

    if (valid) {
      // Check if the user name already exists  
      checkIfNametaken(formData)
        .then(function(exist) {
          if (!exist) {
            return createUser(formData)
          };
        })
        .then(function(userData) {
          // grab the data off the response object
          // for logging in and directing user to their landing page
          var userInfo = {
            username: userData.user_name,
            password: userData.password,
            dashLocation: userData.id
          };
          // Log the user into their account by passing in the userInfo.
          login(userInfo);
        })
        .catch(function(err) {
          alert('That username is already taken. Please pick a new one');
          console.error(err);
        })
    };

  });

});


/**
 * Grabs the data from the user signup forms
 * @returns {Object} returns an object containing the info from the sign-up forms
 */
function grabSignUpInfo() {
  var formData = {};

  formData.cohort_name = $("#cohort_name").val().trim();
  formData.user_name = $("#user_name").val().trim();
  formData.first_name = $("#first_name").val().trim();
  formData.last_name = $("#last_name").val().trim();
  formData.password = $("#password").val().trim();

  return formData;
};

/**
 * Checks if the user fields are valid inputs for creating a user.
 * 
 * @param {Object} formData is an object containing the data filled out by the user
 *                  which was returned from grabSignUpInfo
 * 
 * @returns {boolean} returns a boolean indicatign whether the user provided valid inputs or not
 */
function validateSignUp(formData) {
  var valid = true;

  for (var key in formData) {

    if (formData[key].length === 0) {
      alert('Please fill out the ' + key + ' field.');
      valid = false;
      return;
    };

    if (key === 'password') {
      if (formData[key].length < 6) {
        alert('Please provide a password longer than 6 characters!');
        valid = false;
      };
    };

  };
  return valid;
};
/**
 * Checks if username is available and only creates a user if the name isn't taken.
 * Otherwise it alerts the user and throws an error
 * 
 * @param  {Object} formData is the form data the user fills out
 * @returns a post request that gets back data for if a user exists or not. A length of 
 *          zero means the username was not found, and free to be used
 */
function checkIfNametaken(formData) {
  return $.post('/user/exists', formData)
    .then(function(data) {
      if (data.length === 0) {
        return false;
      } else {
        throw new Error('That username is already taken!');
      }
    })
}

/**
 * @param  {Object} formData is the form data pulled from the user sign-up form
 */
function createUser(formData) {
  $("#signupModal").hide();
  // Hit route for creating a user with formData
  return $.post("/user/add", formData)
};

/**
 * Logs the user in to their landing page. It will receive its login info
 * from either the user sigining up, or just a general login (post-account-creation)
 * 
 * @param  {Object} userObj contains the username, password, and dashLocation by id
 */
function login(userObj) {
  localStorage.setItem("userID", userObj.dashLocation);
  location.replace("/user" + userObj.dashLocation);
};

function grabLoginInfo() {
  var userObj = {};
  userObj.user_name = $("#login_user_name").val().trim();
  userObj.password = $("#login_password").val().trim();
  return userObj;
}

/**
 * @param  {Object} credentials is an object containing the username and password
 */
function authenticate(credentials) {
  // Query DB for this user and password
  return $.post('/user/authenticate',credentials)
    .then(function(data) {
      var cohortId = data[0].CohortId;
      if (data.length === 0) {
        throw new Error("Improper password!");
      } else {
        return {
          authentic: true,
          cohortId: cohortId
        }
      }
    })
}

