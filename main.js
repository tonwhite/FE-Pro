/*
Створити об'єкт з такою структурою:

const obj = { a: 10, b: 12, c: { f: 13, g: { m: 20} } } 
Написати ф-ю convert(obj), він одержує аргументом obj. Функція повинна повернути новий об'єкт:

const newObj = { a: 10, b: 12, f: 13, m: 20 }
 */

const obj = { a: 10, b: 12, c: { f: 13, g: { m: 20 } } };

function convert(obj) {
  let newObj = {};

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      let subObj = convert(obj[key]);
      Object.assign(newObj, subObj);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

console.log(convert(obj));