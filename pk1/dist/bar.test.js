"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { expect } = require('chai');
const chai_1 = require("chai");
const bar_1 = require("./bar");
describe('basic test', () => {
    it("Should work", () => {
        (0, chai_1.expect)((0, bar_1.testCoverage)(2)).to.equal('Number is positive');
    });
});
