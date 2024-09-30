"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCoverage2 = exports.testCoverage = void 0;
const testCoverage = (a) => {
    if (typeof a === 'number') {
        if (a > 0) {
            return 'Number is positive';
        }
        if (a === 0) {
            return 'Number is zero';
        }
        return 'Number is negative';
    }
    return 'Not a number';
};
exports.testCoverage = testCoverage;
const testCoverage2 = (a) => {
    if (typeof a === 'number') {
        if (a > 0) {
            return 'Number is positive';
        }
        if (a === 0) {
            return 'Number is zero';
        }
        return 'Number is negative';
    }
    return 'Not a number';
};
exports.testCoverage2 = testCoverage2;
