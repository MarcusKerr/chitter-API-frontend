(function (exports) {
  function PeepsController (client = new Client(), peepsList = new PeepsList(client), peepsListView = new PeepsListView(peepsList), singlePeepView = SinglePeepView) {
    this.client = client;
    this.peepsList = peepsList;
    this.peepsListView = peepsListView;
    this.singlePeepView = singlePeepView;
  };

  PeepsController.prototype.renderPeepsList = function () {
    return this.peepsListView.create()
      .then(peepsHtml => {
        return peepsHtml;
      });
  };

  PeepsController.prototype.renderSinglePeep = function (peepId, peepModal) {
      this._findPeep(peepId)
        .then(peep => {
          return new this.singlePeepView(peep).create(peepModal);
        })
        .then(singlePeepHtml => {
          if (peepModal) {
            peepModal.innerHTML = singlePeepHtml;
          } else {
            this.app.innerHTML += singlePeepHtml;
          }
          return document.getElementById('peepModal');
        })
        .then(peepModal => {
          $(peepModal).modal('show');
        });
  };

  PeepsController.prototype._findPeep = function (peepId) {
    this.peepsList.getPeeps()
        .then(res => { 
          return (res.find(peep => {
            return peep.id === peepId;
          }));
        });
  }

  exports.PeepsController = PeepsController;
})(this);