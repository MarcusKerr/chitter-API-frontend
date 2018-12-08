( function(exports) {

  function SinglePeepView (peep) {
    this._peep = peep ;
  }

  SinglePeepView.prototype.create = function (peepModal) {
    if (peepModal) {
      return this._formatPeep();
    } else {
      return `<div class="modal fade" id="peep-modal" tabindex="-1" role="dialog">${this._formatPeep()}</div>`;
    }
  }

  SinglePeepView.prototype._formatPeep = function () {
    return `<div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="peepModalTitle">@${this._peep.user.handle}</h5>
                  </div>
                  <div class="modal-body">
                    <h3 class="peep-text">${this._peep.body}</h3>
                  </div>
                  <div class="modal-footer">
                    <div class="time-and-date-container">
                      <span>${this._formatDateTime(this._peep.created_at)}</span>
                    </div>
                    <div class="likes-container">
                      <i class="far fa-heart heart"></i>
                      <span class="likes">${this._peep.likes.length}</span>
                    </div>
                  </div>
                </div>
              </div>`;
  }

  SinglePeepView.prototype._formatDateTime = function (dateTime) {
    var peepDateTime = new Date(dateTime);
    return `${this._formatTime(peepDateTime)} - ${this._formatDate(peepDateTime)}`;
  }

  SinglePeepView.prototype._formatTime = function (peepDateTime) {
    var hours = peepDateTime.getHours();
    var mins = peepDateTime.getMinutes();
    if (mins < 10) {
      mins = "0" + mins;
    }
    var ampm = "AM";
    if (hours > 12) {
      hours -= 12;
      ampm = "PM";
    }
    return `${hours}:${mins} ${ampm}`;
  }

  SinglePeepView.prototype._formatDate = function (peepDateTime) {
    var peepDateArray = peepDateTime.toDateString().split(" ").slice(1);
    return ([peepDateArray[1], peepDateArray[0], peepDateArray[2]].join(" "));
  }

  exports.SinglePeepView = SinglePeepView;

})(this);
