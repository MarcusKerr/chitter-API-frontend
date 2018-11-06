'use strict';

describe("MainController", function() {

  var MainController = require("../../src/controllers/MainController").MainController;
  var mainController;
  var indexView;
  var signUpView;
  var errorMessageView;

  beforeEach(function() {
    indexView = jasmine.createSpyObj('indexView', ['create']);
    signUpView = jasmine.createSpyObj('signUpView', ['create']);
    errorMessageView = jasmine.createSpyObj('errorMessageView', ['create']);
    usersController = jasmine.createSpyObj('usersController', ['createNewUser']);
    mainController = new MainController(indexView, signUpView, errorMessageView, usersController);
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

  // describe(".renderErrorMessage", function() {
  //   it("delegates to error message view", function() {
  //     mainController.renderErrorMessage();
  //     expect(errorMsgView.create).toHaveBeenCalledWith(errorMsg);
  //   });
  // });

  describe(".createNewUser", function() {
    it("delegates to users controller", function() {
      mainController.createNewUser();
      expect(usersController.createUser).toHavebeenCalled();
    });
  });
});
