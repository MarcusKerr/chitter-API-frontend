(function (exports) {
  function PeepsController (peepsList = PeepsList, peepsListView = PeepsListView, singlePeepView = SinglePeepView) {
    this.peepsListView = new peepsListView (new peepsList());
    this.singlePeepView = singlePeepView;
    this.app = document.getElementById('app');
    this.renderPeepsList();
  };

  PeepsController.prototype.renderPeepsList = function () {
    this.peepsListView.create()
    .then(peepsHtml => {
     this.app.innerHTML = peepsHtml;
    });
  };


  PeepsController.prototype.renderSinglePeep = function () {

  }
  exports.PeepsController = PeepsController;
})(this);

var peepsController = new PeepsController();
