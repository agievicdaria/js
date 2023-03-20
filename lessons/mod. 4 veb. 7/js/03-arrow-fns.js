/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 */

// 1.
// const add = function (a, b, c) {
//     console.log(arguments);
//     return a + b + c;
// };
// console.log(add(5, 10, 15))

// const addArrow1 = (a, b, c) => {
//     return a + b + c;
// };

// const addArrow2 = (a, b, c) => a + b + c

// const addArrow3 = (...args) => {
//     console.log(args);
// };
// console.log(addArrow3(5, 10, 15))

// 2.
// const fnA = function () {
//     return {
//         a: 5
//     }
// }
// console.log(fnA());

// const arrowFnA = () => ({arrow: 5});
// console.log(arrowFnA());

/*фильтр
 *
 *
 */

// const filter = (array, test) => {
//     const filteredArray = [];

//     for (const el of array) {
//         // console.log(el);
//         const passed = test(el);

//         if(passed) {
//             filteredArray.push(el);
//         }
//     }

//     return filteredArray;
// }

// // 1. надо передать функцию
// // 2. функция получает элемент массива
// // 3. если элемент массива удовлетворяет условию то функция вернет true
// // 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

// const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
// console.log(r2);

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = (fruit) => fruit.quantity >= 120;

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

/*this 1
 *
 *
 */

// const showThis = () => {
//     console.log('this in showThis:', this);
// }

// showThis();

// const user = {name: 'Mango'};
// user.showContext = showThis;

// user.showContext();

/*this 2
 *
 *
 */
// const user = {
//     fullName: 'Mango',
//     showName() {
//         console.log('this: ', this);
//         console.log('this.fullName: ', this.fullName);

//         const inner1 = function () {
//             console.log('this in inner: ', this);
//         }

//         const inner2 = () => {
//             console.log('this in inner: ', this);
//         }

//         inner1();
//         inner2();
//     }
// }

// user.showName()

/*стрелки как методы объекта #1
 *
 * 💩
 */ 
// //💩
// const user = {
//   fullName: "Mango",
//   showName: () => {
//     console.log("this: ", this);
//     console.log("this.fullName: ", this.fullName);
//   },
// };

// user.showName();

/*стрелки как методы объекта #2
 *
 * 💩
 */ 

// 💩
// const objA = {
//     x: 5,
//     showX() {
//         console.log('this в objA.showX: ', this);
//         console.log(this.x);

//         const objB= {
//             y: 10,
//             showThis: () => {
//                 console.log('this в objB.showX: ', this);
//             }
//         }

//         objB.showThis();
//     }
// }

// objA.showX();