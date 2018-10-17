( function(exports) {

  function PeepsListView(peepsList) {
    this._peepsList = peepsList;
    this._peepsList_html = [];
  };

  PeepsListView.prototype.create = function () {
    this._peepsList_html = [];
    var peepHtml = this._peepsList.getPeeps()
    .then(peepJson => {
      peepJson.forEach((peep) => {
        this._peepsList_html.push(this._formatPeep(peep));
      });
      return `<div id="peep-list" class="col-md-6 mx-auto">${this._peepsList_html.join('')}<div>`;
    });
    return peepHtml;
  };

  PeepsListView.prototype._formatPeep = function (peep) {
    return `<div class="peep-container container pt-2 pb-2">
              <div class="peep-hearder">
                <strong class="handle mr-1">@${peep.user.handle}</strong>
                <span class="divider mr-1">.</span>
                <small class="time">${peep.updated_at}</small>
              </div>
              <div class="peep-body">
                <p class="peep-text">${peep.body}</p>
              </div>
              <div class="peep-footer">
                <span class="likes">${peep.likes.length}</span>
              </div>
            </div>`
  };

  exports.PeepsListView = PeepsListView;

})(this);

