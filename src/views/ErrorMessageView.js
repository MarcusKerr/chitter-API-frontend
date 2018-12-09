(function(exports){
  function ErrorMessageView (errorMsg) {
    this._errorMsg = errorMsg;
  }

  ErrorMessageView.prototype.create = function () {
    return `<div class="modal fade" id="errorMsgModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p id="errorMsg">${this._errorMsg}</p>
          </div>
        </div>
      </div>
    </div>`;
  };
  
  exports.ErrorMessageView = ErrorMessageView;
})(this);
