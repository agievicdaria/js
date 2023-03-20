/*
 * Прототип объекта
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */

// #1.
const objC = {
  z: 5,
};
console.log('objC: ', objC);

const objB = Object.create(objC);
objB.y = 2;
console.log('objB:', objB);

const objA = Object.create(objB);
objA.x = 1;
console.log('objA: ', objA);


// #2.
const dummyObj = Object.create({ message: 'Это свойство объекта протортипа' });
dummyObj.message = 'Это собственное свойство объекта';
console.log('dummyObj', dummyObj);
 

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */

// const objA = Object.create({ z: 5 });
// objA.y = 100;
// console.log('objA', objA);

// console.log(objA.x);