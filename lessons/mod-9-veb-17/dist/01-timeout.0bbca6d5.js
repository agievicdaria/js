// import '../css/common.css';
/*
 * Метод window.setTimeout(callback, delay, args)
 */ // console.log('До вызова setTimeout');
// setTimeout(x => {
//     console.log(x);
//     console.log('1 - внутри callback для setTimeout');
// }, 3000, 5)
// setTimeout(y => {
//     console.log(y);
//     console.log('2 - внутри callback для setTimeout');
// }, 2000, 50)
// console.log('После вызова setTimeout');
/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */ const logger = (time)=>{
    console.log(`log через ${time}ms, потому что не отменили таймаут`);
};
const timerId = setTimeout(logger, 2000, 2000);
const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);
if (shouldCancelTimer) clearTimeout(timerId);

//# sourceMappingURL=01-timeout.0bbca6d5.js.map
