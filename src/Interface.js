var app = document.getElementById('app');
var mainController = new MainController();

startApp();

function startApp () {
  mainController = new MainController();
  app.innerHTML = mainController.renderIndex();
  setButtons();
};

function setButtons () {
  document.getElementById('sign-up-btn').addEventListener("click", function() {
    app.innerHTML = mainController.renderSignUp();
  });
}


// var peepController = new PeepController();

// showPeepOnChangeUrl();

// function showPeepOnChangeUrl() {
//   window.addEventListener('hashchange', showClickedPeep);
// };

// function showClickedPeep() {
//   showSinglePeep(getPeepFromUrl(window.location));
// };

// function getPeepFromUrl(location) {
//   return location.hash.split("#peeps/")[1];
// };

// function showSinglePeep(peepId) {
//   var peepModal = document.getElementById('peepModal');
//   peepController.renderSinglePeep(parseInt(peepId), peepModal);
// };
