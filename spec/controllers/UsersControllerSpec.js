'use strict';
describe("UserController", function() {
  var UserController = require("../../src/controllers/UserController").UserController;
  var userController;
  var signUpView;

  describe(".renderSignUpPage", function() {
    it("adds html for sign up page to the document", function() {
      signUpView = jasmine.createSpyObj('signUpView', ['create']);
      signUpView.create.and.callFake(function() {
        return '<div><p>Sign up page</p></div>';
      });
      userController = new UserController();
      expect(userController.renderSignUpPage()).toEqual('<app><div><p>Sign up page</p></div></app>')
    });
  });
});
