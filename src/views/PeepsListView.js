( function(exports) {

  function PeepsListView (peepsList) {
    this._peepsList = peepsList;
    this._peepsList_html = [];
  };

  PeepsListView.prototype.create = function () {
    this._peepsList_html = [];
    for(var i = 0; i < this._peepsList.getPeeps().length; i++) {
      this._peepsList_html.push(`
      <div id="peep-list" class="col-md-6 mx-auto">
      <div class="peep-container container pt-2 pb-2">
        <div class="peep-hearder">
          <strong class="handle mr-1">@${this._peepsList.getPeeps()[i].user.handle}</strong>
          <span class="divider mr-1">.</span>
          <small class="time">${this._peepsList.getPeeps()[i].updated_at}</small>
        </div>
        <div class="peep-body">
          <p class="peep-text">${this._peepsList.getPeeps()[i].body}</p>
        </div>
        <div class="peep-footer">
          <span class="likes">${this._peepsList.getPeeps()[i].likes}</span>
        </div>
      </div>  
    </div>`);
    };
  };

  exports.PeepsListView = PeepsListView;
})(this);