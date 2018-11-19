'use strict';

describe("MainController", function() {

  const MainController = require("../../src/controllers/MainController").MainController;
  const sessionData = require("../helpers/sessionData.json");
  var handle = "Mk";
  var password = "123";
  var mainController;
  var mockUsersController;
  var mockPeepsController;
  var mockIndexView;
  var mockSignUpView;
  var mockLogInView;
  var mockErrorMessageView

  beforeEach(function() {
    mockUsersController = jasmine.createSpyObj('mockUsersController', ['createNewUser', 'logInUser', 'logOut', 'inSession']);
    mockPeepsController = jasmine.createSpyObj('mockPeepsController', ['renderPeepsList']);

    mockIndexView = jasmine.createSpyObj('mockIndexView', ['create']);
    mockSignUpView = jasmine.createSpyObj('mockSignUpView', ['create']);
    mockLogInView = jasmine.createSpyObj('mockLogInView', ['create']);
    mockErrorMessageView = jasmine.createSpyObj('mockErrorMessageView', ['create']);

    mainController = new MainController(mockUsersController, mockPeepsController, mockIndexView, mockSignUpView, mockLogInView, mockErrorMessageView);
  });

  describe(".renderIndex", function() {
    it("delegates to index View", function() {
      mainController.renderIndex();
      expect(mockIndexView.create).toHaveBeenCalled();
    });
  });

  describe(".renderSignUp", function() {
    it("delagates to sign up view", function() {
      mainController.renderSignUp();
      expect(mockSignUpView.create).toHaveBeenCalled();
    });
  });

  describe(".renderLogIn", function() {
    it("delegates to log in view", function() {
      mainController.renderLogIn();
      expect(mockLogInView.create).toHaveBeenCalled();
    });
  });

  describe(".renderPeepsList", function() {
    it("delegates to peeps controller", function() {
      mainController.renderPeepsList();
      expect(mockPeepsController.renderPeepsList).toHaveBeenCalled();
    });
  });

  // describe(".renderErrorMessage", function() {
  //   it("delegates to error message view", function() {
  //     mainController.renderErrorMessage('This is an error message');
  //   });
  // });

  describe(".createNewUser", function() {
    it("delegates to users controller", function() {
      mainController.createNewUser(handle, password);
      expect(mockUsersController.createNewUser).toHaveBeenCalledWith(handle, password);
    });
  });

  describe(".logInUser", function() {
    it("delegates to users controller", function() {
      mainController.logInUser(handle, password);
      expect(mockUsersController.logInUser).toHaveBeenCalledWith(handle, password);
    });
  });
  
  describe(".logOutUser", function() {
    it("delegates to users controller", function() {
      mainController.logOut();
      expect(mockUsersController.logOut).toHaveBeenCalled();
    });
  });

  describe(".inSession", function() {
    it("delegates to the users controller", function() {
      mainController.inSession();
      expect(mockUsersController.inSession).toHaveBeenCalled();
    });
  });
});
