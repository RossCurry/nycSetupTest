
const testCoverage = (a) => {
  if (typeof a === 'number'){
    if (a > 0){
      return 'Number is positive';
    }
    if (a === 0){
      return 'Number is zero';
    }
    return 'Number is negative';
  }
  return 'Not a number';
};

const testCoverage2 = (a) => {
  if (typeof a === 'number'){
    if (a > 0){
      return 'Number is positive';
    }
    if (a === 0){
      return 'Number is zero';
    }
    return 'Number is negative';
  }
  return 'Not a number';
};

module.exports = {
  testCoverage,
  testCoverage2
}