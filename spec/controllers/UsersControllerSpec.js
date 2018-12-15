'use strict';
describe("UserController", function() {
  var UsersController = require("../../src/controllers/UsersController").UsersController;
  var usersController;
  var mockUser;
  var mockClient
  var handle = "marcus";
  var password = "mypassword";

  beforeEach(function() {
    mockClient = jasmine.createSpy("mockClient");
    mockUser = jasmine.createSpyObj("mockUser", ['new', 'login']);
    usersController = new UsersController(mockClient, mockUser);
  });

  // describe(".createNewUser", function() {
  //   it("delegates to user model", function() {
  //     usersController.createNewUser(handle, password)
  //     expect(mockUser.new).toHaveBeenCalledWith(handle, password);
  //     // expect(mockUser.login).toHaveBeenCalledWith(handle,password);
  //   })
  //   // delegates to user model new
  //   // pdelegates to use model login
  // });

  // describe(".loginUser", function() {
  //   //delegats to user login
  //   // returns respons 
  // });
});
