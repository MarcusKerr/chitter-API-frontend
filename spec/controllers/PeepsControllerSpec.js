'use strict';
describe("PeepController", function() {
  var PeepsController = require("../../src/controllers/PeepsController").PeepsController;
  var peepsController;
  var mockClient;
  var mockPeepsList;
  var mockPeepsListView;
  var mockSinglePeepView;
  var peepId = 175;
  var peepModal = null;

  beforeEach(function() {
    mockClient = jasmine.createSpyObj('mockClient', ['connect']);
    mockPeepsList = jasmine.createSpyObj('mockPeepsList', ['getPeeps']);

    mockPeepsListView = jasmine.createSpyObj('mockPeepsListView', ['create']);
    mockPeepsListView.create.and.callFake(function() {
      return Promise.resolve('<div><ol><li>Peeps List</li></ol></div>');
    });
    
    mockSinglePeepView = jasmine.createSpyObj('mockSinglePeepView', ['create']);
    mockSinglePeepView.create.and.callFake(function() {
      return Promise.resolve('<div><p>Single Peep</p></div>')
    });
    peepsController = new PeepsController(mockClient, mockPeepsList, mockPeepsListView, mockSinglePeepView);
  });

  describe(".renderPeepsList", function() {
    it("delegates to peepListview", function() {
      peepsController.renderPeepsList()
      expect(mockPeepsListView.create).toHaveBeenCalled();
    });
  });

  // describe(".renderSinglePeep", function() {
  //   it("delegates to mockSinglePeepView", function() {
  //     peepsController.renderSinglePeep(peepId, peepModal);
  //     expect(mockSinglePeepView.create).toHaveBeenCalled();
  //   });
  // });
});
