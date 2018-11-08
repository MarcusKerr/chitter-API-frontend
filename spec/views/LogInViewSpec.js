'use strict';
describe("LogInView", function() {
  var LogInView = require("../../src/views/LogInView").LogInView;
  var logInView;

  describe("create", function() {
    it("returns hrtml string for log in page", function() {
      logInView = new LogInView();
      expect(logInView.create()).toEqual(`<div><h1>Log In</h1></div>`);
    });
  });
});
