const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */

// const navEl = document.querySelector('.site-nav');
// console.log(navEl.classList);
// navEl.classList.add('super-cool');
// navEl.classList.remove('super-cool');
// navEl.classList.replace('super-cool', 'qwerty');

const currentPageUrl = '/portfolio';
const linkEl = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);

console.log(linkEl);
linkEl.classList.add('site-nav__link--current');