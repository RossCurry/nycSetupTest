// const { expect } = require('chai');
import { expect } from 'chai';
import {testCoverage} from "./bar";
// import {testCoverage as t1} from "./foo";


describe('basic test', () => {
  it("Should work", () => {
    expect(testCoverage(2)).to.equal('Number is positive')
  })
})

// describe('basic test', () => {
//   it("Should work", () => {
//     expect(t1(2)).to.equal('Number is positive')
//   })
// })