(function(exports){
  function Router(pagesController = new PagesController()) {
    this.pagesController = pagesController;
    this.routes = {
      '': [ pagesController.renderIndex(), setIndexButtons ],
      '#log-in': [ pagesController.renderLogIn(), setFormButton ],
      '#sign-up': [ pagesController.renderSignUp(), setFormButton ]
    }
  }

  Router.prototype.matchRoute = function (hash) {
    return this.routes[hash];
  };

  Router.prototype.displyError = function (errorMsg, errorMsgModal = null) {
    return this.pagesController.renderErrorMessage (errorMsg, errorMsgModal);
  };

  exports.Router = Router;
})(this);