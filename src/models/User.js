(function(exports){
  function User (client = new Client()) {
    this._client = client;
    this._path = '/users';
  }

  User.prototype.new = function(userData) {
    return this._client.post(this._path, userData);
  }

  exports.User = User;
})(this);