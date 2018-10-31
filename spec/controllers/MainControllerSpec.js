'use strict';

describe("MainController", function() {

  var MainController = require("../../src/controllers/MainController").MainController;
  var mainController;

  beforeEach(function() {
    indexPageView = jasmine.createSpyObj("indexPageView", ["create"]);
    mainController = new MainController();
  })

  describe(".renderIndex", function() {
    it("delegates to indexpageView", function() {
      mainController.renderIndex();
      expect(indexPageView.create).toHaveBeenCalled();
    });
  });
});
