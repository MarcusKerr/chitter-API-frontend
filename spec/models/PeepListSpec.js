'use strict';
describe("PeepList", function() {
  var PeepsList = require('../../src/models/PeepsList').PeepsList;
  var promisedData = require('../helpers/peepsPromisedData.json');
  var peepsList;
  var client;

  beforeEach(function() {
    client = jasmine.createSpyObj('client', ['connect']);
    client.connect.and.callFake(function() {
      return Promise.resolve(promisedData);
    });
    peepsList = new PeepsList(client);
  });

  describe('.getPeeps', function () {
    it('delegates fetching of peeps to the client', function() {
      peepsList.getPeeps('/path');
      expect(client.connect).toHaveBeenCalledWith('/path');
    });

    it('returns peep data', function () {
      peepsList.getPeeps()
        .then(function(result) {
          expect(result).toEqual('promisedData');
        });
    });
  });
});
