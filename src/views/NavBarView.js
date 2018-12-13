(function(exports){
  function NavBarView () {
    this._links = [];
  };

  NavBarView.prototype.create = function (isInSession) {
    this._setLinks(isInSession);
    return `<nav id="nav-bar" class="navbar navbar-expand navbar-light fixed-top">
          <div class="container">
              <ul class="navbar-nav left-links">
                ${this._links[0]}
              </ul>
              <ul class="navbar-nav right-links">
                <li class="nav-item">
                  ${this._links[1]}
                </li>
                <li class="nav-item">
                  ${this._links[2]}
                </li>
              </ul>
          </div>
        </nav>`;
  };

  NavBarView.prototype._setLinks = function (isInSession) {
    if (isInSession) {
      return this._links = [
        `<li class="nav-item active-link-item"><a class="nav-link active-link" href="#peeps">Home</a></li>`,
        `<a id="peep-btn" class="nav-link nav-btn btn">Peep</a>`,
        `<a class="nav-link nav-btn btn">Log out</a>`]
    } 
    return this._links = [
      `<li class="nav-item"><a class="nav-link" href="">Home</a></li>`,
      `<a class="nav-link nav-btn btn" href="#login">Log in</a>`,
      `<a class="nav-link nav-btn btn" href="#signup">Sign up</a>`]
  }

  exports.NavBarView = NavBarView;
})(this);