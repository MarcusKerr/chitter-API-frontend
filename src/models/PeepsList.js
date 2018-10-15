(function (exports) {

function PeepsList () {
  this._peeps_array = []
}

PeepsList.prototype.getPeeps = function () {
  return this._peeps_array;
}

exports.PeepsList = PeepsList;

})(this);