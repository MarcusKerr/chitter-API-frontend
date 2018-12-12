'use strict';

describe("SessionsController", function(){
  const SessionsController = require("../../src/controllers/SessionsController").SessionsController;
  var sessionsController;
  var handle = 'marcus';
  var password = 'mypassword';
  var mockClient;
  var mockSessionModel;

  beforeEach(function(){
    mockSessionModel = jasmine.createSpyObj('mockSessionModel', ['isInSession', 'start', 'end']);
    sessionsController = new SessionsController(mockClient, mockSessionModel)
  });

  describe(".isInSession", function() {
    it("delegates to session model", function () {
      sessionsController.isInSession();
      expect(mockSessionModel.isInSession).toHaveBeenCalled();
    });
  });

  describe(".startSession", function() {
    it("delegates to session model", function () {
      sessionsController.startSession(handle, password);
      expect(mockSessionModel.start).toHaveBeenCalledWith(handle, password);
    });
  });

  describe(".endSession", function() {
    it("delegates to session model", function () {
      sessionsController.endSession();
      expect(mockSessionModel.end).toHaveBeenCalled();
    });
  });
});