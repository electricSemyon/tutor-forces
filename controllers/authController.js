const passport = require('passport');


exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'Failed Login!',
  successRedirect: '/events',
  successFlash: 'You are now logged in'
});