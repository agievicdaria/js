/*
 * Array.prototype.flat(depth)
 * - Разглаживает массив до указанной глубины
 * - По умолчанию глубина 1
 */

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(3));

/*
 * Array.prototype.flatMap(callback)
 * - Комбинация map + flat
 */

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// с помощью reduce
// const tags = tweets.flatMap(t => t.tags);
// console.log(tags);

// с помощью flatmap
// #1a
// const tags = tweets.map(t => t.tags);

// #1b-1
// const tags = tweets.flatMap(t => t.tags)

// console.log(tags);

// const stats = tags.reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});

// console.log(stats);

// #1b-2
const stats = tweets.flatMap(t => t.tags).reduce((acc, tag) => {
    return {
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1,
    };
}, {});


console.log(stats);