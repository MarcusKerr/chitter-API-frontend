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
    mainController = new MainController(indexView, signUpView, errorMessageView);
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
});
