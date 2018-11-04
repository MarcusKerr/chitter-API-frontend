'use strict';
describe("PeepController", function() {
  var PeepsController = require("../../src/controllers/PeepsController").PeepsController;
  var peepsController;
  var client;
  var peepsList;
  var peepsListView;
  var singlePeepView;

  beforeEach(function() {
    client = jasmine.createSpyObj('client', ['connect'])
    peepsList = jasmine.createSpyObj('peepsList', ['new', 'getPeeps'])
    peepsListView = jasmine.createSpyObj('peepsListView', ['create'])
    peepsListView.create.and.callFake(function() {
      return Promise.resolve('<div></div>');
    });
    singlePeepView = jasmine.createSpyObj('singlePeepView', ['create'])
    peepsController = new PeepsController(client, peepsList, peepsListView, singlePeepView);
  });

  describe(".renderPeepsList", function() {
    it("delegates to peepListview", function() {
      peepsController.renderPeepsList()
      expect(peepsListView.create).toHaveBeenCalled();
    });
  });
});
