/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */

// const fnA = function (parameter) {
//     const innerVariable = 'значение внутренней переменной функции fnA';

//     const innerfunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('это вызов innerfunction');
//     }

//     return innerfunction;
// }
// const fnB = fnA();
// fnB();
// console.log(fnB);

/*
 * Поварёнок
 */

// // без замыкания
// // const makeDish = function (sheffName, dish) {
// //     console.log(`${sheffName} готовит ${dish}`);
// // };

// // makeDish('Mango', 'пирожок');
// // makeDish('Mango', 'омлет');
// // makeDish('Mango', 'чай');

// // makeDish('Poly', 'котлеты');
// // makeDish('Poly', 'супик');
// // makeDish('Poly', 'кофе');

// // замыкание
// const makeSheff = function (name) {
//     const makeDish = function(dish) {
//         console.log(`${name} готовит ${dish}`);
//     }

//     return makeDish
// }

// const mango = makeSheff('Mango');

// mango('котлеты');
// mango('пирожок');

// const poly = makeSheff('Poly');

// mango('чай');
// mango('омлет');


/*
 * Округлятор 🤷‍♂️
 */
// // // без замыкания
// // const floatingPoint = 3.456789;
// // const someInt = Math.round(floatingPoint);
// // const withDecimals = Number(floatingPoint.toFixed(2));

// // const rounder = function(number, places) {
// //     return Number(number.toFixed(places));
// // }
// // console.log(rounder(3.4567, 2));
// // console.log(rounder(5.4512312312367, 3));
// // console.log(rounder(3.4567, 3));
// // console.log(rounder(5.1234, 1));
// // console.log(rounder(3.4567, 2));
// // console.log(rounder(10.67667, 4));

// // замыкание
// const rounder = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     }
// }

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.4567));
// console.log(rounder2(5.4512312312367));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));
// console.log(rounder3(10.67667));

/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */

// 1.
const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;

    return {
        raise(amount) {
            if (amount > 1000) {
                return 'ты офигел?'
            }

            salary += amount;
        },
        lower(amount) {
            salary -= amount;
        },
        current() {
            return `текущая зарплата ${employeeName} - ${salary}`
        }
    }
}

const salaryManager = salaryManagerFactory('Mnago', 5000);
console.log(salaryManager.current());

console.log(salaryManager.raise(10000000));
console.log(salaryManager.current());
// // 2.
// const myLibFactor = function () {
//     let value = 0;

//     return {
//         add(num) {
//             value += num;
//         },
//         getValue() {
//             return value;
//         }
//     }
// } 

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());