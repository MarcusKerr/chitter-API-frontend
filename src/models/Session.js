(function(exports){
  function Session (client, sessionStore = window.localStorage) {
    this._client = client;
    this._sessionData = sessionStore;
  };

  Session.prototype.getSession = function () {
    return this._sessionData;
  };

  Session.prototype.isInSession = function() {
    return JSON.stringify(this._sessionData) === "{}" ? false : true;
  };

  Session.prototype.startSession = function (handle, password) {
    return this._client.post('/sessions', {
      "session": {
        handle,
        password
      }
    }).then(sessionData => this._setSession(sessionData));
  }

  Session.prototype._setSession = function (sessionData) {
    this._sessionData.setItem('user_id', `${sessionData.user_id}`);
    this._sessionData.setItem('session_key', `${sessionData.session_key}`);
  };

  Session.prototype.end = function () {
    this._sessionData.clear();
  };

  exports.Session = Session;
})(this);