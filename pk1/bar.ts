
export const testCoverage = (a: number | string | Record<string, any>) => {
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

export const testCoverage2 = (a: number | string | Record<string, any>) => {
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
