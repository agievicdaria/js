/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', () => {
//     console.log('click');
// })

// targetBtn.addEventListener('click', onTargetButtonClick)

// function onTargetButtonClick () {
//     console.log('click');
// }

addListenerBtn.addEventListener('click', (event) => {
    console.log('вешаю слушателя событий на целевую кнопку');

    targetBtn.addEventListener('click',onTargetBtnClick )
})

removeListenerBtn.addEventListener('click', (event) => {
    console.log('снимаю слушателя событий с целевой кнопки');

    targetBtn.removeEventListener('click',onTargetBtnClick )
})

function onTargetBtnClick (event) {
    console.log('клик по целевой кнопке');
}