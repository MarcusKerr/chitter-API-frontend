'use strict';

describe("SessionsController", function(){
  const SessionController = require("../../src/controllers/SessionsController").SessionsController;
  var sessionsController;
  var mockClient;
  var mockSessionModel;

  beforeEach(function(){
    mockSessionModel = jasmine.createSpyObj('mockSessionModel', ['isInSession', 'start', 'end']);
    sessionsController = new SessionsController(mockClient, mockSessionModel)
  });

  describe(".isInSession", function() {
    it("delegates to session model", function () {
      sessionsController.startSession();
      expect(mockSessionModel.isInSession).toHaveBeenCalled();
    });
  });
  describe(".startSession", function() {
    it("delegates to session model", function () {
      sessionsController.startSession();
      expect(mockSessionModel.start).toHaveBeenCalled();
    });
  });
  describe(".endSession", function() {
    it("delegates to session model", function () {
      sessionsController.startSession();
      expect(mockSessionModel.end).toHaveBeenCalled();
    });
  });
});