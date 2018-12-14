'use strict';

describe("SessionsController", function(){
  const SessionsController = require("../../src/controllers/SessionsController").SessionsController;
  var sessionsController;
  var handle = 'marcus';
  var password = 'mypassword';
  var mockClient;
  var mockSessionModel;

  beforeEach(function(){
    mockSessionModel = jasmine.createSpyObj('mockSessionModel', ['getSession', 'isInSession', 'startSession', 'end']);
    sessionsController = new SessionsController(mockClient, mockSessionModel)
  });

  describe(".getSession", function() {
    it("delegates to the session model", function(){
      sessionsController.getSession();
      expect(mockSessionModel.getSession).toHaveBeenCalled();
    });
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
      expect(mockSessionModel.startSession).toHaveBeenCalledWith(handle, password);
    });
  });

  describe(".endSession", function() {
    it("delegates to session model", function () {
      sessionsController.endSession();
      expect(mockSessionModel.end).toHaveBeenCalled();
    });
  });
});