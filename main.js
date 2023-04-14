/* Задача - 1
Вивести в консоль послідовність чисел у зворотному порядку, використовуючи рекурсивний виклик функції. В консолі повинен побачити: 
row(5) // 5 4 3 2 1 */

function row(n) {
  if (n < 1) return n;
  console.log(n);
  return row(n - 1);
}

row(5);
// row(20);

/* Задача - 2
Написати рекурсивну функцію sumToArray(n), яка обчислює суму вказаного масиву чисел, наприклад:

sumToArray([1, 2]) ==> 3
sumToArray([1, 2, 3]) ==> 6 */

function sumToArray(array) {
    let sum = 0;
    const length = array.length;
    if (length == 0) {
        return 0;
    }
    sum = +array.splice(0, 1) + sumToArray(array);
    return sum;
}

const duperArray = [65, 82, 82, 69, 27, 28, 34, 18, 34, 35841, 3413];

console.log(sumToArray(duperArray));
console.log(sumToArray([1, 2]));
console.log(sumToArray([1, 2, 3]));
console.log(sumToArray([1, 2, -244, 4, 5, 6, 0, 8, 9, 1521]));

/* Задача - 3
Написати функцію factorial(n) - яка за допомогою рекурсії рахуватиме значення факторіалу числа n!

Наприклад:

factorial(5) = 1 * 2 * 3 * 4 * 5 = 120 */

function factorial(n) {
  if (n === 0) return 1;
  if (n < 1) return;
  return n * factorial(n - 1);
}

console.log(factorial(5));
