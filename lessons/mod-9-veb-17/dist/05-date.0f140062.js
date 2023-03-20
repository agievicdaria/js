/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/ const date1 = Date.now();
setTimeout(()=>{
    const date2 = Date.now();
    console.log("date 1", date1);
    console.log("date 2", date2);
    console.log(date2 - date1);
}, 3000);

//# sourceMappingURL=05-date.0f140062.js.map
