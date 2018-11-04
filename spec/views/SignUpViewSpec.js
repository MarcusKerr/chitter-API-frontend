'use strict';
describe("SignUpView", function() {
  var SignUpView = require("../../src/views/SignUpView").SignUpView;
  var signUpView;

  describe("create", function() {
    it("returns html string for sign up page", function() {
     signUpView = new SignUpView();
     expect(signUpView.create()).toEqual(`<div id="sign-up-container" class="col-md-7 mx-auto">
      <div id="sign-up-wrapper">
        <h3>Create your account</h3>
        <form>
          <div class="sign-up-input">
            <input id="handle" name="handle" type="text" placeholder="Handle">
          </div>
          <div class="sign-up-input">
            <input id="password" name="password" type="password" placeholder="Password" autocomplete="off">
          </div>
          <div class="sign-up-input">
            <input id="confirm-password" name="confirm-password" type="password" placeholder="Confirm Password" autocomplete="off">
          </div>
          <button id="confirm-sign-up-btn" class="btn">Submit</button>
        </form>
      </div>
    </div>`);
    });
  });
});
