'use strict';

describe("PagesController", function() {

  const PagesController = require("../../src/controllers/PagesController").PagesController;
  var pagesController;
  var mockIndexView;
  var mockSignUpView;
  var mockLogInView;
  var mockNavBarView
  var mockErrorMessageView;
  var mockNewPeepView;

  beforeEach(function() {
    mockIndexView = jasmine.createSpyObj('mockIndexView', ['create']);
    mockSignUpView = jasmine.createSpyObj('mockSignUpView', ['create']);
    mockLogInView = jasmine.createSpyObj('mockLogInView', ['create']);
    mockNavBarView = jasmine.createSpyObj('mockNavBarView', ['create']);
    mockErrorMessageView = jasmine.createSpyObj('mockErrorMessageView', ['create']);
    mockNewPeepView = jasmine.createSpyObj('mockNewPeepView', ['create']);

    pagesController = new PagesController(mockIndexView, mockSignUpView, mockLogInView, mockNavBarView, mockErrorMessageView, mockNewPeepView);
  });

  describe(".renderIndex", function() {
    it("delegates to index View", function() {
      pagesController.renderIndex();
      expect(mockIndexView.create).toHaveBeenCalled();
    });
  });

  describe(".renderSignUp", function() {
    it("delagates to sign up view", function() {
      pagesController.renderSignUp();
      expect(mockSignUpView.create).toHaveBeenCalled();
    });
  });

  describe(".renderLogIn", function() {
    it("delegates to log in view", function() {
      pagesController.renderLogIn();
      expect(mockLogInView.create).toHaveBeenCalled();
    });
  });

  // describe(".renderNavBar", function() {
  //   it("delegates to navbar view", function() {
      
  //   })
  // });

  describe(".renderNewPeepView", function() {
    it("delegates to new peep view", function(){
      pagesController.renderNewPeepView();
      expect(mockNewPeepView.create).toHaveBeenCalled();
    });
  });

  // describe(".renderErrorMessage", function() {
  //   it("delegates to error message view", function() {
  //     PagesController.renderErrorMessage('This is an error message');
  //   });
  // });
});
