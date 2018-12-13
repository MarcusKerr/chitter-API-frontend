(function(exports){
  function Router(client = new Client, indexView = new IndexView(), logInView = new LogInView(), signUpView = new SignUpView(), navBarView = new NavBarView(), errorMessageView = ErrorMessageView(), peepsController = new PeepsController(client), usersController = new UsersController(client), sessionsController = new SessionsController(client)) {
    this.indexView = indexView;
    this.logInView = logInView;
    this.signUpView = signUpView;
    this.navBarView = navBarView;
    this.errorMessageView = errorMessageView
    this.peepsController = peepsController;
    this.usersController = usersController;
    this.sessionsController = sessionsController;
    this.routes = {
      '': [ indexView.create(), setIndexButtons ],
      '#login': [ logInView.create(), setFormButton ],
      '#signup': [ signUpView.create(), setFormButton ]
    };
  };

  Router.prototype.matchRoute = function (hash) {
    if (this._isSigningInOrUp(hash) && this._isInSession()) return this._redirect('peeps');
    if (hash.includes('#peeps')) {
      if (this._isPeepId(hash)) return [ this._getPeepsList(), this._getSinglePeep(parseInt(hash.split('/')[1])), showModal];
      if (hash === '#peeps/new') return [ this._getPeepsList(), showModal, this.peepsController.renderComposePeepView()];
      return [ this._getPeepsList(), setNavBarButtons, this._isInSession() ]
    } 
    return this.routes[hash];
  };

  Router.prototype._isPeepId = function (urlHash) {
    return Number.isInteger(parseInt(urlHash.split('/')[1]));
  };

  Router.prototype._isSigningInOrUp = function (urlHash) {
    if(urlHash === '' || urlHash === '#' || urlHash === '#login' || urlHash === '#signup') return true
  };

  Router.prototype._getPeepsList = function () {
    return this.peepsController.renderPeepsList(this._getNavbar());
  };

  Router.prototype.displayError = function (errorMsg) {
    return new this.errorMessageView.renderErrorMessage (errorMsg);
  };

  Router.prototype._getNavbar = function () {
    return this.navBarView.create(this._isInSession());
  }; 

  Router.prototype._getSinglePeep = function (peepId) {
    return this.peepsController.renderSinglePeep(peepId);
  };

  Router.prototype.login = function (handle, password) {
    return this.usersController.loginUser(handle, password)
      .then(response => {
        if (response === false) return displayError('The details you enetered were incorrect');
        this._startSession(handle, password);
      });
  };

  Router.prototype.logout = function () {
    this._endSession();
  };

  Router.prototype.createNewUser = function (handle, password) {
    return this.usersController.createNewUser(handle, password)
      .then(response => {
        if (response === false) return displayError(`The handle ${handle} is already in use`);
        this._startSession(handle, password);
      });
  };

  Router.prototype._startSession = function (handle, password) {
    this.sessionsController.startSession(handle, password).then(res => this._redirect('peeps'));
  };

  Router.prototype._endSession = function() {
    this.sessionsController.endSession();
    this._redirect('');
  };

  Router.prototype._isInSession = function() {
    return this.sessionsController.isInSession();
  };

  Router.prototype._redirect = function (hashUrl) {
    window.location.hash = hashUrl;
  };

  exports.Router = Router;
})(this);