'use strict';

describe("MainController", function() {

  var MainController = require("../../src/controllers/MainController").MainController;
  var mainController;
  var indexView;

  beforeEach(function() {
    indexView = jasmine.createSpyObj('indexView', ['create']);
    mainController = new MainController(indexView);
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
