import {testCoverage, testCoverage2} from "./bar";


console.log(testCoverage(2))
console.log(testCoverage('34'))
console.log(testCoverage({ foo: 'bar' }))

console.log(testCoverage2(2))
console.log(testCoverage2('34'))
console.log(testCoverage2({ foo: 'bar' }))