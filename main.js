/*
1) Маємо наявний код: https://github.com/hillel-front-end/front-end-pro-online-2023-march/blob/master/lections/lection_013_object-advanced/main.js

2) Треба розв'язати проблему:
Кожен раз під час виклику
console.log(shape.perimeter, "shape.perimeter");
console.log(shape.perimeter, "shape.perimeter");
console.log(shape.perimeter, "shape.perimeter");

ми виконуємо зайві обчислення та створенням зліпків модифікації наших dependensies.

Треба: виконувати вище вказані операції тільки в тому разі якщо змінилися наші dependensies об'єкту shape. Для ідентифікації змін порівняйте останній зліпок історії змін з наявний dependensies об'єкту shape. Якщо змін немає повернути perimeter з останньої історії, у такому разі перерахунок та новий зліпок не повинні виконуватись тут:

"const total = Object.values(this.dependencies).reduce(
      (accm, value) => accm + value,
      0
    );

    // side effect
    history.records.push({
      dependencies: this.dependencies,
      perimeter: total,
    });"

зліпок - це об‘єкт у масиві records. 
*/

















