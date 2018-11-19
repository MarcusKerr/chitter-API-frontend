(function(exports) {
  function UsersController (user = new User(), localStorage = window.localStorage) {
    this.user = user;
    this.session = localStorage;
  };

  UsersController.prototype.createNewUser = function(handle, password) {
    self = this;
    return this.user.new(handle, password)
      .then(function(response){
        if (response instanceof Error) {
          return false;
        } else {
          return self.logInUser(handle, password)
        }
      });
  };

  UsersController.prototype.logInUser = function(handle,password) {
    self = this;
    return this.user.login(handle, password)
      .then(function(response){
        if (response instanceof Error) {
          return false;
        } else {
          self._startSession(response);
          return self.inSession();
        }
      });
  };

  UsersController.prototype.logOut = function() {
    this._endSession();
  };

  UsersController.prototype._startSession = function(sessionData) {
    this.session.setItem('user_id', `${sessionData.user_id}`);
    this.session.setItem('session_key', `${sessionData.session_key}`);
  };

  UsersController.prototype._endSession = function() {
    this.session.clear();
  };

  UsersController.prototype.inSession = function() {
    if (this.session.length === 2) return true;
    return false;
  };

  exports.UsersController = UsersController;
})(this);
