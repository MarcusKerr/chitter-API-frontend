(function (exports) {
  function Client (url = "https://chitter-backend-api.herokuapp.com") {
    this._url = url;
  }

  Client.prototype.connect = function(path) {
    return fetch(this._url+path)
      .then(response => response.json())
      .catch(error => console.error('There was an error connecting to the API:', error));
  };

  exports.Client = Client;
})(this);
