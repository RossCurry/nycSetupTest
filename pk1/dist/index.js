"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bar_1 = require("./bar");
const bar_copy_1 = require("./bar-copy");
console.log((0, bar_1.testCoverage)(2));
console.log((0, bar_1.testCoverage)('34'));
console.log((0, bar_1.testCoverage)({ foo: 'bar' }));
console.log((0, bar_1.testCoverage2)(2));
console.log((0, bar_1.testCoverage2)('34'));
console.log((0, bar_1.testCoverage2)({ foo: 'bar' }));
console.log((0, bar_copy_1.testCoverage)(2));
console.log((0, bar_copy_1.testCoverage)('34'));
console.log((0, bar_copy_1.testCoverage)({ foo: 'bar' }));
console.log((0, bar_copy_1.testCoverage2)(2));
console.log((0, bar_copy_1.testCoverage2)('34'));
console.log((0, bar_copy_1.testCoverage2)({ foo: 'bar' }));
