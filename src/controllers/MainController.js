(function(exports){
  function MainController (indexView = new IndexView(), signUpView = new SignUpView(), errorMessageView = ErrorMessageView, usersController = new UsersController()) {
    this.indexView = indexView;
    this.signUpView = signUpView;
    this.errorMessageView = errorMessageView;
    this.usersController = usersController;
  };

  MainController.prototype.renderIndex = function () {
    return this.indexView.create();
  };

  MainController.prototype.renderSignUp = function () {
    return this.signUpView.create();
  }

  MainController.prototype.renderErrorMessage = function(errorMsg, errorMsgModal = null) {
    return new this.errorMessageView(errorMsg).create(errorMsgModal);
  }

  MainController.prototype.createNewUser = function(handle, password) {
    return this.usersController.createNewUser(handle, password);
  }
  exports.MainController = MainController;
})(this);
