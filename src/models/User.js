(function(exports){
  function User (client = new Client()) {
    this._client = client;
  };

  User.prototype.new = function(handle, password) {
    return this._client.post('/users', {
      user: {
        handle,
        password
      }
    });
  };

  User.prototype.login = function(handle, password) {
    return this._client.post('/sessions', {
      session: {
        handle,
        password
      }
    });
  };

  exports.User = User;
})(this);