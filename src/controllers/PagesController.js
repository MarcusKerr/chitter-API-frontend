(function(exports){
  function PagesController (indexView = new IndexView(), signUpView = new SignUpView(), logInView = new LogInView(), errorMessageView = ErrorMessageView) {
    this.indexView = indexView;
    this.signUpView = signUpView;
    this.logInView = logInView;
    this.errorMessageView = errorMessageView;
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

  PagesController.prototype.renderErrorMessage = function(errorMsg) {
    return new this.errorMessageView(errorMsg).create();
  };

  exports.PagesController = PagesController;
})(this);
