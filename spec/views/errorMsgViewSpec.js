'use strict';
describe("ErrorMsgView", function() {
  var ErrorMsgView = require("../../src/views/ErrorMsgView").ErrorMsgView;
  var errorMsgView;
  var errorMsg = "This is an error Message";

  describe("create", function() {
    it("returns HTML string for error message", function() {
      errorMsgView = new ErrorMsgView();
      expect(errorMsgView.create(errorMsg)).toEqual(`<div><p>Error message herer</p></div>`);
    });
  });
})