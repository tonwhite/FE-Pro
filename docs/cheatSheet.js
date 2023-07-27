//----------------------functions collection-----------------------------

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

// Створення функції для створення нового ключа випадкових символів рут ключа 
function generateKey(length, span) {
    let key = ``;
    const spanLength = span.length;

    for (let i = 0; i < length; i++) {
        index = getRanNum(0, spanLength - 1);
        key += span[index];
    }
    return key;
}

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

// 1. Створити ф-ю декоратор const analysePerfomace = metricsDecorator(someFunctionCallback);

function metricsDecorator(callback) {
  return function() {
    const startTime = performance.now();
    const result = callback.apply(this, arguments);
    const endTime = performance.now();
    const duration = endTime - startTime;
    console.log(`Duration: ${duration}ms`);
    return result;
  }
}

// Напиши функцію filter, яка приймає функцію зворотного виклику та масив. Повертає вона масив значень, котрим ф-я зворотного виклику поверне true.

function isEven(x) { return x % 2 == 0; }

function filter(input, isEvenCb) {
    const array = [];
    const length = input.length;
    
    for (let i = 0; i < length; i++) {
        if (isEvenCb(input[i])) {
            array.push(input[i]);
        };
    }

    return array;
}

// Реалізувати функцію copy(list) копіювання масиву.
// Передбачити можливість передачі другим аргументом функції. При копіюванні масиву - функція застосовується до кожного елемента масиву, що копіюється.
// newL = copy(list, (value) => value * 10 )

function copy(list, callBack) {
    const length = list.length;
    const array = [];

    for (let i = 0; i < length; i++) {
        const item = callBack ? callBack(list[i]) : list[i];
        array.push(item);
    }

    return array;
}

// Вивести в консоль послідовність чисел у зворотному порядку, використовуючи рекурсивний виклик функції. В консолі повинен побачити: 
// row(5) // 5 4 3 2 1 */

function row(n) {
  if (n < 1) return n;
  console.log(n);
  return row(n - 1);
}

// Написати рекурсивну функцію sumToArray(n), яка обчислює суму вказаного масиву чисел, наприклад:
// sumToArray([1, 2]) ==> 3
// sumToArray([1, 2, 3]) ==> 6 */

function sumToArray(array) {
    let sum = 0;
    const length = array.length;
    if (length == 0) {
        return 0;
    }
    sum = +array.splice(0, 1) + sumToArray(array);
    return sum;
}

// Написати функцію factorial(n) - яка за допомогою рекурсії рахуватиме значення факторіалу числа n!
// Наприклад:
// factorial(5) = 1 * 2 * 3 * 4 * 5 = 120 */

function factorial(n) {
  if (n === 0) return 1;
  if (n < 1) return;
  return n * factorial(n - 1);
}

