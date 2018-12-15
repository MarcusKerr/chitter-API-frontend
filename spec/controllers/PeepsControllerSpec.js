'use strict';
describe("PeepController", function() {
  var PeepsController = require("../../src/controllers/PeepsController").PeepsController;
  var peepsController;
  var mockClient;
  var mockPeep;
  var mockPeepsList;
  var mockPeepsListView;
  var mockSinglePeepView;
  var mockComposePeepView;
  var mockNavBarHtml = '<div></div>';
  var mockPeepId = 1;
  var mockPeepBody = 175;
  var mockSessionKey = "a_valid_session_key";

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
    mockComposePeepView = jasmine.createSpyObj('mockComposePeepView', ['create']);
    peepsController = new PeepsController(mockClient, mockPeep, mockPeepsList, mockPeepsListView, mockSinglePeepView, mockComposePeepView);
  });

  describe(".newPeep", function() {
    it("delegats to the peep model", function() {
      peepsController.newPeep(mockPeepId, mockPeepBody, mockSessionKey);
      expect(mockPeep.new).toHaveBeenCalledWith(mockPeepId, mockPeepBody, mockSessionKey);
    });
  });

  describe(".renderPeepsList", function() {
    it("delegates to peepListview", function() {
      peepsController.renderPeepsList(mockNavBarHtml);
      expect(mockPeepsListView.create).toHaveBeenCalledWith(mockNavBarHtml);
    });
  });

  describe(".renderComposePeepView", function() {
    it("delegates to composePeepView", function() {
      peepsController.renderComposePeepView();
      expect(mockComposePeepView.create).toHaveBeenCalled();
    });
  });

  // describe(".renderSinglePeep", function() {
  //   it("delegates to mockSinglePeepView", function() {
  //     peepsController.renderSinglePeep(peepId, peepModal);
  //     expect(mockSinglePeepView.create).toHaveBeenCalled();
  //   });
  // });
});
