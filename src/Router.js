(function(exports){
  function Router(pagesController = new PagesController(), peepsController = new PeepsController()) {
    this.pagesController = pagesController;
    this.peepsController = peepsController;
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

  Router.prototype.displayError = function (errorMsg, errorMsgModal = null) {
    return this.pagesController.renderErrorMessage (errorMsg, errorMsgModal);
  };

  Router.prototype.getSinglePeep = function (peepId, peepModal) {
    return this.peepsController.renderSinglePeep(peepId, peepModal);
  };

  exports.Router = Router;
})(this);