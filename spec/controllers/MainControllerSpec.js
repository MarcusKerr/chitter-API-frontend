'use strict';

describe("MainController", function() {

  var MainController = require("../../src/controllers/MainController").MainController;
  var mainController;
  var indexView;
  var signUpView;
  var logInView;
  var errorMessageView;
  var usersController;
  var peepsController;

  beforeEach(function() {
    indexView = jasmine.createSpyObj('indexView', ['create']);
    signUpView = jasmine.createSpyObj('signUpView', ['create']);
    logInView = jasmine.createSpyObj('logInView', ['create']);
    errorMessageView = jasmine.createSpyObj('errorMessageView', ['create']);
    usersController = jasmine.createSpyObj('usersController', ['createNewUser', 'loginUser']);
    peepsController = jasmine.createSpyObj('peepsController', ['renderPeepsList']);
    mainController = new MainController(indexView, signUpView, logInView, errorMessageView, usersController, peepsController);
  })

  describe(".renderIndex", function() {
    it("delegates to index View", function() {
      mainController.renderIndex();
      expect(indexView.create).toHaveBeenCalled();
    });
  });

  describe(".renderSignUp", function() {
    it("delagates to sign up view", function() {
      mainController.renderSignUp();
      expect(signUpView.create).toHaveBeenCalled();
    });
  });

  describe(".renderLogIn", function() {
    it("delegates to log in view", function() {
      mainController.renderLogIn();
      expect(logInView.create).toHaveBeenCalled();
    });
  });

  // describe(".renderErrorMessage", function() {
  //   it("delegates to error message view", function() {
  //     mainController.renderErrorMessage();
  //     expect(errorMsgView.create).toHaveBeenCalledWith(errorMsg);
  //   });
  // });

  describe(".createNewUser", function() {
    it("delegates to users controller", function() {
      mainController.createNewUser();
      expect(usersController.createNewUser).toHaveBeenCalled();
    });
  });

  describe(".logInUser", function() {
    it("delegates to users controller", function() {
      var handle = "Mk";
      var password = "123";
      mainController.loginUser(handle, password);
      expect(usersController.loginUser).toHaveBeenCalledWith(handle, password);
    });
  });

  describe(".renderPeepsList", function() {
    it("delegates to peeps controller", function() {
      mainController.renderPeepsList();
      expect(peepsController.renderPeepsList).toHaveBeenCalled();
    });
  });

  describe(".startSession", function() {
    it("stores user id and a valid session key", function() {
      mainController.startSession(sessionData);
      expect(mainController.session.user_id).toEqual('1');
      expect(mainController.session.session_key).toEqual('a_valid_session_key');
    });
  });

  describe(".endSession", function() {
    it("clears the session data", function () {
      mainController.endSession();
      expect(mainController.session.user_id).toEqual('');
      expect(mainController.session.session_key).toEqual('');
    });
  });
});
