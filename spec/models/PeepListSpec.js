'use strict';
describe("PeepList", function() {
  var PeepsList = require('../../src/models/PeepsList').PeepsList;
  var promisedData = require('../helpers/peepsPromisedData.json');
  var peepsList;
  var mockClient;

  beforeEach(function() {
    mockClient = jasmine.createSpyObj('mockClient', ['get']);
    mockClient.get.and.callFake(function() {
      return Promise.resolve(promisedData);
    });
    peepsList = new PeepsList(mockClient);
  });

  describe('.getPeeps', function () {
    it('delegates fetching of peeps to the client', function() {
      peepsList.getPeeps();
      expect(mockClient.get).toHaveBeenCalled();
    });

    it('returns peep data', function () {
      peepsList.getPeeps()
        .then(function(result) {
          expect(result).toEqual(promisedData);
        });
    });
  });
});
