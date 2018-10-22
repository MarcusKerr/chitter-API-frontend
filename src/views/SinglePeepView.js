( function(exports) {

  function SinglePeepView (peep) {
    this._peep = peep ;
  }

  SinglePeepView.prototype.create = function () {
    return `<div class="modal fade" id="peepModal" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
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
    if ( mins < 10 ) {
      mins = "0" + mins;
    }
    var ampm = "AM";
    if ( hours > 12 ) {
      hours -= 12;
      ampm = "PM";
    }
    return `${hours}:${mins} ${ampm}`;
  }

  SinglePeepView.prototype._formatDate = function (peepDateTime) {
    var peepDate = peepDateTime.toDateString().slice(4);
    var dateArray = peepDate.split(" ");
    return ([dateArray[1], dateArray[0], dateArray[2]].join(" "));
  }

  exports.SinglePeepView = SinglePeepView;

})(this);
