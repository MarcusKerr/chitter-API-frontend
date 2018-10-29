( function(exports) {

  function PeepsListView(peepsList) {
    this._peepsList = peepsList;
    this._peepsListHtml = [];
  };

  PeepsListView.prototype.create = function () {
    this._peepsListHtml = [];
    return this._peepsList.getPeeps()
      .then(peepJson => {
        peepJson.forEach((peep) => {
          this._peepsListHtml.push(this._formatPeep(peep));
        });
        return `<ol id="peep-list" class="col-md-6 col-lg-4 mx-auto">${this._peepsListHtml.join('')}</ol>`;
      });
  };

  PeepsListView.prototype._formatPeep = function (peep) {
    return `<li class="peep-list-item" id="${peep.id}">
              <a href="#peeps/${peep.id}">
                <div class="peep-container container pt-2 pb-2">
                  <div class="peep-hearder">
                    <strong class="handle mr-1">@${peep.user.handle}</strong>
                    <span class="divider mr-1">.</span>
                    <small class="time">${this._formatDate(peep.created_at)}</small>
                  </div>
                  <div class="peep-body">
                    <p class="peep-text">${peep.body}</p>
                  </div>
                  <div class="peep-footer">
                    <div class="likes-container">
                      <i class="far fa-heart heart"></i>
                      <span class="likes">${peep.likes.length}</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>`;
  };

  PeepsListView.prototype._formatDate = function (dateTime) {
    var today = new Date();
    var peepDate = new Date(dateTime);
    if (peepDate.getYear() === today.getYear()) {
      return peepDate.toDateString().slice(4,10);
    } else {
      var dateArray = peepDate.toDateString().split(" ");
      dateArray.shift();
      return ([dateArray[1], dateArray[0], dateArray[2]].join(" "));
    }
  };

  exports.PeepsListView = PeepsListView;

})(this);

