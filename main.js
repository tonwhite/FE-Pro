/*
 Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

Наприклад:

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
 */

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(characters.length, `довжина root key`);

function getRanNum(min, max) {
    
    const ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
}

function generateKey(length, span) {
    
    let key = ``;
    const spanLength = span.length;
    for (let i = 0; i < length; i++) {
        index = getRanNum(0, spanLength-1);
        key += span[index];
    }
    return key;
}

const n = getRanNum(16, 36);
console.log(n,`n`);

const key = generateKey(n, characters);
console.log(key + ` - отриманий ключ довжиною: ` + key.length);


