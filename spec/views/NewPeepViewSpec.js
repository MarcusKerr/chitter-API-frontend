'use strict';

describe("NewPeepView", function(){
  const NewPeepView = require("../../src/views/NewPeepView").NewPeepView;
  var newPeepView = new NewPeepView();

  describe(".create", function(){
    it("return Html for new peep modal", function(){
      expect(newPeepView.create()).toEqual('<div></div>');
    });
  });
});
