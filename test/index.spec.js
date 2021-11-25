const { expect } = require('chai')
const { __resolve, __reject } = require('./_data.json')
const _12FromTo24Hours = require('..')

describe('12FromTo24Hours test cases', () => {
  it('check all success resulat ✔️', () => {
    __resolve.map(({ _24Time, _12Time }) => {
      expect(_12FromTo24Hours(_24Time)).to.equal(_12Time)
    });

    __resolve.map(({ _24Time, _12Time }, i) => {
      expect(_12FromTo24Hours(_12Time)).to.equal(_24Time)
    });
  })

  it('check all failed resulat ❌', () => {
    __reject.map(({ _24Time }) => {
      expect(() => _12FromTo24Hours(_24Time)).to.Throw
    });
  })
})
