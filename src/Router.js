(function(exports){
  function Router(pagesController = new PagesController(), peepsController = new PeepsController(), usersController = new UsersController()) {
    this.pagesController = pagesController;
    this.peepsController = peepsController;
    this.usersController = usersController;
    this.routes = {
      '': [ pagesController.renderIndex(), setIndexButtons ],
      '#login': [ pagesController.renderLogIn(), setFormButton ],
      '#signup': [ pagesController.renderSignUp(), setFormButton ],
      '#peeps': [ peepsController.renderPeepsList()],
    }
  }

  Router.prototype.matchRoute = function (hash) {
    if (hash.includes('#peeps/')){
      return [this.routes['#peeps'][0], showSinglePeep];
    } 
    return this.routes[hash];
  };

  Router.prototype.displayError = function (errorMsg) {
    return this.pagesController.renderErrorMessage (errorMsg);
  };

  Router.prototype.getSinglePeep = function (peepId) {
    return this.peepsController.renderSinglePeep(peepId);
  };

  Router.prototype.login = function (handle, password) {
    self = this;
    return this.usersController.loginUser(handle, password)
      .then(response => {
        if (response === false) return displayError('The details you enetered were incorrect');
        this._redirect('peeps');
      });
  };

  Router.prototype._redirect = function (hashUrl) {
    window.location.hash = hashUrl;
  };

  exports.Router = Router;
})(this);