(function(exports){
  function MainController (indexView = new IndexView()) {
    this.indexView = indexView;
  };

  MainController.prototype.renderIndex = function () {
    return this.indexView.create();
  };

  exports.MainController = MainController;
})(this);