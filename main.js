// Виконати ДЗ - 24 (Завдання - 2 ) винести метод addRecord окремо від об'єкта та реалізуват за допомогою методів call та apply.

// Задача - 2
// В об'єкті data існує метод addRecord, який аргументами отримує будь-який набір об'єктів.
// Метод addRecord додає всі властивості переданих об'єктів data.

function mergeObjects(target, ...objects) {
  objects.forEach((obj) => {
    Object.assign(target, obj);
  });
}

const data = {
  addRecord: function (...objects) {
    mergeObjects(this, ...objects);
  },
  p: 600,
  str: 'hello',
  y: -50,
};

data.addRecord({ x: 10 }, { y: 20 }, { z: 30, x: 50 });

console.log(data.x); // 50
console.log(data.y); // 20
console.log(data.z); // 30
console.log(data.p); // 600
console.log(data.str); // 'hello'

function addRecord(...objects) {
  mergeObjects(this, ...objects)
};

addRecord.call(data, { x: 10 }, { y: 20 }, { z: 30, x: 50 });
console.log(data);

addRecord.apply(data, [{ x: 10 }, { y: 20 }, { z: 30, x: 50 }]);
console.log(data);