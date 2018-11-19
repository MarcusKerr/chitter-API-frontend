(function(exports){
  function MainController (usersController = new UsersController(), peepsController = new PeepsController(), indexView = new IndexView(), signUpView = new SignUpView(), logInView = new LogInView(), errorMessageView = ErrorMessageView) {
    this.usersController = usersController;
    this.peepsController = peepsController;
    this.indexView = indexView;
    this.signUpView = signUpView;
    this.logInView = logInView;
    this.errorMessageView = errorMessageView;
  };

  MainController.prototype.renderIndex = function () {
    return this.indexView.create();
  };

  MainController.prototype.renderSignUp = function () {
    return this.signUpView.create();
  };
  
  MainController.prototype.renderLogIn = function () {
    return this.logInView.create();
  };

  MainController.prototype.renderPeepsList = function() {
    return this.peepsController.renderPeepsList();
  };

  MainController.prototype.renderErrorMessage = function(errorMsg, errorMsgModal = null) {
    return new this.errorMessageView(errorMsg).create(errorMsgModal);
  };

  MainController.prototype.createNewUser = function(handle, password) {
    return this.usersController.createNewUser(handle, password);
  };

  MainController.prototype.logInUser = function(handle, password) {
    return this.usersController.logInUser(handle, password);
  };

  MainController.prototype.logOut = function() {
    return this.usersController.logOut();
  };

  MainController.prototype.inSession = function() {
    return this.usersController.inSession();
  };

  exports.MainController = MainController;
})(this);
