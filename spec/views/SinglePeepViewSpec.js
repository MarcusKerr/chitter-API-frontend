'use strict';
describe("SinglePeepView", function() {
  var SinglePeepView = require("../../src/views/SinglePeepView").SinglePeepView;
  var peep = require('../helpers/peepsPromisedData.json')[0];
  var singlePeepView;
  var peepModal;

  beforeEach(function() {
    singlePeepView = new SinglePeepView(peep);
  });

  describe(".create", function() {
    it("creates new modal for single peep", function() {
      peepModal = null;
      expect(singlePeepView.create()).toEqual(`<div class="modal fade" id="peep-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="peepModalTitle">@${peep.user.handle}</h5>
          </div>
          <div class="modal-body">
            <h3 class="peep-text">${peep.body}</h3>
          </div>
          <div class="modal-footer">
            <div class="time-and-date-container">
              <span>${singlePeepView._formatDateTime(peep.created_at)}</span>
            </div>
            <div class="likes-container">
              <i class="far fa-heart heart"></i>
              <span class="likes">${peep.likes.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>`);
    });

    // it("changes content of existing modal", function() {
    //   peepModal = true;
    //   expect(singlePeepView.create(peepModal)).toEqual(`<div class="modal-dialog" role="document">
    //             <div class="modal-content">
    //               <div class="modal-header">
    //                 <h5 class="modal-title" id="peepModalTitle">@${peep.user.handle}</h5>
    //               </div>
    //               <div class="modal-body">
    //                 <h3 class="peep-text">${peep.body}</h3>
    //               </div>
    //               <div class="modal-footer">
    //                 <div class="time-and-date-container">
    //                   <span>${singlePeepView._formatDateTime(peep.created_at)}</span>
    //                 </div>
    //                 <div class="likes-container">
    //                   <i class="far fa-heart heart"></i>
    //                   <span class="likes">${peep.likes.length}</span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>`);
    // });
  });
});
