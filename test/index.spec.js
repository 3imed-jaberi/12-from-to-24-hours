const { expect } = require('chai')
const { __resolve, __reject } = require('./_data.json')
const _12FromTo24Hours = require('..')

describe('Test using `mocha ☕️` and `chai 🍵` 👻', () => {
  it ('Check All Success Resulat ✔️', () => {
    __resolve.map(({ _24Time, _12Time }) => { 
      expect(_12FromTo24Hours(_24Time)).to.equal(_12Time)
    });
  })

  it ('Check All Failed Resulat ❌', () => {
    __reject.map(({ _24Time }) => { 
      expect(() => _12FromTo24Hours(_24Time)).to.Throw
    });
  })
})
