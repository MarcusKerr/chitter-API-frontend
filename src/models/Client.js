(function (exports) {
  function Client (url = "https://chitter-backend-api.herokuapp.com") {
    this._url = url;
  }

  Client.prototype.get = function(path) {
    return fetch(this._url + path)
      .then(function (response) {
        return response.json();
      })
      .catch(function (error) {
        console.error('There was an error connecting to the API:', error);
      });
  };

  Client.prototype.post = function(path, data, sessionKey = null) {
    var headers = new Headers({"Content-Type": "application/json"});
    console.log(data)
    if (path === '/peeps') {
      headers.append("Authorization", `Token token=${sessionKey}`);
    }
    console.log(headers.get("Authorization"))
    return fetch(this._url + path, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: headers
    })
    .then(function (response){
      if(response.ok) {
        return response.json();
      } else {
        throw new Error('There was an error posting to the API.');
      }
    })
    .catch(function (error) {
      return Error(error);
    });
  };

  exports.Client = Client;
})(this);
