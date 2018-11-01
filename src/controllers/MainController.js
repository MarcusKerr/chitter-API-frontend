(function(exports){
  function MainController (indexView = new IndexView(), signUpView = new SignUpView()) {
    this.indexView = indexView;
    this.signUpView = signUpView;
  };

  MainController.prototype.renderIndex = function () {
    return this.indexView.create();
  };

  MainController.prototype.renderSignUp = function () {
    return this.signUpView.create();
  }

  exports.MainController = MainController;
})(this);
