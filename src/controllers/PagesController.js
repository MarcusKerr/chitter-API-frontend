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

  // PagesController.prototype.renderPeepsList = function() {
  //   return this.peepsController.renderPeepsList();
  // };

  PagesController.prototype.renderErrorMessage = function(errorMsg, errorMsgModal = null) {
    return new this.errorMessageView(errorMsg).create(errorMsgModal);
  };

  // PagesController.prototype.createNewUser = function(handle, password) {
  //   return this.usersController.createNewUser(handle, password);
  // };

  // PagesController.prototype.logInUser = function(handle, password) {
  //   return this.usersController.logInUser(handle, password);
  // };

  // PagesController.prototype.logOut = function() {
  //   return this.usersController.logOut();
  // };

  // PagesController.prototype.inSession = function() {
  //   return this.usersController.inSession();
  // };

  exports.PagesController = PagesController;
})(this);
