const isNum = (value) => !isNaN(value) && value !== '';
const errorMessage = 'Некорректный ввод!';

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

calculateSumAndDivision();