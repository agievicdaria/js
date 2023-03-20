/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
  };
  
window.addEventListener('keypress', keyOnPress);

refs.clearBtn.addEventListener('click', onClearOutput)

function keyOnPress(event) {
  // console.log(event);
  // console.log('event.key', event.key);

  refs.output .textContent += event.key;
}

function onClearOutput() {
  refs.output.textContent = '';
}