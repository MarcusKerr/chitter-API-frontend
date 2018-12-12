'use strict';
describe("Session", function() {
  const Session = require("../../src/models/Session").Session;
  var session;
  var path = '/sessions'
  var handle = 'marcus';
  var password = 'mypassword';
  var mockClient;
  var mockSessionStorage;

  beforeEach(function(){
    mockClient = jasmine.createSpyObj('mockClient', ['post']);
    mockClient.post.and.callFake(function() {
      return Promise.resolve({
        "user_id": 1,
        "session_key": "a_valid_session_key"
      });
    });
    session = new Session(mockClient, mockSessionStorage)
  });

  // describe(".start", function(){
  //    it("delegates to the client", function() {
  //     session.start(handle, password)
  //     expect(mockClient.post).toHaveBeenCalled();
  //     expect(session.isInSession()).toBe(true);
  //   });
  // });

  describe(".end", function() {
    it("ends the session", function(){
      session.start(handle, password);
      session.end();
      expect(session.isInSession()).toBe(false)
    });
  });
});
