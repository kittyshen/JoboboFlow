
var passwordToggle = $('.js-password-toggle')

passwordToggle.on('click', function() {

  // console.log("here")
  var password = $('.js-password');
   var passwordLabel = $('.js-password-label');
   password.css("color","grey");
  if (password.attr("type") === 'password') {
    password.attr("type","text");
    passwordLabel.html('Hide');
  } else {
    password.attr("type","password");
    passwordLabel.html('Show');
  }
  
  // password.focus()
});
