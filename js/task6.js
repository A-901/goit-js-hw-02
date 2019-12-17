'user strict'
let input;
const numbers = [];
let total = 0;
do {
  input = prompt('Введите ваше число');
  if (Number(input) !== Number(input)) {
    alert('Было введено не число, попробуйте еще раз');
  }
  if (input !== null && Number(input) === Number(input)) {
    numbers.push(input);
  }
} while (input !== null);

if (numbers.length > 0) {
  for (let number of numbers) {
    total += Number(number);
  }
  console.log(`Общая сумма чисел равна ${total}`);
}