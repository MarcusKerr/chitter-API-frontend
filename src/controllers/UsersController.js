(function(exports) {
  function UsersController (user = new User()) {
    this.user = user;
  };

  UserController.prototype.createUser = function(userData) {
    this.user.new(userData);
  };

  exports.UsersController = UsersController;
})(this);
