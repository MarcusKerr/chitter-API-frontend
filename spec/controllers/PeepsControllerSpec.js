// 'use strict';
// describe("PeepController", function() {
//   var PeepController = require("../../src/controllers/PeepController").PeepController;
//   var peepController;
//   var client;
//   var peepsList;
//   var peepsListView;
//   var singlePeepView;

//   beforeEach(function() {
//     client = jasmine.createSpyObj('client', ['connect'])
//     peepsList = jasmine.createSpyObj('peepsList', ['getPeeps'])
//     peepsListView = jasmine.createSpyObj('peepsListView', ['create'])
//     singlePeepView = jasmine.createSpyObj('singlePeepView', ['create'])
//     peepController = new PeepController(client, peepsList, peepsListView, singlePeepView);
//   });

//   describe(".renderPeepList", function() {
//     it("delegates to peepListview", function() {
//       peepController.renderPeepList()
//         .then(function(result) {
//           expect(peepListView.create).toHaveBeenCalled();
//         });
//     });
//   });
// });
