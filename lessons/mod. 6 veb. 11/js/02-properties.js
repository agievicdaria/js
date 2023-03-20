const magicBtn = document.querySelector('.js-magic-btn');

/*
 * Свойства элемента (hero)
 * - Изображение
 * - Текст и textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

    const imageEl = document.querySelector('.hero__image');
    console.log(imageEl.src);
    imageEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
    imageEl.alt = 'A new cat'


const heroTitleEl = document.querySelector('.hero__title');
console.log(heroTitleEl);
console.log(heroTitleEl.textContent);
heroTitleEl.textContent = 'я сладкий пирожочек'
/*
 * Атрибуты
 * - get(имя-атрибута)
 * - set(имя-атрибута)
 * - remove(имя-атрибута)
 * - has(имя-атрибута)
 */

console.log(imageEl.getAttribute('src'));

/*
 * Data-атрибуты
 */

const actions = document.querySelectorAll('.js-actions button');
console.log(actions[0].dataset.action);