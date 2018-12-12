(function(exports){
  function SessionsController (client, session = new Session(client)) {
    this._session = session
  };

  SessionsController.prototype.isInSession = function () {
    return this._session.isInSession();
  };

  SessionsController.prototype.startSession = function (handle, password) {
    return this._session.start(handle, password);
  };

  SessionsController.prototype.endSession = function () {
    return this._session.end();
  };

  exports.SessionsController = SessionsController;

})(this);