(function(exports){
  function User (client = new Client()) {
    this._client = client;
  };

  User.prototype.new = function(handle, password) {
    var userData = {
      user: {
        'handle': handle,
        'password': password
      }
    };
    return this._client.post('/users', userData);
  };

  User.prototype.login = function(handle, password) {
    var sessionData = {
      session: {
        'handle': handle,
        'password': password
      }
    };
    return this._client.post('/sessions', sessionData)
  };

  exports.User = User;
})(this);