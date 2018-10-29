'use strict';
describe('LogInSingUpView', function() {
  var IndexView = require("../../src/views/IndexView").IndexView;
  var indexView;

  describe('create', function() {
    it('renders html a string for sign in sign up page', function() {
      indexView = new IndexView();
      expect(indexView.create()).toEqual(`<div id="main-container">
      <div class="main-divs" id="left">
      </div>
      <div class="main-divs" id="right">
        <h3 id="chitter-title">Join Chitter Today</h3>
        <div id="button-container">
          <button id="log-in-btn" class="btn" type="button">Log In</button>
          <button id="sign-up-btn" class="btn" type="button">Sign Up</button>
        </div>
      </div>
    </div>`);
    });
  });
});