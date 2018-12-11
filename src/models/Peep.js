(function(exports){
  function Peep (client = new Client()) {
    this._client = client;
  };

  Peep.prototype.new = function (id, body, sessionKey) {
    return this._client.post('/peeps', { peep: { id, body } }, sessionKey);
  };

  exports.Peep = Peep
})(this);