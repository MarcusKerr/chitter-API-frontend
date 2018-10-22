(function (exports) {
  function PeepsController (peepsList = PeepsList, peepsListView = PeepsListView, singlePeepView = SinglePeepView) {
    this.peepsList = new peepsList();
    this.peepsListView = new peepsListView (this.peepsList);
    this.singlePeepView = singlePeepView;
    this.app = document.getElementById('app');
    this.renderPeepsList();
  };

  PeepsController.prototype.renderPeepsList = function () {
    this.peepsListView.create()
    .then(peepsHtml => {
     this.app.innerHTML += peepsHtml;
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
      })
  };

  exports.PeepsController = PeepsController;
})(this);

var peepsController = new PeepsController();

showPeepOnChangeUrl();

function showPeepOnChangeUrl() {
  window.addEventListener('hashchange', showClickedPeep);
};

function showClickedPeep() {
  showSinglePeep(getPeepFromUrl(window.location));
};

function getPeepFromUrl(location) {
  return location.hash.split("#peeps/")[1];
};

function showSinglePeep(peepId) {
  var peepModal = document.getElementById('peepModal');
  peepsController.renderSinglePeep(parseInt(peepId), peepModal);
};
