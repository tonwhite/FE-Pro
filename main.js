/*
 
 Умова задачі
 
 
 
 */

function displayProperties(obj) {
  for (const key in obj) {
    if (key !== 'renderObject' && obj.hasOwnProperty(key)) {
      document.write(`${key}: ${obj[key]}<br>`);
    }
  }
}

window.renderObject = function () {
  displayProperties(this);
};

const obj = {
  a: 1,
  b: 2,
  c: 3,
  renderObject: window.renderObject,
};

obj.renderObject();

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

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});

console.log(data.x); // 50
console.log(data.y); // 20
console.log(data.z); // 30
console.log(data.p); // 600
console.log(data.str); // 'hello'
























