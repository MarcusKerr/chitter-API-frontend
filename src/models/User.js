(function(exports){
  function User (client = new Client()) {
    this._client = client;
  };

  User.prototype.new = function(handle, password) {
    return this._client.post('/users', { user: { 'handle': handle, 'password': password } });
  };

  User.prototype.login = function(handle, password) {
    return this._client.post('/sessions', { session: { 'handle': handle, 'password': password } });
  };

  exports.User = User;
})(this);