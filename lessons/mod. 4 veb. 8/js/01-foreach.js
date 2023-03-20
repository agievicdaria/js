/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (number, index, array) {
    console.log('number', number);

    // array[index] = 20;
});

console.log(numbers)