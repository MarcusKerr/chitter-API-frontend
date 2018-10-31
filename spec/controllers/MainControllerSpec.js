'use strict';

describe("MainController", function() {

  var MainController = require("../../src/controllers/MainController").MainController;
  var mainController;
  var indexView;
  var signUpView;

  beforeEach(function() {
    indexView = jasmine.createSpyObj('indexView', ['create']);
    signUpView = jasmine.createSpyObj('signUpView', ['create']);
    mainController = new MainController(indexView, signUpView);
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
});
