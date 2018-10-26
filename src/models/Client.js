(function (exports) {
  function Client (url = "https://chitter-backend-api.herokuapp.com") {
    this.url = url;
  }

  Client.prototype.connect = function(path) {
    return fetch(this.url+path)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
  };

  exports.Client = Client;
})(this);