/*
 Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

Наприклад:

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
 */
// Створення рут ключа та перегляд кількості символів
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(characters.length, `довжина root key`);
// Створення функції для знаходження випадкового числа з проміжку
function getRanNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;;
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
// Створення випадкового числа від 16 до 36 для тестування випадкового розміру ключа
const n = getRanNum(16, 36);
console.log(n,`випадкове число n`);
// Генерація ключа випадкової довжини від 16 до 36 символів
const key = generateKey(n, characters);
console.log(key + ` - отриманий ключ довжиною: ` + key.length);


