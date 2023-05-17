/*
Практикуємось з використанням генераторів

Реалізувати ф-ю виду:

function* getPartsOfWord (string) {
  ....
}

const iterator = getPartsOfWord("hello");

Таку, щоб виклики:

iterator.next()

Отримати такі результати:

{value: 'h', done: false}
{value: 'he', done: false}
{value: 'hel!', done: false}
{value: 'hell', done: false}
{value: 'hello@', done: false}
{value: 'hello', done: true}

Символи: !, @ повинні передаватись у якості формальних параметрів у iterator.next()
*/

function* getPartsOfWord(string) {
    let word = '';
    let specialCharacter = '';
    const format = /[ !@ ]/;

    for (let i = 0; i < string.length; i++) {
        word += string[i];
        if (specialCharacter) {
            word += specialCharacter;
            specialCharacter = '';
        }
        
        specialCharacter = yield word;
        if (format.test(word)) {
            word = word.slice(0, -1);
        }
    }
    return word;
}


const iterator = getPartsOfWord("hello");

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next('!'));
console.log(iterator.next());
console.log(iterator.next('@'));
console.log(iterator.next());

