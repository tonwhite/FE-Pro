/* Зробити декомпозиція темплейту(розбити на шматки) темплейт. Прибрати меджик намбери і код який порушує основні принципи */

// fetch data from server
const fetchAllProducts = async () => {
  return (await fetch("https://dummyjson.com/products")).json();
};

// Отримання данних про продукти
async function getAllProducts() {
  const response = await fetchAllProducts();
  const products = response.products;
  renderProducts(products);
}

// Рендер продуктів на сторінці
function renderProducts(products) {
  const productsTemplate = createProductsTemplate(products);
  document.getElementById('app').innerHTML = productsTemplate;
}

// створення темплейту для продуктів
function createProductsTemplate(products) {
  return `<article class="products">
      ${products.map(createProductTemplate).join('')}
    </article>`;
}

// Створення темплейту для одного продукту
function createProductTemplate(product) {
  const priceWithDiscount = calculatePriceWithDiscount(
    product.price,
    product.discountPercentage
  );

  return `
    <section class="product-item">
      <div class="image-wrapper">
        <img src="${product.thumbnail}" alt="" class="image" />
      </div>
      <div class="content-wrapper">
        <div class="title">
          <h4>${product.title}</h4>
        </div>
        <div class="price">
          ${product.price}, price with discount ${priceWithDiscount}
        </div>
        <div class="description">${product.description}</div>
        <div class="actions">
          <button id="cart" class="button green-solid cart">
            Add to Cart
          </button>
          <button class="button more">More Details</button>
        </div>
      </div>
    </section>
  `;
}

// Розрахунок ціни зі знижкою
function calculatePriceWithDiscount(price, discountPercentage) {
  const discount = price * (discountPercentage / 100);
  return price - discount;
}

getAllProducts();