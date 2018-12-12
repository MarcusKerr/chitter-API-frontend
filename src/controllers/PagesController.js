(function(exports){
  function PagesController (indexView = new IndexView(), signUpView = new SignUpView(), logInView = new LogInView(),  navBarView = NavBarView, errorMessageView = ErrorMessageView, newPeepView = new NewPeepView()) {
    this.indexView = indexView;
    this.signUpView = signUpView;
    this.logInView = logInView;
    this.navBarView = navBarView;
    this.errorMessageView = errorMessageView;
    this.newPeepView = newPeepView;
  };

  PagesController.prototype.renderIndex = function () {
    return this.indexView.create();
  };
  
  PagesController.prototype.renderLogIn = function () {
    return this.logInView.create();
  };

  PagesController.prototype.renderSignUp = function () {
    return this.signUpView.create();
  };

  PagesController.prototype.renderNavBar = function (inSession) {
    return new this.navBarView(inSession).create();
  };

  PagesController.prototype.renderErrorMessage = function (errorMsg) {
    return new this.errorMessageView(errorMsg).create();
  };

  PagesController.prototype.renderNewPeepView = function () {
    return this.newPeepView.create();
  }

  exports.PagesController = PagesController;
})(this);
