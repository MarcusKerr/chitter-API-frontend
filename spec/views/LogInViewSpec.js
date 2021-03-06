'use strict';
describe("LogInView", function() {
  var LogInView = require("../../src/views/LogInView").LogInView;
  var logInView;

  describe("create", function() {
    it("returns hrtml string for log in page", function() {
      logInView = new LogInView();
      expect(logInView.create()).toEqual(`<div id="log-in-container" class="col-md-7 mx-auto">
      <div id="log-in-wrapper">
        <h3>Log in to Chitter</h3>
        <form>
          <div class="log-in-input">
            <input id="handle" name="handle" type="text" placeholder="Handle">
          </div>
          <div class="log-in-input">
            <input id="password" name="password" type="password" placeholder="Password" autocomplete="off">
          </div>
          <button id="confirm-log-in-btn" class="btn">Log In</button>
        </form>
      </div>
    </div>`);
    });
  });
});
