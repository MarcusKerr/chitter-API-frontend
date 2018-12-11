"use strict";
describe("NavBarView", function() {
  const NavBarView = require("../../src/views/NavBarView").NavBarView;
  var navBarView;
  var mockSession;

  describe("create", function(){
    it("returns for when there is no session", function(){
      mockSession = false
      navBarView = new NavBarView(mockSession);
      expect(navBarView.create()).toEqual(`<nav id="nav-bar" class="navbar navbar-expand navbar-light fixed-top">
          <div class="container">
              <ul class="navbar-nav left-links">
                <li class="nav-item"><a class="nav-link" href="">Home</a></li>
              </ul>
              <ul class="navbar-nav right-links">
                <li class="nav-item">
                  <a class="nav-link nav-btn btn" href="#login">Log in</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-btn btn" href="#signup">Sign up</a>
                </li>
              </ul>
          </div>
        </nav>`);
    });

    it("returns html when in session ", function(){
      mockSession = true;
      navBarView = new NavBarView(mockSession);
      expect(navBarView.create()).toEqual(`<nav id="nav-bar" class="navbar navbar-expand navbar-light fixed-top">
          <div class="container">
              <ul class="navbar-nav left-links">
                <li class="nav-item active-link-item"><a class="nav-link active-link" href="#peeps">Home</a></li>
              </ul>
              <ul class="navbar-nav right-links">
                <li class="nav-item">
                  <a id="peep-btn" class="nav-link nav-btn btn">Peep</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-btn btn">Log out</a>
                </li>
              </ul>
          </div>
        </nav>`);
    });
  });
});