(function(exports) {
  function UsersController (client, user = new User(client)) {
    this._user = user;
  };

  UsersController.prototype.createNewUser = function(handle, password) {
    return this._user.new(handle, password)
      .then(response => {
        if (response instanceof Error) return false;
        return this.loginUser(handle, password);
      });
  };

  UsersController.prototype.loginUser = function(handle,password) {
    return this._user.login(handle, password)
      .then(response => {
        if (response instanceof Error) return false;
        return response;
      });
  };

  exports.UsersController = UsersController;
})(this);
