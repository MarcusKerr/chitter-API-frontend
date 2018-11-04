'use strict';
describe("UserController", function() {
  var UsersController = require("../../src/controllers/UsersController").UsersController;
  var userData = require('../helpers/userData.json');
  var usersController;
  var user;

  beforeEach(function() {
    user = jasmine.createSpyObj("user", ['new'])
    usersController = new UsersController(user);
  })

  describe(".createUser", function() {
    it("Delegates to the user model", function(){
      usersController.createUser(userData);
      expect(user.new).toHaveBeenCalledWith(userData);
    });
  });
});
