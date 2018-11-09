(function(exports) {
  function UsersController (user = new User()) {
    this.user = user;
  };

  UsersController.prototype.createNewUser = function(handle, password) {
    return this.user.new(handle, password);
  };

  UsersController.prototype.loginUser = function(handle,password) {
    return this.user.login(handle, password);
  }

  exports.UsersController = UsersController;
})(this);
