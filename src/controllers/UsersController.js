(function(exports) {
  function UsersController (user = new User()) {
    this.user = user;
  };

  UsersController.prototype.createUser = function(userData) {
    return this.user.new(userData);
  };

  exports.UsersController = UsersController;
})(this);
