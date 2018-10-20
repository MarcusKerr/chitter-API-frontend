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

  PeepsController.prototype.renderSinglePeep = function (peepId) {
    return new this.singlePeepView(this.peepsList.getPeeps()
      .then(res => { 
        return (res.find(peep => {
          return peep.id === peepId
        }));
      })
    ).create();
  }

  exports.PeepsController = PeepsController;
})(this);

var peepsController = new PeepsController();
// var peepListItems = document.getElementsByClassName('peep-list-item');

// function addClickEventToEachPeep () {
//   for (var i = 0; i < peepListItems.length; i++) {
//     peepListItems[i].addEventListener('click', showPeepId)
//   }
// };

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
  var peepModal = document.getElementById('exampleModal');
  if (peepModal === null ) {
    document.getElementById('app').innerHTML += peepsController.renderSinglePeep(peepId);
  } else {
    peepModal.innerHTML = peepsController.renderSinglePeep(peepId);
  }
};

// function showPeepId (e) {
//   console.log(peepsController.renderSinglePeep(parseInt(e.target.closest('li').id)));
// };

