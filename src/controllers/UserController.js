(function(exports) {
  function UserController (signUpView = new SignUpView()) {
    this.signUpView = signUpView;
    this.app = document.getElementById('app');
  };

  UserController.prototype.renderSignUpPage = function() {
    return this.app.innerHTML = this.signUpView.create(); 
  };

  exports.UserController = UserController;
})(this);
