/* 
    - Об'єкти window і document
    - Ієрархія DOM-елементів
    - Пошук DOM-елементів із querySelector
    - Властивість textContent
    - Створення елементів
    Створити список технологій що вивчаються на курсі 
    Fullstack за допомогою js (map, reduce)
*/

const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// var 1
const ulRef = document.createElement('ul');

const liListRef = technologies.map(name => {
    const liRef = document.createElement('li');
    liRef.textContent = name;
    return liRef;
})

ulRef.append(...liListRef);
console.log(ulRef);
document.body.append(ulRef);


// // var 2

// const ulRef = document.createElement('ul');

// technologies.reduce((acc, name) => {
//     const liRef = document.createElement('li');
//     liRef.textContent = name;

//     acc.appendChild(liRef);
//     return acc;
// }, ulRef);

// console.log(ulRef);
// document.body.append(ulRef);

// // var 3

// const ulRef = document.createElement('ul');

// technologies.forEach( name => {
//     const liRef = document.createElement('li');
//     liRef.textContent = name;
    
//     ulRef.appendChild(liRef);
// }, ulRef);

// console.log(ulRef);
// document.body.append(ulRef);