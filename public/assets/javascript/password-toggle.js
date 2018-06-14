
var passwordToggle = document.querySelector('.js-password-toggle')

passwordToggle.addEventListener('change', function() {
//   var password = document.querySelector('.js-password')
  var password = $('.js-password');
   var passwordLabel = $('.js-password-label');

  if (password.type === 'password') {
    password.type = 'text'
    passwordLabel.innerHTML = 'Hide'
  } else {
    password.type = 'password'
    passwordLabel.innerHTML = 'Show'
  }
  
  password.focus()
});
