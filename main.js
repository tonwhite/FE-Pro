/* 
Розробити пошук по колонках максимального значення та мінімального. На занятті робили по рядах.

Створити двовимірний масив заповнений випадковими числами в будь-якому діапазоні.

1) Знайти стовпчик, де сума елементів найменша.
2) Знайти стовпчик, де сума елементів найбільша.
*/

const rows = 5;
const cols = 5;

const matrix = new Array(rows);
for (let i = 0; i < rows; i++) {
  matrix[i] = new Array(cols);
  for (let j = 0; j < cols; j++) {
    matrix[i][j] = Math.floor(Math.random() * 100);
  }
}
console.log(matrix, "Двовимірний масив");

let minSum = 0;
let minSumCol = 0;

let maxSum = 0;
let maxSumCol = 0;

for (let j = 0; j < cols; j++) {
    let currentSum = 0;
    for (let i = 0; i < rows; i++) {
        currentSum += matrix[i][j];
    }
    if (j === 0) {
        minSum = currentSum;
        maxSum = currentSum;
    }
    if (currentSum < minSum) {
        minSum = currentSum;
        minSumCol = j;
        console.log(minSum,`minSum`);
    }
    if (currentSum > maxSum) {
        maxSum = currentSum;
        maxSumCol = j;
        console.log(maxSum,`maxSum`);
    }
}

console.log(`Стовпчик з найменшою сумою елементів: ${minSumCol}, сума: ${minSum}`);
console.log(`Стовпчик з найбільшою сумою елементів: ${maxSumCol}, сума: ${maxSum}`);

console.log(matrix[0][0] + matrix[1][0] + matrix[2][0] + matrix[3][0] + matrix[4][0], 'сума 0го стовпчика');
console.log(matrix[0][1] + matrix[1][1] + matrix[2][1] + matrix[3][1] + matrix[4][1], 'сума 1го стовпчика');
console.log(matrix[0][2] + matrix[1][2] + matrix[2][2] + matrix[3][2] + matrix[4][2], 'сума 2го стовпчика');
console.log(matrix[0][3] + matrix[1][3] + matrix[2][3] + matrix[3][3] + matrix[4][3], 'сума 3го стовпчика');
console.log(matrix[0][4] + matrix[1][4] + matrix[2][4] + matrix[3][4] + matrix[4][4], 'сума 4го стовпчика');
