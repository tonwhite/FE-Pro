// Створити ф - ю конструктор SuperMath.

// Додати до екземпляра метод - check(obj) та input, параметр obj якого має властивості X, Y, znak.Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У.Якщо хоче, зробити математичну дію znak(яка описана в прототипі), інакше - запитати введення нових даних через метод - екземпляра input() який поверне новий obj.

// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.

// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.

//     p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує

function SuperMath() {
    this.check = function (obj) {
        const isValid = this.validateInput(obj);
        if (!isValid) {
            console.error('Invalid object');
            return this.input(1);
        }

        const doMath = confirm(`Do you want to perform operation ${obj.znak} on ${obj.X} and ${obj.Y}?`);
        if (doMath) {
            return this.calculate(obj.X, obj.Y, obj.znak);
        } else {
            return this.input(1);
        }
    };
}

SuperMath.prototype.calculate = function (X, Y, znak) {
    switch (znak) {
        case '+':
            return X + Y;
        case '-':
            return X - Y;
        case '*':
            return X * Y;
        case '/':
            if (Y === 0) {
                alert('Cannot divide by zero. Please try again.');
                return this.input(1);
            }
            return X / Y;
        case '%':
            return X % Y;
        default:
            console.error(`Invalid operation: ${znak}`);
            return this.input(1);
    }
};

SuperMath.prototype.input = function (retries) {
    if (retries >= 3) {
        console.error('Too many invalid inputs');
        return;
    }

    const X = parseFloat(prompt('Enter the value for X:'));
    const Y = parseFloat(prompt('Enter the value for Y:'));
    const znak = prompt('Enter the operation (+, -, *, /, %):');

    const obj = { X, Y, znak };

    if (!this.validateInput(obj)) {
        alert('Invalid input. Please try again.');
        return this.input(retries + 1);
    }
    return this.check(obj);
};

SuperMath.prototype.validateInput = function (obj) {
    if (obj === null || typeof obj !== 'object') {
        return false;
    }

    const isXNumber = Number.isFinite(obj.X);
    const isYNumber = Number.isFinite(obj.Y);
    const isZnakValid = ['+', '-', '*', '/', '%'].includes(obj.znak);

    return isXNumber && isYNumber && isZnakValid;
};
// Введення значень самостійно
const p = new SuperMath();
console.log(p.input(0));

// На вже готовому об'єкті
const obj = { X: 12, Y: 3, znak: '/' };
console.log(p.check(obj));
