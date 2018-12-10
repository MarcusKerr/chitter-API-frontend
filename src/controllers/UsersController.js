(function(exports) {
  function UsersController (user = new User(), localStorage = window.localStorage) {
    this.user = user;
    this.session = localStorage;
  };

  UsersController.prototype.createNewUser = function(handle, password) {
    return this.user.new(handle, password)
      .then(response => {
        if (response instanceof Error) return false;
        return self.loginUser(handle, password);
      });
  };

  UsersController.prototype.loginUser = function(handle,password) {
    return this.user.login(handle, password)
      .then(response => {
        if (response instanceof Error) return false;
        return response;
      });
  };

  exports.UsersController = UsersController;
})(this);
