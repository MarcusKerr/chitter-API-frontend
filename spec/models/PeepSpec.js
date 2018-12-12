// 'use strict';
// describe("Peep", function() {
//   const Peep = require("../../src/models/Peep").Peep;
//   const mockSession = require('../helpers/mockSession.json');
//   var peep;
//   var mockClient;

//   beforeEach(function() {
//     mockClient = jasmine.createSpyObj('mockClient', ['post']);
//     peep = new Peep(mockClient);
//   });

//   describe(".new", function() {
//     it("delegattes to the client", function() {
//       peep.new(mockSession, PeepData);
//       expect(mockClient.post).toHaveBeenCalled();
//     });
//   });
// });