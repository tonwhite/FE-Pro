/* 
Розробити пошук по колонках максимального значення та мінімального. На занятті робили по рядах.

Створити двовимірний масив заповнений випадковими числами в будь-якому діапазоні.

1) Знайти стовпчик, де сума елементів найменша.
2) Знайти стовпчик, де сума елементів найбільша.
*/

const m = 5;
const n = 5;

const arr = new Array(n);

let maxItem;
let maxItemIndex;

let minItem;
let minItemIndex;

for (let i = 0; i < arr.length; i++) {
    arr[i] = [];
    arr[i].length = m;
    
    let sum = 0;

    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = Math.floor(Math.random() * 100);
        sum += arr[i][j];

        console.log(array, 'array');
        console.log(sum, 'sum');

    }

    console.log(sum, ' <---sum from index =', i);
    





}
console.log(arr);
 
