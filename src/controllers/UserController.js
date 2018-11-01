(function(exports) {
  function UserController (user = new User()) {
    this.user = user;
  };

  UserController.prototype.createUser = function(userData) {
    this.user.new(userData)
  }

  exports.UserController = UserController;
})(this);
