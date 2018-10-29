'use strict';
describe("PeepsListView", function() {
  var PeepsListView = require('../../src/views/PeepsListView').PeepsListView;
  var promisedData = require('../helpers/peepsPromisedData.json');
  var peepsListView;
  var peepsList;

  beforeEach(function() {
    peepsList = jasmine.createSpyObj('peepsList', ['getPeeps']);
    peepsList.getPeeps.and.callFake(function() {
      return Promise.resolve(promisedData); 
    });
    peepsListView = new PeepsListView(peepsList);
  });

  describe(".create", function() {
    it("delegates collection of peep data to peepslist", function() {
      peepsListView.create()
        .then(function(result) {
          expect(peepsList.getPeeps).toHaveBeenCalled();
        });
    });

    it("return html string containing peep data", function() {
      peepsListView.create()
        .then(function(result) {
          expect(result).toEqual(`<ol id="peep-list" class="col-md-6 col-lg-4 mx-auto"><li class="peep-list-item" id="${ promisedData[0].id}">
              <a href="#peeps/${ promisedData[0].id}">
                <div class="peep-container container pt-2 pb-2">
                  <div class="peep-hearder">
                    <strong class="handle mr-1">@${ promisedData[0].user.handle}</strong>
                    <span class="divider mr-1">.</span>
                    <small class="time">Jun 23</small>
                  </div>
                  <div class="peep-body">
                    <p class="peep-text">${ promisedData[0].body}</p>
                  </div>
                  <div class="peep-footer">
                    <div class="likes-container">
                      <i class="far fa-heart heart"></i>
                      <span class="likes">${ promisedData[0].likes.length}</span>
                    </div>
                  </div>
                </div>
              </a>
            </li></ol>`);
        });
    });
  });
});