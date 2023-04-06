/*
Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

Наприклад:

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5 );
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

*/

// Створення функції для знаходження  випадкового числа з проміжку
function getRanNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Створення функції для заповнення масиву випадковими числами від 1 до 10
function ranFill10(array) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        array[i] = getRanNum(1, 10);
    }
    return array;
}
// Створення масиву випадкової довжини від 5 до 10
const array = new Array(getRanNum(5,10));
console.log(array,`пустий масив`);
// Заповнення масиву випадковими числами від 1 до 10 
ranFill10(array);
console.log(array, `заповнений масив`);
// Створення функції видалення елементу
function removeElement(array, item) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] === item) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}
// Генерація випадкового числа для видалення з масиву
const n = getRanNum(1, array.length - 1);
console.log(n, `рандомне значення`);
// Видалення випадкового елементу
removeElement(array, n);
console.log(array,`поранений масив`);