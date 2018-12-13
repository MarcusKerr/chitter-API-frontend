'use strict';

describe("ComposePeepView", function(){
  const ComposePeepView = require("../../src/views/ComposePeepView").ComposePeepView;
  var composePeepView = new ComposePeepView();

  describe(".create", function(){
    it("return Html for new peep modal", function(){
      expect(composePeepView.create()).toEqual(`<div class="modal fade" id="composePeepModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="composePeepModalTitle">Compose new Peep</h5>
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
      </div>`);
    });
  });
});
