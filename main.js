/* 1) Написати функцію assignObjects(obj1, obj2), яка приймає аргументами 2 об'єкти і повертає новий, який складається з властивостей обох об'єктів (склеїти). Якщо властивість повторюється, взяти значення другого об'єкта:
Наприклад: 
assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }
assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 } */

function assignObjects1(obj1, obj2) {
  const newObj = { ...obj1, ...obj2 };
  return newObj;
}

console.log(assignObjects1({ x: 10, y: 20 }, { z: 30 }));
console.log(assignObjects1({ x: 10 }, { x: 20, y: 30 }));

/* 2) Адаптувати функцію assignObjects() під невизначену кількість об'єктів. assignObjects(obj1, obj2, ....., objn); */
function assignObjects2(...objs) {
  const newObj = objs.reduce((acc, obj) => ({ ...acc, ...obj }), {});
  return newObj;
}

console.log(
  assignObjects2({ x: 10 }, { x: 20, y: 30 }, { v: 10, w: 20 }, { z: 30 })
);

/* 3) Додати третій аргумент flag, який є boolean. Якщо flag === true, тоді за наявності властивості в обох об'єктів у результат піде значення першого об'єкта, false - з другого
Наприклад: 
assignObjects({a: 12, b: 3}, { a: 13, h: 0 }, true); => { a: 12, b: 3, h: 0 } */
function assignObjects3(obj1, obj2, flag) {
  const newObj = {};

  const mergeObject = (obj) => {
    for (const key in obj) {
      if (!newObj.hasOwnProperty(key) || (flag === false && obj.hasOwnProperty(key))) {
        newObj[key] = obj[key];
      }
    }
  };

  mergeObject(obj1);
  mergeObject(obj2);

  return newObj;
}

console.log(assignObjects3({ a: 12, b: 3 }, { a: 13, h: 0 }, true));
console.log(assignObjects3({ a: 12, b: 3 }, { a: 13, h: 0 }, false));

/* 4) зробити параметр flag не обов'язковий, якщо параметр не переданий – то за замовченням він буде false */

function assignObjects4(obj1, obj2, flag = false) {
  const newObj = {};

  const mergeObject = (obj) => {
    for (const key in obj) {
      if (!newObj.hasOwnProperty(key) || (flag === false && obj.hasOwnProperty(key))) {
        newObj[key] = obj[key];
      }
    }
  };

  mergeObject(obj1);
  mergeObject(obj2);

  return newObj;
}

console.log(assignObjects4({ a: 12, b: 3 }, { a: 13, h: 0 }, true));
console.log(assignObjects4({ a: 12, b: 3 }, { a: 13, h: 0 }));
