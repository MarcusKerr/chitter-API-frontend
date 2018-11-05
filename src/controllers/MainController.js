(function(exports){
  function MainController (indexView = new IndexView(), signUpView = new SignUpView(), errorMessageView = ErrorMessageView) {
    this.indexView = indexView;
    this.signUpView = signUpView;
    this.errorMessageView = errorMessageView;
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

  exports.MainController = MainController;
})(this);
