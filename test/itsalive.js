var expect = require('chai').expect;

describe('Testing suite capabilities', function () {
  it('confirms basic arithmetic', function () {
    expect(2+2).to.equal(4);
  });
});

describe('Testing asynchronous code', function () {
  it('it takes one second', function (done) {
      const firstDate = Date.now();
      setTimeout(function () {
        const timeTaken = Date.now() - firstDate;
        expect(timeTaken).to.be.closeTo(1000, 50);
        done();
      }, 1000)
  })
})
