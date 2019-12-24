'user strict'
let input;
const numbers = [];
let total = 0;
do {
  input = prompt('Введите ваше число');
  if (isNaN(input) === true ) {
    alert('Было введено не число, попробуйте еще раз');
    
  }  else if (input !== null ) {
    numbers.push(input);
  }
} while (input !== null);

if (numbers.length > 0) {
  for (let number of numbers) {
    total += Number(number);
  }
  console.log(`Общая сумма чисел равна ${total}`);
}
// (Number(input) !== Number(input))
// (input !== null && Number(input) === Number(input))
// && isNaN(input) === false