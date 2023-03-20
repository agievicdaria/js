/*
 * Функции
 * - Функциональные выражения
 * - Аргументы и параметры
 * - Возврат значения
 */

// #1
// const add = function (x, y) {
//     console.log(x);
//     console.log(y);

//     console.log('выполняется функция add')

//     return x + y;
// }

// const r1 = add(2, 4);
// console.log('r1: ', r1);

// const r2 = add(6, 8);
// console.log('r2: ', r2);

// #2
// const fn = function(value){
//     if (value < 50) {
//         return 'меньше 50'
//     }

//     return 'больше 50';
// }

// console.log('результат функции: ',  fn(10));
// console.log('результат функции: ', fn(1000));

/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */
const fnA = function () {
    console.log('Выполняется функция A');

    fnB();
  };
  
  const fnB = function () {
    console.log('Выполняется функция B');

    fnC()
  };
  
  const fnC = function () {
    console.log('Выполняется функция C');
  };
  
//   console.log('Лог перед вызовом функции A');
  fnA();
//   console.log('Лог после вызова функции A');
  
//   console.log('Лог перед вызовом функции B');
//   fnB();
//   console.log('Лог после вызова функции B');
  
//   console.log('Лог перед вызовом функции C');
//   fnC();
//   console.log('Лог после вызова функции C');