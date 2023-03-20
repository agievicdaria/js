const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
  ];
  
  /*
   * Array.prototype.every()
   * - Поэлементо перебирает оригинальный массив
   * - Возвращает true если все элементы массива удовлетворяют условию
   */
  
// const isAllOnline = players.every(({online}) => online);
// console.log('isAllOnline: ', isAllOnline);
  
  /*
   * Array.prototype.some()
   * - Поэлементо перебирает оригинальный массив
   * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
   */

//   1.
  const isAnyOnline = players.some(({online}) => online);
  console.log(isAnyOnline);

// 2.
const anyHardcorePlayers = players.some(({timePlayed}) => timePlayed > 400);
console.log(anyHardcorePlayers);