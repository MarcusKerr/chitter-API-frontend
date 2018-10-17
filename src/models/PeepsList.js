(function (exports) {

function PeepsList () {
  this._peeps_array = []
}

PeepsList.prototype.getPeeps = function () {
  //add them to the array
  // return the array
  fetch('https://chitter-backend-api.herokuapp.com/peeps')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
}

  exports.PeepsList = PeepsList;

})(this);