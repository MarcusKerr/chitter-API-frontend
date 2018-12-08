(function(exports){
  function Router(pagesController = new PagesController(), peepsController = new PeepsController()) {
    this.pagesController = pagesController;
    this.peepsController = peepsController;
    this.routes = {
      '': [ pagesController.renderIndex(), setIndexButtons ],
      '#log-in': [ pagesController.renderLogIn(), setFormButton ],
      '#sign-up': [ pagesController.renderSignUp(), setFormButton ],
      '#peeps': [ peepsController.renderPeepsList(), showPeepOnChangeUrl ]
    }
  }

  Router.prototype.matchRoute = function (hash) {
    return this.routes[hash];
  };

  Router.prototype.displayError = function (errorMsg, errorMsgModal = null) {
    return this.pagesController.renderErrorMessage (errorMsg, errorMsgModal);
  };

  exports.Router = Router;
})(this);