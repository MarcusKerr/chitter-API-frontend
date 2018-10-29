'use strict';
describe('LogInSingUpView', function() {
  var LogInSignUpView = require("../../src/views/LogInSignUpView").LogInSignUpView;
  var logInSignUpView;

  describe('create', function() {
    it('renders html a string for sign in sign up page', function() {
      logInSignUpView = new LogInSignUpView();
      expect(logInSignUpView.create).toEqual("<div><h1>Sign Up</h1><h1>Log In</h1></div>")
    });
  });
});