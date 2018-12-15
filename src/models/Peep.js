(function(exports){
  function Peep (client) {
    this._client = client;
  };

  Peep.prototype.new = function (user_id, body, sessionKey) {
    return this._client.post('/peeps', { peep: { user_id, body } }, sessionKey);
  };

  exports.Peep = Peep
})(this);