// Використовуючи ланцюжок Promise згідно з таблицею(див вкладення).

// Організувати виведення в консоль такий порядок цифр "0 1 3 6 8", "0 2 3 6 7".

//     Де 0 - це значення, яке виводиться в сallback - ф - ії яка передається в Promise.

const makePromise = (val, resolvePromise = true) => {
    return new Promise((resolve, reject) => {
        console.log(val);
        resolvePromise ? resolve(true) : reject(true);
    });
};

makePromise(0, true)
    .then(() => makePromise(1, true))
    .then(() => makePromise(3, false))
    .catch(() => makePromise(6, true))
    .then(() => makePromise(8))
    .catch(() => { });

makePromise(0, false)
    .catch(() => makePromise(2, true))
    .then(() => makePromise(3, false))
    .catch(() => makePromise(6, false))
    .catch(() => makePromise(7))
    .catch(() => { });



















