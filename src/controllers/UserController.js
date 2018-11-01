(function(exports) {
  function UserController (signUpView = new SignUpView()) {
    this.signUpView = signUpView;
    this.app = document.getElementById('app');
  };



  exports.UserController = UserController;
})(this);
