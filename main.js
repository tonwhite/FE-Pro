/*
Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

Наприклад:

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5 );
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

*/
function ForwardCount(array) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        array[i] = i + 1;
    }
    return array;
}

const array = new Array(7);
console.log(array,`пустий масив`);

ForwardCount(array);
console.log(array, `масив до функції`);

function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    } else {
        console.log(`Дане значення відсутнє в масиві`);
    }
    return array;
}
const n = Math.floor(Math.random() * 10);
console.log(n, `Рандомне значення`);
removeElement(array, n);
console.log(array,`масив після функції`);