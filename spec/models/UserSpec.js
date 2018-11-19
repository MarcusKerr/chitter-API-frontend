'use strict';
describe("User", function() {
  var User = require("../../src/models/User").User;
  var userData = require('../helpers/userData.json');
  var handle = 'Marcus';
  var password = '12345';
  var path = '/users';
  var user;
  var mockClient;

  beforeEach(function() {
    mockClient = jasmine.createSpyObj('mockClient', ['post']);
    user = new User(mockClient);
  })

  describe(".new", function() {
    it("delegates to the client", function() {
      user.new(handle, password);
      expect(mockClient.post).toHaveBeenCalledWith(path, userData);
    });
  });

  describe(".login", function() {
    it("delegates to the client", function() {
      user.login(handle, password);
      var sessionData = {
      session: {
        'handle': handle,
        'password': password
      }
    };
      expect(mockClient.post).toHaveBeenCalledWith('/sessions', sessionData);
    });
  });
});
