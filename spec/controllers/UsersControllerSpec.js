'use strict';
describe("UserController", function() {
  var UsersController = require("../../src/controllers/UsersController").UsersController;
  var usersController;
  var mockUser;
  var mockLocalStorage
  var handle = "Marcus";
  var password = "124";

  beforeEach(function() {
    mockUser = jasmine.createSpyObj("mockUser", ['new', 'login']);
    mockLocalStorage = jasmine.createSpyObj("mockLocalStorage", ['setItem']);
    usersController = new UsersController(mockUser, mockLocalStorage);
  })

  describe(".createNewUser", function() {
    
  });

  // describe(".login", function() {
  //   it("delegates to the user model", function(){
  //     usersController.loginUser(handle, password);
  //     expect(mockUser.login).toHaveBeenCalledWith(handle, password);
  //   });
  // });

  // describe(".logOut", function() {
  //   it("clears session data", function() {
  //     usersController.logInUser(handle, password);
  //     usersController.logOut();
  //     expect(usersController.session).toEqual('');
  //   });
  // });
});
