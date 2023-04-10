/*
Задача - 1
Напиши функцію filter, яка приймає функцію зворотного виклику та масив. Повертає вона масив значень, котрим ф-я зворотного виклику поверне true.
*/

const input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 == 0; }
console.log(filter(input, isEven)); // [2, 4, 6]

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

/*
Задача - 2

Реалізувати функцію copy(list) копіювання масиву.

Передбачити можливість передачі другим аргументом функції. При копіюванні масиву - функція застосовується до кожного елемента масиву, що копіюється.

newL = copy(list, (value) => value * 10 )
*/





