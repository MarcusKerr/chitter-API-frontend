'use strict';
describe("SignUpView", function() {
  var SignUpView = require("../../src/views/SignUpView").SignUpView;
  var signUpView;

  describe("create", function() {
    it("returns html string for sign up page", function() {
     signUpView = new SignUpView();
     expect(signUpView.create()).toEqual("<div><h1>Sign Up</h1></div>");
    });
  });
});
