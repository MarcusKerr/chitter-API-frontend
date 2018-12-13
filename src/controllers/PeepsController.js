(function (exports) {
  function PeepsController (client, peep = new Peep(client), peepsList = new PeepsList(client), peepsListView = new PeepsListView(peepsList), singlePeepView = SinglePeepView, composePeepView = new ComposePeepView()) {
    this._peep = peep;
    this._peepsList = peepsList;
    this._peepsListView = peepsListView;
    this._singlePeepView = singlePeepView;
    this._composePeepView = composePeepView;
  };

  PeepsController.prototype.renderPeepsList = function (navBarHtml) {
    return this._peepsListView.create(navBarHtml)
      .then(peepsHtml => {
        return peepsHtml;
      });
  };

  PeepsController.prototype.renderSinglePeep = function (peepId) {
      return this._findPeep(peepId)
        .then(peep => {
          return new this._singlePeepView(peep).create();
        })
        .then(singlePeepHtml => {
          return singlePeepHtml;
        });
  };

  PeepsController.prototype._findPeep = function (peepId) {
    return this._peepsList.getPeeps()
        .then(res => { 
          return (res.find(peep => {
            return peep.id === peepId;
          }));
        });
  };

  PeepsController.prototype.renderComposePeepView = function() {
    return this._composePeepView.create();
  };

  PeepsController.prototype.newPeep = function (id, body, sessionKey) {
    return this._peep.new(id, body, sessionKey);
  };

  exports.PeepsController = PeepsController;
})(this);