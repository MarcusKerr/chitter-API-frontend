'use strict';
describe("User", function() {
  var User = require("../../src/models/User").User;
  var userData = require('../helpers/userData.json');
  var user;
  var client;

  beforeEach(function() {
    client = jasmine.createSpyObj('client', ['connect']);
    user = new User(client);
  })

  describe(".new", function() {
    it("delegates to the client", function() {
      user.new(userData);
      expect(client.connect).toHaveBeenCalled();
    });
  });
});
