(function (exports) {

function PeepsList (client) {
  this._client = client;
  this._path = '/peeps';
}

PeepsList.prototype.getPeeps = function () {
  return this._client.get(this._path);
}

exports.PeepsList = PeepsList;

})(this);
