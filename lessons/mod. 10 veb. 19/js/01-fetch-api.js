/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */


fetch('https://pokeapi.co/api/v2/pokemon').then(response => {
    return response.json()
}).then(pokemon => {
    console.log(pokemon);
}).catch(error => console.log(error))
