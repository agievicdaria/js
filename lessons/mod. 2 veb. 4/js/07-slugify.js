/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const title = 'Top 10 benefits of React framework';

// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);

const slugiify = function (string) {
    // const normalizedString = title.toLowerCase();
    // const words = normalizedString.split(' ');
    // const slug = words.join('-');

    // return slug;

    return string.toLowerCase().split(' ').join('-');
}

console.log(slugiify('Top 10 benefits of React framework')); // QWErty
console.log(slugiify('Top 10 benefits of Java Script')); // MaNgO
console.log(slugiify('Top 10 benefits of Angular')); // aJaX