(function (exports) {
  function PeepsController (client = new Client(), peepsList = new PeepsList(client), peepsListView = new PeepsListView(peepsList), singlePeepView = SinglePeepView) {
    this.client = client;
    this.peepsList = peepsList;
    this.peepsListView = peepsListView;
    this.singlePeepView = singlePeepView;
  };

  PeepsController.prototype.renderPeepsList = function (navBarHtml) {
    return this.peepsListView.create(navBarHtml)
      .then(peepsHtml => {
        return peepsHtml;
      });
  };

  PeepsController.prototype.renderSinglePeep = function (peepId) {
      return this._findPeep(peepId)
        .then(peep => {
          return new this.singlePeepView(peep).create();
        })
        .then(singlePeepHtml => {
          return singlePeepHtml;
        });
  };

  PeepsController.prototype._findPeep = function (peepId) {
    return this.peepsList.getPeeps()
        .then(res => { 
          return (res.find(peep => {
            return peep.id === peepId;
          }));
        });
  };

  exports.PeepsController = PeepsController;
})(this);