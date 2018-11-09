'use strict';

describe("MainController", function() {

  var MainController = require("../../src/controllers/MainController").MainController;
  var mainController;
  var indexView;
  var signUpView;
  var logInView;
  var errorMessageView;
  var usersController;

  beforeEach(function() {
    indexView = jasmine.createSpyObj('indexView', ['create']);
    signUpView = jasmine.createSpyObj('signUpView', ['create']);
    logInView = jasmine.createSpyObj('logInView', ['create']);
    errorMessageView = jasmine.createSpyObj('errorMessageView', ['create']);
    usersController = jasmine.createSpyObj('usersController', ['createNewUser', 'login']);
    mainController = new MainController(indexView, signUpView, logInView, errorMessageView, usersController);
  })

  describe(".renderIndex", function() {
    it("delegates to index View", function() {
      mainController.renderIndex();
      expect(indexView.create).toHaveBeenCalled();
    });
  });

  describe(".renderSignUp", function() {
    it("delagates to sign up view", function() {
      mainController.renderSignUp();
      expect(signUpView.create).toHaveBeenCalled();
    });
  });

  describe(".renderLogIn", function() {
    it("delegates to log in view", function() {
      mainController.renderLogIn();
      expect(logInView.create).toHaveBeenCalled();
    });
  });

  // describe(".renderErrorMessage", function() {
  //   it("delegates to error message view", function() {
  //     mainController.renderErrorMessage();
  //     expect(errorMsgView.create).toHaveBeenCalledWith(errorMsg);
  //   });
  // });

  describe(".createNewUser", function() {
    it("delegates to users controller", function() {
      mainController.createNewUser();
      expect(usersController.createNewUser).toHaveBeenCalled();
    });
  });

  describe(".logInUser", function() {
    it("delegates to users controller", function() {
      var handle = "Mk";
      var password = "123";
      mainController.loginUser(handle, password);
      expect(usersController.login).toHaveBeenCalledWith(handle, password);
    });
  });
});
