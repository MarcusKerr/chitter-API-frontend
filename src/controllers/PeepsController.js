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
     this.app.innerHTML = peepsHtml;
    });
  };

  PeepsController.prototype.renderSinglePeep = function (peepId) {
    return new this.singlePeepView(this.peepsList.getPeeps().then(res => {return res[peepId]}));
  }

  exports.PeepsController = PeepsController;
})(this);

var peepsController = new PeepsController();
var peepListItems = document.getElementsByClassName('peep-list-item');

function addClickEventToEachPeep () {
  for (var i = 0; i < peepListItems.length; i++) {
    peepListItems[i].addEventListener('click', showPeepId)
  }
}

function showPeepId (e) {
  console.log(e.target.closest('li').id);
}

