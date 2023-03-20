/*
 * Свойство innerHTML
 * - чтение
 * - запись
 */

const titleEl =document.querySelector('.title');
// titleEl.innerHTML = '<a href=""> це посилання </a>';
/*
 * Вставка разметки с insertAdjacentHTML()
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-insertadjacenthtml
 */

titleEl.insertAdjacentHTML('beforebegin', '<a href=""> це посилання </a>')