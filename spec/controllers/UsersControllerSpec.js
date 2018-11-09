'use strict';
describe("UserController", function() {
  var UsersController = require("../../src/controllers/UsersController").UsersController;
  var usersController;
  var user;
  var handle = "Marcus";
  var password = "124";

  beforeEach(function() {
    user = jasmine.createSpyObj("user", ['new', 'login'])
    usersController = new UsersController(user);
  })

  describe(".createUser", function() {
    it("Delegates to the user model", function(){
      usersController.createNewUser(handle, password);
      expect(user.new).toHaveBeenCalledWith(handle, password);
    });
  });

  describe(".login", function() {
    it("delegates to the user model", function(){
      usersController.loginUser(handle, password);
      expect(user.login).toHaveBeenCalledWith(handle, password);
    });
  });
});
