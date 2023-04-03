/*
Закріплюємо одномірні масиви.

В одновимірному масиві зробити таку заміну:

1 елемент змінити з 2

3 елемент змінити з 4

5 елемент поміняти з 6 і т.д.

Якщо масив непарний - останній елемент не чіпати.

Було [1, 2, 3, 4, 5, 6, 7] -> має стати [2, 1, 4, 3, 6, 5, 7]
*/
let n;
do { n = +(prompt(`Введіть розмір масиву`)) } while (Boolean(n) === false || n < 0);
const arr = new Array(n);
const len = arr.length;

for (let i = 0; i < len; i++) {
    arr[i] = i + 1;
};
console.log(arr,`Початковий масив`);

for (let i = 0; i < len; i++) {
    if (len % 2 === 1 && i === len - 1) {
        break;
    }
    if (i % 2 === 0) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
}
console.log(arr,`Фінальний масив`);