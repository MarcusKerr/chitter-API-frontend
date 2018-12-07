(function(exports){
  function Router(pagesController = new PagesController()) {

  }

  Router.prototype.matchRoute = function (pathname) {
    return this.routes[pathname]
  };

  exports.Router = Router;
})(this);