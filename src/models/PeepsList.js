(function (exports) {

function PeepsList (client) {
  this.client = client;
}

PeepsList.prototype.getPeeps = function (path = '/peeps') {
  return this.client.connect(path);
}

exports.PeepsList = PeepsList;

})(this);
