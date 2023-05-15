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
const history = {
    records: [],
    get templateRecords() {
        const template = this.records.map(
            (record) =>
                '<li class="record">' + JSON.stringify(record, null, 50) + "</li>"
        );
        return (
            '<ul class="records card card__shadow">' + template.join(" ") + "</ul>"
        );
    },
    drawRecords() {
        document.write(this.templateRecords);
    },
};


const shape = {
    dependencies: Object.seal({
        left: 100,
        right: 100,
        top: 100,
        bottom: 100,
    }),
    
    // створюю ключ, який зберігатиме останній зліпок залежностей і використовуватиметься для порівняння
    lastSnapshot: null,
    
    get perimeter() {
        //------ Bug ---

        //  ------ Your resolve problem there -----
        // Додаб перевірку останнього зліпка з поточний станом залежностей і якщо нічого не змінилося тоді повертаю останнє значення з історії
        if (this.lastSnapshot && JSON.stringify(this.lastSnapshot) === JSON.stringify(this.dependencies)) {
            return history.records[history.records.length - 1].perimeter;
        }
        //  ------ Your resolve problem there -----

        // there are maybe heavy calculations
        const total = Object.values(this.dependencies).reduce(
            (accm, value) => accm + value,
            0
        );

        // side effect
        history.records.push({
            dependencies: this.dependencies,
            perimeter: total,
        });

        // якщо змінюється то клепаємо зліпок
        this.lastSnapshot = { ...this.dependencies };

        return total;
    },

    set perimeter(perimeter) {
        if (!Number.isInteger(perimeter) || perimeter < 400) {
            return;
        }

        const size = perimeter / 4;

        this.dependencies = Object.seal({
            left: size,
            right: size,
            top: size,
            bottom: size,
        });

        // і тут фіксуємо прібиль
        this.lastSnapshot = { ...this.dependencies };

        // side effect

        history.records.push({
            dependencies: this.dependencies,
            perimeter: perimeter,
        });
    },
};
/// unoptimized operations
console.log(shape.perimeter, "shape.perimeter");
console.log(shape.perimeter, "shape.perimeter");
console.log(shape.perimeter, "shape.perimeter");















