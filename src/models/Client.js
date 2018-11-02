(function (exports) {
  function Client (url = "https://chitter-backend-api.herokuapp.com") {
    this._url = url;
    this.data = {
        "user": {
          "handle": "2s",
          "password": "2"

        }
      };
  }

  Client.prototype.connect = function(path) {
    return fetch(this._url+path)
      .then(response => response.json())
      .catch(error => console.error('There was an error connecting to the API:', error));
  };

  Client.prototype.post = function(data) {
    fetch("https://chitter-backend-api.herokuapp.com/users", {
      method: 'POST',
      body: JSON.stringify(this.data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(function (response){
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    })
  }

  exports.Client = Client;
})(this);
