(function(exports){
  function Router(pagesController = new PagesController(), peepsController = new PeepsController(), usersController = new UsersController()) {
    this.pagesController = pagesController;
    this.peepsController = peepsController;
    this.usersController = usersController;
    this.session = localStorage;
    this.routes = {
      '': [ pagesController.renderIndex(), setIndexButtons ],
      '#login': [ pagesController.renderLogIn(), setFormButton ],
      '#signup': [ pagesController.renderSignUp(), setFormButton ],
      '#peeps': [ peepsController.renderPeepsList(pagesController.renderNavBar(this._inSession())), setNavBarButtons, this._inSession()],
    };
  }

  Router.prototype.matchRoute = function (hash) {
    // if (this._dontNeedThisPageBecauseLoggedIn(hash)) {
    //   return this._redirect('peeps');
    // }
    if (hash.includes('#peeps/')){
      return [this.routes['#peeps'][0], showSinglePeep];
    } 
    return this.routes[hash];
  };

  Router.prototype._dontNeedThisPageBecauseLoggedIn = function (hash) {
    if(hash === '' || hash === '#login' || hash === '#signup') return this._inSession();
  };

  Router.prototype.displayError = function (errorMsg) {
    return this.pagesController.renderErrorMessage (errorMsg);
  };

  Router.prototype.getSinglePeep = function (peepId) {
    return this.peepsController.renderSinglePeep(peepId);
  };

  Router.prototype.login = function (handle, password) {
    return this.usersController.loginUser(handle, password)
      .then(response => {
        if (response === false) return displayError('The details you enetered were incorrect');
        this._startSession(response);
      });
  };

  Router.prototype.logout = function () {
    this._endSession();
  };

  Router.prototype.createNewUser = function (handle, password) {
    return this.usersController.createNewUser(handle, password)
      .then(response => {
        if (response === false) return displayError(`The handle ${handle} is already in use`);
        this._startSession(response);
      });
  };

  Router.prototype._startSession = function (sessionData) {
    this.session.setItem('user_id', `${sessionData.user_id}`);
    this.session.setItem('session_key', `${sessionData.session_key}`);
    this._redirect('peeps');
  }

  Router.prototype._endSession = function() {
    this.session.clear();
    this._redirect('');
  };

  Router.prototype._inSession = function() {
    if (this.session.length === 2) return true;
    return false;
  };

  Router.prototype._redirect = function (hashUrl) {
    window.location.hash = hashUrl;
  };

  exports.Router = Router;
})(this);