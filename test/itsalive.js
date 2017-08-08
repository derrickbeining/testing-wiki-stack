var chai = require('chai');
var expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

// describe('Testing suite capabilities', function () {
//   it('confirms basic arithmetic', function () {
//     expect(2+2).to.equal(4);
//   });
// });

// describe('Testing asynchronous code', function () {
//   it('it takes one second', function (done) {
//       const firstDate = Date.now();
//       setTimeout(function () {
//         const timeTaken = Date.now() - firstDate;
//         expect(timeTaken).to.be.closeTo(1000, 50);
//         done();
//       }, 1000)
//   })
// })

// describe('For each', function () {
//   const arr = [3, 6, 7, 8];
//   logger = chai.spy((el) => { console.log(el) });
//   it('invokes function for every element', function () {
//     arr.forEach(logger);
//     expect(logger).to.have.been.called.exactly(4);
//   })
// })
