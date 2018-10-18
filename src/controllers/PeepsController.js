(function (exports) {
  function PeepsController (peepsList = PeepsList, peepsListView = PeepsListView) {
    this.peepsListView = new peepsListView (new peepsList());
    this.app = document.getElementById('app');
  };

  PeepsController.prototype.renderPeepsList = function () {
    this.peepsListView.create()
    .then(peepsHtml => {
     this.app.innerHTML = peepsHtml;
    });
  };

  exports.PeepsController = PeepsController;
})(this);

var peepsController = new PeepsController();

window.onload = loadPeeps();

function loadPeeps() {
  peepsController.renderPeepsList();
}