/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// const fnA = function(message, callback) {
//     console.log(message);
//     console.log(callback);
//     callback(100);
// }

// const fnB = function (number) {
//     console.log('лог при вызове fnB', number)
// };

// fnA('qweqwe', fnB);

/*
 * функция doMath(a, b, callback)
 */

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// }

// // #1a
// // const add = function(x, y) {
// //     return x + y;
// // }

// // const sub = function(x, y) {
// //     return x - y;
// // }

// // doMath(2, 3, add);
// // doMath(10, 8, sub);

// // #1b
// doMath(2, 3, function(x, y) {
//     return x + y;
// });
// doMath(10, 8, function(x, y) {
//     return x - y;
// });

/*
 * Отложенный вызов: регистрация событий
 */

// const buttonRef = document.querySelector('.js-button');

// // #1a
// // const handleBtnClick = function () {
// //     console.log('клик по кнопке' + Date.now());
// // }

// // buttonRef.addEventListener('click', handleBtnClick);


// // #1b

// buttonRef.addEventListener('click', function () {
//     console.log('клик по кнопке' + Date.now());
// });


/*
 * Отложенный вызов: геолокация
 */

// const onGetPositionSuccess = function (position) {
//     console.log('это вызов onGetPositionSuccess');
//     console.log(position);
// }

// const onGetPositionError = function (error) {
//     console.log('это вызов onGetPositionError');
//     console.log(error);
// }

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

/*
 * Отложенный вызов: интервалы
 */

// const callback = function () {
//     console.log('через 3 секунды после колбэка в таймауте');
// }

// console.log('в коде перед таймаутом');

// setTimeout(callback, 2000);

// console.log('в коде после таймаута');
/*
 * Отложенный вызов: http-запрос
 * - API URL: https://pokeapi.co/api/v2/pokemon
 */

// const onRequestSuccess = function(response) {
//     console.log('вызов функции после спешного ответа бэкенда');
//     console.log(response);
// }

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess);

/*
 * Фильтр
 */

const filter = function (array, test) {
    const filteredArray = [];

    for (const el of array) {
        // console.log(el);
        const passed = test(el);

        if(passed) {
            filteredArray.push(el);
        }
    }

    return filteredArray;
}

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

const callback1 = function (value) {
    return value >= 3;
}

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function (value) {
    return value <= 4;
}

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
    return fruit.quantity >= 120;
}

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);