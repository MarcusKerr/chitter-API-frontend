(function(exports) {
  function IndexView () {

  }

  IndexView.prototype.create = function() {
    return `<div id="main-container">
      <div class="main-divs" id="left">
      </div>
      <div class="main-divs" id="right">
        <h3 id="chitter-title">Join Chitter Today</h3>
        <div id="button-container">
          <button id="log-in-btn" class="btn" type="button">Log In</button>
          <button id="sign-up-btn" class="btn" type="button">Sign Up</button>
        </div>
      </div>
    </div>`;
  }

  exports.IndexView = IndexView;
})(this);
