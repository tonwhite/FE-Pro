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