const isNum = (value) => !isNaN(value) && value !== '';
const errorMessage = 'Некорректный ввод!';

//Task 1
const showResult = () => {
  let firstNum = prompt('Введите первое значение:');
  let secondNum = prompt('Введите второе значение:');

  firstNum = parseInt(firstNum);
  secondNum = parseInt(secondNum);

  if (isNum(firstNum) && isNum(secondNum) && secondNum > 0) {
    console.log(firstNum.toString(secondNum));
  } else {
    console.log(errorMessage);
  }
}


//Task 2
const calculateSumAndDivision = () => {
  const firstNum = prompt('Введите первое число:');
  if (!isNum(firstNum)) {
    return console.log(errorMessage);
  }

  const secondNum = prompt('Введите второе число:');
  if (!isNum(secondNum)) {
    return console.log(errorMessage);
  }

  console.log(`Ответ: ${Number(firstNum) + Number(secondNum)}, ${Math.round(firstNum / secondNum)}.`);
}

showResult();
calculateSumAndDivision();