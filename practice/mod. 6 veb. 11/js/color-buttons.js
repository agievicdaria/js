/* 
    - Об'єкти window і document
    - Ієрархія DOM-елементів
    - Пошук DOM-елементів із querySelector
    - Властивість textContent
    - Створення елементів
    - Видалення методом remove
    Створити кілька кнопок на основі масива з обєктами використовуючи createElement
*/
const colors = [
    {
      label: 'red',
      color: '#FF0000',
    },
    {
      label: 'green',
      color: '#00FF00',
    },
    {
      label: 'blue',
      color: '#0000FF',
    },
    {
      label: 'yellow',
      color: '#FFFF00',
    },
  ];

  


  const buttonsRef = colors.map(({label, color}) => {
    const buttonRef = document.createElement('button');
    buttonRef.textContent = label;
    buttonRef.style.fontSize = '15px';
    buttonRef.style.padding = '2px 10px';
    buttonRef.style.margin = '0px 3px';
    buttonRef.style.cursor = 'pointer';
    buttonRef.style.backgroundColor = color;

    return buttonRef;
  })

  console.log(buttonsRef);

  document.body.append(...buttonsRef)