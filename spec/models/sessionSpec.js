'use strict';
describe("Session", function() {
  const Session = require("../../src/models/Session").Session;
  const SessionData = require('../helpers/SessionData.json');
  var session;
  var handle = 'Marcus';
  var password = '12345';
  var mockClient;
  var mockSessionStorage;

  beforeEach(function(){
    mockClient = jasmine.createSpyObj('mockClient', ['post']);
    session = new Session(mockClient, mockSessionStorage)
  });

  describe(".start", function(){
     it("delegates to the client", function() {
      session.start(handle, password);
      expect(mockClient.post).toHaveBeenCalledWith(handle, password);
    });
  });

});