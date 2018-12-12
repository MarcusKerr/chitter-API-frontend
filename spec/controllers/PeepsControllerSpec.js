'use strict';
describe("PeepController", function() {
  var PeepsController = require("../../src/controllers/PeepsController").PeepsController;
  var peepsController;
  var mockClient;
  var mockPeep;
  var mockPeepsList;
  var mockPeepsListView;
  var mockSinglePeepView;
  var mockNavBarHtml = '<div></div>';
  var peepId = 175;
  var peepModal = null;

  beforeEach(function() {
    mockClient = jasmine.createSpyObj('mockClient', ['connect']);
    mockPeep = jasmine.createSpyObj('mockPeep', ['new']);
    mockPeepsList = jasmine.createSpyObj('mockPeepsList', ['getPeeps']);

    mockPeepsListView = jasmine.createSpyObj('mockPeepsListView', ['create']);
    mockPeepsListView.create.and.callFake(function() {
      return Promise.resolve('<div><ol><li>Peeps List</li></ol></div>');
    });
    
    mockSinglePeepView = jasmine.createSpyObj('mockSinglePeepView', ['create']);
    mockSinglePeepView.create.and.callFake(function() {
      return Promise.resolve('<div><p>Single Peep</p></div>')
    });
    peepsController = new PeepsController(mockClient, mockPeep, mockPeepsList, mockPeepsListView, mockSinglePeepView);
  });

  describe(".newPeep", function() {
    it("delegats to the peep model", function() {
      peepsController.newPeep();
      expect(mockPeep.new).toHaveBeenCalled();
    });
  });

  describe(".renderPeepsList", function() {
    it("delegates to peepListview", function() {
      peepsController.renderPeepsList(mockNavBarHtml);
      expect(mockPeepsListView.create).toHaveBeenCalledWith(mockNavBarHtml);
    });
  });

  // describe(".renderSinglePeep", function() {
  //   it("delegates to mockSinglePeepView", function() {
  //     peepsController.renderSinglePeep(peepId, peepModal);
  //     expect(mockSinglePeepView.create).toHaveBeenCalled();
  //   });
  // });
});
