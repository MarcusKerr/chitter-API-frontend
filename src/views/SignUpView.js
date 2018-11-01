(function(exports) {
  function SignUpView () {
  }

  SignUpView.prototype.create = function () {
    return `<div id="sign-up-container" class="col-md-7 mx-auto">
      <div id="sign-up-wrapper">
        <h3>Sign up to Chitter</h3>
        <form>
          <div class="sign-up-input">
            <input id="handle" name="handle" type="text" placeholder="Handle">
          </div>
          <div class="sign-up-input">
            <input id="password" name="password" type="password" placeholder="Password">
          </div>
          <div class="sign-up-input">
            <input id="confirm-password" name="confirm-password" type="password" placeholder="Confirm Password">
          </div>
          <button id="confirm-sign-up-btn" class="btn">Submit</button>
        </form>
      </div>
    </div>`;
  };

  exports.SignUpView = SignUpView;
})(this);
