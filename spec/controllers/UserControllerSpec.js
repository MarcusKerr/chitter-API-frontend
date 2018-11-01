'use strict';
describe("UserController", function() {
  var UserController = require("../../src/controllers/UserController").UserController;
  var userData = require('../helpers/userData.json');
  var userController;
  var user;

  beforeEach(function() {
    user = jasmine.createSpyObj("user", ['new'])
    userController = new UserController(user);
  })

  describe(".createUser", function() {
    it("Delegates to the user model", function(){
      userController.createUser(userData);
      expect(user.new).toHaveBeenCalledWith(userData);
    });
  });
});
