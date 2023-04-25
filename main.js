// Задача - 1
// Задано об'єкт з будь-якою кількістю властивостей. Однією з властивостей є функція renderObject(), яка описана у window.
// При виклику методу obj.renderObject() -> виводить у document весь вміст об'єкта, крім самого методу renderObject

window.renderObject = function () {
  let html = '';

  for (const key in obj) {
    if (key !== 'renderObject' && this.hasOwnProperty(key)) {
      html += `${key}: ${this[key]}</br>`;
    }
  }

  document.write(html);
};

const obj = {
  a: 1,
  b: 2,
  c: 3,
  renderObject: window.renderObject,
};

obj.renderObject();

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
