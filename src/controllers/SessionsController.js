(function(exports){
  function SessionsController (client, session = new Session(client)) {
    this._session = session;
  };

  SessionsController.prototype.getSession = function () {
    return this._session.getSession();
  };

  SessionsController.prototype.isInSession = function () {
    return this._session.isInSession();
  };

  SessionsController.prototype.startSession = function (handle, password) {
    return this._session.startSession(handle, password);
  };

  SessionsController.prototype.endSession = function () {
    return this._session.end();
  };

  exports.SessionsController = SessionsController;

})(this);