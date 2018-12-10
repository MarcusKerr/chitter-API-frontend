"use strict";
describe("NavBarView", function() {
  const NavBarView = require("../../src/views/NavBarView").NavBarView;
  var navBarView;
  var session = false;

  describe("create", function(){
    it("returns html for when there is no session", function(){
      navBarView = new NavBarView();
      expect(navBarView.create().toEqual(
        `<nav id="nav-bar" class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container">
            <ul class="navbar-nav left-links">
              <li class="nav-item">
                <a class="nav-link" href="">Home</a>
              </li>
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
      </nav>`
      ));
    });

    //  it("returns html for when in session ", function(){


    // });
  });
});