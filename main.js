/*
 
 Ця дз складається з чотирьох невеликих завдань, за реалізацію кожної з них можна отримати 25 балів:

Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
 
 */

// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function averageInt(array) {
    let sum = 0;
    let count = 0;
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (isNaN(+array[i]) === false) {
            sum += array[i];
            count += 1;
        }
    }
    console.log(sum, `sum`, count, `count`);
    return sum / count;
}

const array = [1, 2, "apple", 3, 4, 5, 6, 7, 8, "noodles", 9, "banana", 10, "orange"];
console.log(averageInt(array), `averageInt`);

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
    let result;
    switch (znak) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        case "%":
            result = x % y;
            break;
        case "^":
            result = x ** y;
            break;
        default:
            console.log("Невірний оператор");
            return;
    }
    return result;
}

function getRanNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Перевірка з випадковими значеннями від -10 до 10
const m = getRanNum(-10, 10);
const n = getRanNum(-10, 10);
console.log(m, n, `числа для операції`);
console.log(doMath(m, "+", n), `результат дії функції`);

// 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function createMatrix(rows, cols, value) {
    const matrix = [];
    
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = value;
        }
    }
    return matrix;
}

const rows = parseInt(prompt('Введіть кількість рядків:'));
const cols = parseInt(prompt('Введіть кількість стовпців:'));
const value = prompt('Введіть значення для заповнення:');

const matrix = createMatrix(rows, cols, value);
console.log(matrix, `Matrix, Neo`);

// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function removeLetters(str, lett) {
    let result = "";
    const length = str.length;
    
    for (let i = 0; i < length; i++) {
        if (!lett.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

console.log(removeLetters("Hello world", ['l', 'd']));