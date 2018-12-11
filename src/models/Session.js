(function(exports){
  function Session (client = new Client, sessionStorage = localStorage) {
    this._client = client;
    this._session = sessionStorage;
  };

  Session.prototype.start = function (handle, password) {
    return this._client.post('/sessions', {
      "session": {
        handle,
        password
      }
    })
    .then(sessionData => {
      this._session.setItem('user_id', `${sessionData.user_id}`);
      this._session.setItem('session_key', `${sessionData.session_key}`);
      console.log(this._session)
    });
  }

  exports.Session = Session;
})(this);