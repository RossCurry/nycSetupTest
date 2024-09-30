// const { expect } = require('chai');
import { expect } from 'chai';
import {testCoverage} from "./bar";


describe('basic test', () => {
  it("Should work", () => {
    expect(testCoverage(2)).to.equal('Number is positive')
  })
})