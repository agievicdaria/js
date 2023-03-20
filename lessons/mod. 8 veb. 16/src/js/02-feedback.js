import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

const STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));

// populateTextarea();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */

function onFormSubmit(evt) {
    
}

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */

function onTextareaInput(evt) {
    const message = evt.currentTarget.value;

    localStorage.setItem('feedback-msg', message)
}

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */


// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });