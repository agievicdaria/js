/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

// const makeOrder = dish => {
//   const DELAY = 1000;

//   const passed = Math.random() > 0.5;

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(passed) {
//             resolve(`✅ Вот ваш заказ: ${dish}`)
//         }
//         reject(' ❌ извините, закончились продукты')
//     }, DELAY)
//   });

// };

// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError)

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

// const makeOrder = dish => {
//     return Promise.resolve(`✅ Вот ваш заказ: ${dish}`)
//   };

//   makeOrder('пирожок').then(onMakeOrderSuccess)

//   function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
//   }

//   function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error);
//   }

/*
 * Покемоны с https://pokeapi.co/
 */

// const fetchPokemonById = (id) => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then((r) => r.json());
// };

// fetchPokemonById(1).then(onSuccess).catch(onError)

// function onSuccess (pokemon) {
//   console.log(pokemon);
// }

// function onError (error) {
//   console.log(pokemon);
// }

// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//       const passed = Math.random() > 0.5;

//       setTimeout(() => {
//         if(passed) {
//           resolve('это resolve');
//         }
//         reject('это reject');
//       }, 2000)
//   })
// }

// makePromise().then(result => {
//   console.log(result);
// }).catch(error => {
//   console.log(error);
// })