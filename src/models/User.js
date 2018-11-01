(function(exports){
  function User (client = new Client()) {
    this._client = client;
  }

  User.prototype.new = function(userData) {
 
  }

  exports.User = User;
})(this);