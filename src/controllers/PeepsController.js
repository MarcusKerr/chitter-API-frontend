(function (exports) {
  function PeepsController (client = new Client(), peepsList = PeepsList, peepsListView = PeepsListView, singlePeepView = SinglePeepView) {
    this.client = client;
    this.peepsList = new peepsList(this.client);
    this.peepsListView = new peepsListView(this.peepsList);
    this.singlePeepView = singlePeepView;
  };

  PeepsController.prototype.renderPeepsList = function () {
    return this.peepsListView.create()
      .then(peepsHtml => {
        return peepsHtml;
      });
  };

  PeepsController.prototype.renderSinglePeep = function (peepId, peepModal) {
      this.peepsList.getPeeps()
        .then(res => { 
          return (res.find(peep => {
            return peep.id === peepId;
          }));
        })
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

  exports.PeepsController = PeepsController;
})(this);