/* Умова задачі
Задача - 1
До нашого шаблону потрібно додати пошукові критерії.

1) Створити ф-ю яка буде повертати об`єкт з параметрами отриманими від користувача(prompt()) (обов`язково використання ES6 там де це можливо, в противному разі буде понижено бал).

2) Ці критерії передати як параметри до getAllProducts(). getAllProducts() за наявності переданих критеріїв відфільтрує лист продуктів.

Фільтрація продуктів повинна бути універсальною. Розширюючи критерії (параметри пошуку) із пункту 1, то операція фільтрації не повинна бути змінена.

Задача - 2

В продовження Задачі - 1. Реалізувати:

1) Використовуючи параметр rating - конкретного продукту потрібно відсортувати фільтровані або не фільтровані дані так щоб товари з найвищим рейтингом були зверху, меншим знизу. */

function getCriteria() {
    const name = prompt('Введіть назву');
    const price = parseFloat(prompt('Введіть ціну'));
    const rating = parseFloat(prompt('Введіть оцінку'));
    return {name, price, rating};
}

function isMatched(product, criteria) {
    for (const key in criteria) {
        if (criteria[key] && product[key] !== criteria[key]) {
            return false;
        }
    }
    return true;
}

function filterProducts(products, criteria) {
    return products.filter(product => isMatched(product, criteria));
}

function sortProductsByRating(products) {
    return products.sort((a, b) => b.rating - a.rating);
}

function getAndSortProducts(criteria = {}, products) {
    let filteredProducts = filterProducts(products, criteria);

    return sortProductsByRating(filteredProducts);
}

const criteria = getCriteria();
const sortedAndFilteredProducts = getAllProducts(criteria);

console.log(sortedAndFilteredProducts);





