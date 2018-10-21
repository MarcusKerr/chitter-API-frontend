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
                      <span>${this._peep.updated_at}</span>
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

  exports.SinglePeepView = SinglePeepView;

})(this);
