/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log('name', name);
    console.log('value', value);
  })
}