/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */

let elementWidth = '50.25px';
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth: ', elementWidth);

let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight);
console.log('elementHigh: ', elementHeight);
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight);

/*
 * - Метод число.toFixed(digits)
 * - Матрёшки на примере  console.log(Number(число.toFixed(digits)))
 */
let salary = 1300.16472;
// salary = salary.toFixed(2);
// salary = Number(salary);
// console.log(salary);
salary = Number(salary.toFixed(2));

console.log(salary);

/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */
let quantity = '30';
let value = 'Эту строку невозможно привести к числу';

console.log(Number(quantity));
console.log(Number(value));

/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator
 */

// const base = 3;
// const power = 4;

// const result = Math.pow(base, power);
// console.log(result);

// const result = Math.pow(base, power);
// console.log(base ** power);

/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

//  1. попросить ввести число и сохранить в переменную
let base = prompt('Давай число');
base = Number(base);
console.log(base);

//  2. попросить ввести степень и сохранить в переменную

let power = prompt('Давай степень');
power = Number(power);
console.log(power);

//  3. Возвести введенные данные в степень и вывести
const result = base ** power;

console.log(result);

/*
 * Генерим псевдослучайные числа
 * - Math.random()
 * - Math.round()
 */
// Math.random() * (max - min) + min
const max = 80;
const min = 10;

const resultt = Math.round(Math.random() * (max - min) + min);

console.log(resultt);

// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;
