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
                  <div class="modal-body">${this._peep.body}</div>
                  <div class="modal-footer" id="modal-footer">
                    <div class="time-and-date-container">
                      <span>${this._peep.updated_at}</span>
                    </div>
                    <div class="likes-container">
                      <span class="likes">${this._peep.likes.length} Likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
  }

  exports.SinglePeepView = SinglePeepView;

})(this);
