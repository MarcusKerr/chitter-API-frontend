'use strict';
describe("UserController", function() {
  var UserController = require("../../src/controllers/UserController").UserController;
  var userData = require('../helpers/peepsPromisedData.json');
  var userController;
  var userModel;

  beforeEach(function() {
    userModel = jasmine.createSpyObj("userModel", ['new'])
    userController = new UserController(userModel);
  })

  describe(".createUser", function() {
    it("Delegates to the user model", function(){
      userController.createUser(userData);
      expect(user.new).toHaveBeenCalledWith(userData);
    });
  });
});
