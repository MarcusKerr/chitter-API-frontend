(function (exports) {

function PeepsList () {
}

PeepsList.prototype.getPeeps = function () {
  return fetch('https://chitter-backend-api.herokuapp.com/peeps')
  .then(response => response.json())
  .catch(error => console.error('Error:', error));
}

exports.PeepsList = PeepsList;
})(this);