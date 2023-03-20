import products from './data/products.js'

/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

{
  /*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/
}

// const product = {
//   name: 'qwerty',
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, odio.',
//   price: 2000,
//   available: true,
//   onSale: true,
// }

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.textContent = product.name;
// nameEl.classList.add('product__name');

// const descrEl = document.createElement('p');
// descrEl.textContent = product.description;
// descrEl.classList.add('product__descr');

// const priceEl = document.createElement('p');
// priceEl.textContent = `Price: ${product.price}`;
// priceEl.classList.add('product__price');

// productEl.append(nameEl, descrEl, priceEl);
// console.log(productEl);

/*
 * Пишем функцию для создания карточки продукта
 */
const productsContainerEl = document.querySelector('.js-products');

const makeProductCard = ({name, description, price}) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');

  const descrEl = document.createElement('p');
  descrEl.textContent = description;
  descrEl.classList.add('product__descr');

  const priceEl = document.createElement('p');
  priceEl.textContent = `Price: ${price}`;
  priceEl.classList.add('product__price');

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
}

// console.log(makeProductCard(products[0]));
// console.log(makeProductCard(products[1]));

const elements = products.map(makeProductCard);

console.log(elements);
productsContainerEl.append(...elements);