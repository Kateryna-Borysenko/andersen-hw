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

concatStrings('first')('second')('third')();
concatStrings('first', null)('second')();
concatStrings('first', '123')('second')('third')();
concatStrings('some-value')('')('')(null);
concatStrings('some-value')(2);
concatStrings('some-value')('333')(123n);

//Task 2
class Calculator {
  constructor(firstNumber, secondNumber) {

    if (arguments.length > 2) {
      throw new Error('Must be two valid numbers');
    }

    this.setX(firstNumber);
    this.setY(secondNumber);
  }

  isInvalidNumber(number) {
    if (isNaN(number)) {
      return true;
    }
  }

  setX(number) {
    if (this.isInvalidNumber(number)) {
      throw new Error('The first number is not valid');
    }

    this.firstNumber = number;
  }

  setY(number) {
    if (this.isInvalidNumber(number)) {
      throw new Error('The second number is not valid');
    }

    this.secondNumber = number;
  }

  logSum = () => {
    console.log(this.firstNumber + this.secondNumber);
  }

  logMul = () => {
    console.log(this.firstNumber * this.secondNumber);
  }

  logSub = () => {
    console.log(this.firstNumber - this.secondNumber);
  }

  logDiv = () => {
    if (this.secondNumber === 0) {
      throw new Error('Division by zero');
    }

    console.log(this.firstNumber / this.secondNumber);
  }
}

const calculator = new Calculator(12, 3);
calculator.logSum();
calculator.logDiv(); 