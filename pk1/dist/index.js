"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bar_1 = require("./bar");
console.log((0, bar_1.testCoverage)(2));
console.log((0, bar_1.testCoverage)('34'));
console.log((0, bar_1.testCoverage)({ foo: 'bar' }));
console.log((0, bar_1.testCoverage2)(2));
console.log((0, bar_1.testCoverage2)('34'));
console.log((0, bar_1.testCoverage2)({ foo: 'bar' }));
