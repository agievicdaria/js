/*
 * Работа с коллекцией (массивом объектов)
 */
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
  ];
  
//   console.table(friends);

//   for (const friend of friends) {
//       console.log(friend.name);

//       friend.newprop = 555;
//   }

//   console.table(friends); 
  
  /*
   * Ищем друга по имени
   */
  
//   const findFriendByName = function (allFriends, friendName) {
//       for (const friend of allFriends) {
//         //   console.log(friend);
//         //   console.log(friend.name);

//           if(friend.name === friendName) {
//               return 'нашли!'
//           }
//       }

//       return 'не нашли!';
//   }

//   console.log(findFriendByName(friends, 'Poly'));
//   console.log(findFriendByName(friends, 'Chelsy')); 
  
  /*
   * Получаем имена всех друзей
   */
  
// const getAllNames = function (allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         console.log(friend.name);
//         names.push(friend.name )
//     }

//     return names;
// }

// console.log(getAllNames(friends))

  /*
   * Получаем имена только друзей которые онлайн
   */

  
// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = [];


//     for (const friend of allFriends) {
//         // console.log(friend);
//         // console.log(friend.online);

//         if (friend.online) {
//             onlineFriends.push(friend);
//         }
//     }

//     return onlineFriends;
// }

// console.log(getOnlineFriends(friends));


  /*
   * Получаем имена только друзей которые офлайн
   */

//   const getOfflineFriends = function (allFriends) {
//     const offlineFriends = [];


//     for (const friend of allFriends) {
//         // console.log(friend);
//         // console.log(friend.online);

//         if (!friend.online) {
//             offlineFriends.push(friend);
//         }
//     }

//     return offlineFriends;
// }

// console.log(getOfflineFriends(friends));

  /*
   * Получаем имена друзей которые онлайн и офлайн
   */

  // const getFriendsByOnlineStatus = function (allFriends) {
  //     const friendsByStatus = {
  //       online: [],
  //       offline: [],
  //     }

  //     for (const friend of friends) {
  //         if (friend.online) {
  //             friendsByStatus.online.push(friend);
  //             continue;
  //         } 
            
  //       friendsByStatus.offline.push(friend);

           
  //     }

  //     return friendsByStatus;
  // }

  // console.log(getFriendsByOnlineStatus(friends));

  /*
   * Находим количество свойств в объекте
   */

  // const x = {
  //   a: 1,
  //   b: 2,
  //   c: 50,
  //   d: 100,
  // }

  // console.log(Object.keys(x).length);