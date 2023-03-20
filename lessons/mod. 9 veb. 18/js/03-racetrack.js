const horses = [
    'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Seabiscuit',
  ];
  
  let raceCounter = 0;
  const refs = {
    startBtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-results-table > tbody'),
  };

  refs.startBtn.addEventListener('click', onStart)

  function onStart() {
    raceCounter += 1;
    const promises = horses.map(run);

    updateWinnerField('')
    updateProgressField('заезд начался') ;
    determineWinner(promises)
    waitForAll(promises)
  }

  function determineWinner(horsesP) {
    Promise.race(horsesP).then(({horse, time}) => {
      updateWinnerField(`победил ${horse}, финишировав за ${time} времени`); 
      updateResultsTable({horse, time, raceCounter});
    });
  }

  function waitForAll(horsesP) {
    Promise.all(horsesP).then(() => {
      updateProgressField('заезд окончен'); 
    })
  }

  function updateWinnerField (message) {
    refs.winnerField.textContent = message;
  }

  function updateProgressField (message) {
    refs.progressField.textContent = message;
  }

  function updateResultsTable ({horse, time}) {
    const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
    refs.tableBody.insertAdjacentHTML('beforeend', tr)
  }
  /*
   * Promise.race([]) для ожидания первого выполнившегося промиса
   */
  


  /*
   * Promise.all([]) для ожидания всех промисов
   */
  

  //
  function run(horse) {
    return new Promise(resolve => {
      const time = getRandomTime(2000, 3500)

      setTimeout(() => {
        resolve({horse, time});
      }, time)
    })
  }

  // run('Mango').then(x => console.log(x));
  
  function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }