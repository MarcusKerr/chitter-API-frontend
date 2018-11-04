'use strict';
describe("UserController", function() {
  var UsersController = require("../../src/controllers/UsersController").UsersController;
  var userData = require('../helpers/userData.json');
  var userController;
  var user;

  beforeEach(function() {
    user = jasmine.createSpyObj("user", ['new'])
    userController = new UsersController(user);
  })

  describe(".createUser", function() {
    it("Delegates to the user model", function(){
      userController.createUser(userData);
      expect(user.new).toHaveBeenCalledWith(userData);
    });
  });
});
