(function (exports) {
  function Client (url = "https://chitter-backend-api.herokuapp.com") {
    this._url = url;
  }

  Client.prototype.connect = function(path) {
    return fetch(this._url+path)
      .then(function (response) {
        return response.json();
      })
      .catch(function (error) {
        console.error('There was an error connecting to the API:', error);
      });
  };

  Client.prototype.post = function(path, data) {
    return fetch(this._url+path, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{'Content-Type': 'application/json'}
    })
    .then(function (response){
      return response.json();
    })
    .catch(function (error) {
      console.log('There was an error posting to the API:', error);
    });
  };

  exports.Client = Client;
})(this);
