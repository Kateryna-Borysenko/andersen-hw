//Task 1
const concatStrings = (firstString = '', separator = '') => {
  return (secondString) => {
    if (typeof separator !== 'string') {
      separator = '';
    }

    if (typeof secondString !== 'string') {
      return `${firstString}`;
    }

    return concatStrings(`${firstString}${separator}${secondString}`, separator);
  }
}

concatStrings('first')('second')('third')()
concatStrings('first', null)('second')()
concatStrings('first', '123')('second')('third')()
concatStrings('some-value')('')('')(null)
concatStrings('some-value')(2)
concatStrings('some-value')('333')(123n)

//Task 2
