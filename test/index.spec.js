const { expect } = require('chai');
const { __resolve, __reject } = require('./_data.json');
const package = require('..'); 


describe('Test using `mocha ☕️` and `chai 🍵` 👻', () => {

  it ('Check All Success Resulat ✔️', () => {
    __resolve.map(({ _24Time, _12Time }) => { expect(package(_24Time)).to.equal(_12Time) });
  });

  it ('Check All Failed Resulat ❌', () => {
    __reject.map(({ _24Time, _12Time }) => { expect(() => package(_24Time)).to.throw(new Error(_12Time).message) });
  });
  
});