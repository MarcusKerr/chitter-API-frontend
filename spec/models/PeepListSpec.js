describe("PeepList", function() {
  var peepList; 

  beforeEach(function() {
    peepsList = new PeepsList();
  });

  it('returns the peep list', function () {
    expect(peepsList.getPeeps()).toEqual([])
  })
});