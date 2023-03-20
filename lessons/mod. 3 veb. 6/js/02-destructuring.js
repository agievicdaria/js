/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//   };

// const {name, rating, tracks, trackCount: numberOfTracks, author = 'Mango'} = playlist;

// console.log(name);
// console.log(rating);
// console.log(tracks);
// console.log(numberOfTracks);
// console.log(author);

// console.log(name, rating, tracks, numberOfTracks, author);

/*
 * Глубокая деструктуризация
 */

// const profile = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   location,
//   stats: { followers, views, likes },
// } = profile;

// //   const {followers, views, likes} = stats;

// console.log(name, tag, location, followers, views, likes);

/*
 * Деструктуризация массивов
 */

//   const rgb = [255, 100, 80];

//   const [red, green, blue] = rgb;

// console.log(red, green, blue);


//   const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
//   };

// //   #1a
// // const ratings = Object.values(authors);
// // console.log(Math.max(...ratings));

// const entries = Object.entries(authors);

// for (const entry of entries) {
//     // #1b
//     // const [name, rating] = entry;

//     // #1c
//     // const name = entry[0];
//     // const rating = entry[1];

//     console.log(name, rating);
// }

/*
 * Операция rest (сбор)
 */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {name, tag, location, ...restProps} = profile;

// console.log(name, tag, location);
// console.log(restProps):

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

// #1a
//   const showProfileInfo = function (userProfile) {
//     const {name, tag, location, avatar, stats: {followers, views, likes}} = userProfile;

//     console.log(name, tag, location, avatar, followers, views, likes);
//   }

// #1b
  const showProfileInfo = function ({name, tag, location, avatar, stats: {followers, views, likes}} ) {
      console.log(name, tag, location, avatar, followers, views, likes)
  }

  const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };

  showProfileInfo(profile);
