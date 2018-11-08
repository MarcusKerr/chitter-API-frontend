// 'use strict';
// describe("User", function() {
//   var User = require("../../src/models/User").User;
//   var userData = require('../helpers/userData.json');
//   var handle = 'Marcus';
//   var password = '123';
//   var path = '/users';
//   var user;
//   var client;

//   beforeEach(function() {
//     client = jasmine.createSpyObj('client', ['post']);
//     user = new User(client, handle, password);
//   })

//   describe(".new", function() {
//     it("delegates to the client", function() {
//       user.new(handle, password);
//       expect(client.post).toHaveBeenCalledWith(path, handle, password);
//     });
//   });
// });
