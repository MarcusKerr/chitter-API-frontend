(function(exports){
  function Session (client = new Client) {
    this._client = client;
    this._sessionData = {};
  };

  Session.prototype.isInSession = function() {
    return JSON.stringify(this._sessionData) === "{}" ? false : true;
  };

  Session.prototype.start = function (handle, password) {
    return this._client.post('/sessions', {
      "session": {
        handle,
        password
      }
    }).then(sessionData => this._setSession(sessionData));
  }

  Session.prototype._setSession = function (sessionData) {
    this._sessionData['user_id'] = `${sessionData.user_id}`;
    this._sessionData['session_key'] = `${sessionData.session_key}`;
  };

  Session.prototype.end = function () {
    this._sessionData ={};
  };

  exports.Session = Session;
})(this);