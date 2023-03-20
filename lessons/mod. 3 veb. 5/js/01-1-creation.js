/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const playlist = {
//     name: 'my playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3
// }

// playlist.isPrivate = false;
// playlist.rating = 7;

// console.log(playlist);

/*
 * Доступ к свойству
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства
 */

// const playlist = {
//     name: 'my playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3
// }

// console.log(playlist.name);
// console.log(playlist['rating']);

// const propertyName = 'tracks';
// console.log(playlist['tracks']);

  
  /*
   * Короткая запись свойств
   */

// const userName = 'Mango';
// const email = 'mango@mail.com';

// // const signupData = {
// //     userName: userName,
// //     email: email
// // }

// const signupData = {
//     userName,
//     email,
// }

// console.log(signupData);
  
  /*
   * Вычисляемые свойства
   */

//   <input name="color" value="tomato"> 
// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     [inputName]: inputValue,
// };
  
// console.log(colorPickerData);

  /*
   * Ссылочный тип {} === {}
   */
  
// const a = {x : 1, y : 2};
// const b = a;

// a.c = 100;
// b.c = 150;
// console.log(a);
// console.log(b);

// console.log(b === a); // true

// console.log({c: 1} === {C: 1}); /// false
  
  /*
   * Массивы и функции это объекты
   */

//   const a = [1, 2, 3];

//   a.hello = ')))';
//   console.log(a);

// const fn = function () {
//     console.log('hello');
// }

// fn.hello = ')))';
// console.dir(fn);
// console.dir(fn.hello);