'use strict';
describe("ErrorMessasgeView", function() {
  var ErrorMessageView = require("../../src/views/ErrorMessageView").ErrorMessageView;
  var errorMessageView;
  var errorMessage = "This is an error Message";

  describe("create", function() {
    it("returns HTML string for error message", function() {
      errorMessageView = new ErrorMessageView(errorMessage);
      expect(errorMessageView.create()).toEqual(`<div class="modal fade" id="errorMsgModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p id="errorMsg">${errorMessage}</p>
          </div>
        </div>
      </div>
    </div>`);
    });
  });
});