'use strict';
describe("PeepController", function() {
  var PeepsController = require("../../src/controllers/PeepsController").PeepsController;
  var peepsController;
  var client;
  var peepsList;
  var peepsListView;
  var singlePeepView;
  var peepId = 175;
  var peepModal = null;

  beforeEach(function() {
    client = jasmine.createSpyObj('client', ['connect']);
    peepsList = jasmine.createSpyObj('peepsList', ['getPeeps']);
    peepsListView = jasmine.createSpyObj('peepsListView', ['create']);
    peepsListView.create.and.callFake(function() {
      return Promise.resolve('<div><ol><li>Peeps List</li></ol></div>');
    });
    singlePeepView = jasmine.createSpyObj('singlePeepView', ['create']);
    singlePeepView.create.and.callFake(function() {
      return Promise.resolve('<div><p>Single Peep</p></div>')
    });
    peepsController = new PeepsController(client, peepsList, peepsListView, singlePeepView);
  });

  describe(".renderPeepsList", function() {
    it("delegates to peepListview", function() {
      peepsController.renderPeepsList()
      expect(peepsListView.create).toHaveBeenCalled();
    });
  });

  // describe(".renderSinglePeep", function() {
  //   it("delegates to singlePeepView", function() {
  //     peepsController.renderSinglePeep(peepId, peepModal);
  //     expect(singlePeepView.create).toHaveBeenCalled();
  //   });
  // });
});
