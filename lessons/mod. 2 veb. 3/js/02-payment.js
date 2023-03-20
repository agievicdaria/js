/*
 * Посчитать общую сумму покупок в корзине
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
//2. сделать переменную total до цикла
let total = 0;

// //1. перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);

//     //3. каждый элемент приплюсовать к total
//     total += cart[i];
// }

// 1. перебрать массив 
for (const value of cart) {
    //3. каждый элемент приплюсовать к total
    total += value;
}

console.log('Total: ', total); 



/*
 * Добавить налог
 */

// for (let i = 0; i > cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.1);
// }
// console.log(cart);