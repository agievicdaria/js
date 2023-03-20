/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

// // const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// const numbers = [0, 5, 10, ...[1, 2, 3], ...[4, 5]];
// console.log(numbers);

  
  /*
   * Поиск самой маленькой или большой температуры (числа)
   */
 
//   const temps = [18, 14, 12, 21, 17, 29, 24];
//   console.log(Math.max(...temps));
//   console.log(Math.min(...temps));

// *
// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a[0] === b[0]);
// console.log(a === b);

// a[0].x = 1000;

// console.log('a: ', a);
// console.log('b: ', b);

  /*
   * Сшиваем несколько массивов в один через concat() и spread
   */

//   const lastWeekTemps = [1, 2, 3];
//   const currentTemps = [4, 5, 6];
//   const nextWeekTemps = [7, 8, 9];

//   const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
//   console.log(allTemps);
  
  /*
   * Распыление объектов
   * - Object.prototype.assign() и spread
   */

//   const a = { x: 1, y: 2 };
//   const b = { x: 0, z: 3 };

// //   #1a
// //   const c = Object.assign({name: 'Mango'}, a, b);

// // #1b
// // const c = {
// //     name: 'Mango'
// //     ...a, 
// //     ...b
// // }
// //   console.log(c);


// *
const defaultSettings = {
    theme: 'light',
    showNotifications: true,
    hideSidebar: false,
  };
  
  const userSettings = {
    showNotifications: false,
    hideSidebar: true,
  };
  
  const finalSettings = {
    ...defaultSettings,
    ...userSettings,
  };

  console.log(finalSettings);
