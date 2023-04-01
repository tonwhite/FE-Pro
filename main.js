/*
перевернути масив, тобто. якщо був масив [1, 5, 6, 2, 4] - ми повинні отримати [4, 2, 6, 5, 1]. Не можна використовувати стандартний метод reverse(). Намагайтеся не використовувати додатковий масив.
*/

const arr = [1, 5, 6, 2, 4];
const len = arr.length;
document.write(`Був масив: ${arr}`,`</br>`);

for (let i = 0; i < Math.floor(len/2); i++) {
    let temp = arr[i];
    arr[i] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
    console.log(arr);
}

document.write(`І перегорнувся: ${arr}`);