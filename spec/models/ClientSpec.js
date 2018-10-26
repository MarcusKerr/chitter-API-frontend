'use strict'
describe('Client', function() {
  var Client = require('../../src/models/Client').Client;
  var url = "https://thisisaurl.com"
  var client;
  var fetch;

  beforeEach(function() {
    client = new Client();
    fetch = jasmine.createSpy('fetch');
  });

  describe(".connect", function() {
    it("Should call fetch with url argument", function() {
      client.connect(url);
      expect(fetch).toHaveBeenCalledWith('url');
    });
  });

});
