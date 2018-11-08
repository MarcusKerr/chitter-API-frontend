(function(exports){
  function User (client = new Client()) {
    this._client = client;
    this._path = '/users';
  };

  User.prototype.new = function(handle, password) {
    var userData = {
      user: {
        'handle': handle,
        'password': password
      }
    }
    return this._post(userData)
      .then(function(response) {
        console.log(response.handle);
      });
  };

  User.prototype._post = function(userData) {
    return this._client.post(this._path, userData);
  };

  exports.User = User;
})(this);