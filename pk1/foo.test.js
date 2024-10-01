const { expect } = require('chai');
const foo = require('./foo')


describe('basic test', () => {
  it("Should work", () => {
    expect(foo.testCoverage(2)).to.equal('Number is positive')
  })
})