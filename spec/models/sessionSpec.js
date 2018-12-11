'use strict';
describe("Session", function() {
  const Session = require("../../src/models/Session").Session;
  const SessionData = require('../helpers/SessionData.json');
  var session;
  var mockClient;

  beforeEach(function(){
    mockClient = jasmine.createSpyObj('mockClient', ['post']);
    session = new Session(mockClient)
  });

  describe(".start", function(){
     it("delegates to the client", function() {
      session.start(SessionData);
      expect(mockClient.post).toHaveBeenCalledWith(SessionData);
    });
  });

});