// 1) Є об’єкт obj = { result: '' } Всередині нього описуємо методи copy, clear, doFunction. Організувати створення методів так, щоб можна було викликати будь-які комбінації:
const obj = {
  result: 0,
};

// obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear()
// 2) doFunction(func, x, y); отримує параметрами 2 числа і функцію, яку потрібно застосувати до x і y. Результат операції зберігати в obj.result
obj.doFunction = function (func, x, y) {
  this.result = func(x, y);
  return this;
};

// 3) clear() очищує obj.result в 0
obj.clear = function () {
  this.result = 0;
  return this;
};

// 4) copy(buffer) отримує параметром назву ключа buffer (string) і додає його до obj Далі в будь-якому порядку можна викликати комбінації функцій. Даний метод скопіює значення свойсвойства result до свойства buffer(це змінна яка в собі зберігає назву ключа)
obj.copy = function (buffer) {
  this[buffer] = this.result;
  return this;
};

// 5)Створити метод target(property)- подальші дії функцій doFunction() і clear() змінювати значення не result, а переданої property
obj.target = function (property) {
  this.currentProperty = property;
  return this;
};

obj.doFunction = function (func, x, y) {
  const targetProperty = this.currentProperty || 'result';
  this[targetProperty] = func(x, y);
  return this;
};

obj.clear = function () {
  const targetProperty = this.currentProperty || 'result';
  this[targetProperty] = 0;
  return this;
};

function sum(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

obj.doFunction(sum, 2, 4).copy('nom_name').target('summary').doFunction(sum, 2, 4);

console.log(obj.summary); // 6
obj.clear();
console.log(obj.summary); // 0
