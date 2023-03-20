/* 
  - Сhatty events (scroll, resize, mousemove)
  - Throttle і debounce подій з бібліотекою Lodash
  - Підключити бібліотеку lodash через скрипт 
  - resize та scroll
  - input
*/

// throttle scroll
// window.addEventListener('scroll', () => {
//   console.log('clean scroll');
// });

// const onScroll = () => {
//   console.log('scroll with throttle');
// };
// const throttledOnScroll = _.throttle(onScroll, 400);

// window.addEventListener('scroll', throttledOnScroll);

// debounce scroll
// window.addEventListener('scroll', () => {
//   console.log('clean scroll');
// });

// const onScroll = () => {
//   console.log('scroll with debounce');
// };
// const debouncedOnScroll = _.debounce(onScroll, 400);

// window.addEventListener('scroll', debouncedOnScroll);



//throttle scroll
const onScroll = () => {
    console.log('scroll with throttle');
}
window.addEventListener('scroll', _.throttle(onScroll, 300));

//debounce scroll
const onScroll1 = () => {
    console.log('scroll with debounce');
}
window.addEventListener('scroll', _.debounce(onScroll1, 300));

// document.querySelector('input').addEventListener('input', e => {

// })