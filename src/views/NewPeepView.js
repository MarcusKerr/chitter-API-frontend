(function(exports){
  function ComposeNewPeepView () {

  }

  ComposeNewPeepView.prototype.create = function () {
    return `<div class="modal fade" id="peepModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="peepModalTitle">Compose new Peep</h5>
            </div>
            <div class="modal-body">
              <form>
                <textarea class="form-control" id="peepTextArea" maxlength="140"></textarea>
              </form>
            </div>
            <div class="modal-footer">
              <button id="composePeep" type="button" class="btn">Peep</button>
            </div>
          </div>
        </div>
      </div>`;
  }

  exports.ComposeNewPeepView = ComposeNewPeepView;
})(this);