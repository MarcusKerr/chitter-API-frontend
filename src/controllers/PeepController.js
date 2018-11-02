(function (exports) {
  function PeepController (client = Client, peepsList = PeepsList, peepsListView = PeepsListView, singlePeepView = SinglePeepView) {
    this.client = new client();
    this.peepsList = new peepsList(this.client);
    this.peepsListView = new peepsListView (this.peepsList);
    this.singlePeepView = singlePeepView;
  };

  PeepController.prototype.renderPeepsList = function () {
    return this.peepsListView.create()
      .then(peepsHtml => {
        return peepsHtml;
      });
  };

  PeepController.prototype.renderSinglePeep = function (peepId, peepModal) {
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

  exports.PeepController = PeepController;
})(this);