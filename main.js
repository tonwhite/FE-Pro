// 1. Створити клас Людина.
// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.
class Human {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}
// 2. Створити клас Квартира.
// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
class Flat {
    // пустий масив мешканців
    residents = [];

    // метод для додавання мешканця
    addResident(human) {
        if (human instanceof Human) {
            this.residents.push(human);
        } else {
            console.log("Тільки людей можна додавати як мешканців.");
        }
    }
}

// 3. Створити клас Будинок.
// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

class House {
    // пустий масив квартир
    flats = [];

    constructor(maxFlats) {
        this.maxFlats = maxFlats;
    }

    // метод для додавання квартири
    addFlat(flat) {
        if (flat instanceof Flat) {
            if (this.flats.length < this.maxFlats) {
                this.flats.push(flat);
            } else {
                console.log("Перевищена максимальна кількість квартир. Не можу додати більше квартир.");
            }
        } else {
            console.log("Можна додавати лише екземпляри Flat.");
        }
    }
}

// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Квартира;
// додадити екземпляри класу Людина до екземплярів класу Квартира;
// екземпляр класу Будинок;
// додадити екземпляри класу Квартира до екземплярів класу Будинок.

// тестування класу Human
let john = new Human("John", "Male");
let alice = new Human("Alice", "Female");

console.log(john);
console.log(alice);

// тестування класу Flat
let flat1 = new Flat();
let flat2 = new Flat();

flat1.addResident(john);
flat2.addResident(alice);

console.log(flat1);
console.log(flat2);

// додаємо об'єкт, який не є екземпляром Human, до перевірки повідомлення про помилку
let notHuman = { name: "Not Human", sex: "Unknown" };
flat1.addResident(notHuman);

// тестування класу House
let house = new House(2);

house.addFlat(flat1);
house.addFlat(flat2);

console.log(house);

// додаємо ще одну квартиру, що перевищує ліміт
let flat3 = new Flat();
house.addFlat(flat3);

// додаємо об'єкт, який не є екземпляром Flat, до перевірки повідомлення про помилку
let notFlat = { residents: [] };
house.addFlat(notFlat);
