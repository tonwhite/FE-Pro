// 1. Створити сутність "Людина".
//     Властивості:
// імʼя;
// вік.
//     Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo() {
        console.log(`Human: Name - ${this.name}, Age - ${this.age}`);
    }
}

// 2. Створити сутність "Автомобіль".
//     Властивості:
// марка, модель, рік виписку, номерний знак(або на Ваш розсуд);
// власник.
//     Методи:
// конструктор, який приймає чотитри параметри(тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника
class Car {
    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = null;
    }

    assignOwner(human) {
        if (human instanceof Human) {
            if (human.age > 18) {
                this.owner = human;
                console.log(`${human.name} is now the owner of the car.`);
            } else {
                console.log("Owner must be over 18 years old.");
            }
        } else {
            console.log("Owner must be an instance of Human.");
        }
    }

    printInfo() {
        console.log(`Car: Brand - ${this.brand}, Model - ${this.model}, Year - ${this.year}, License Plate - ${this.licensePlate}`);
        if (this.owner) {
            this.owner.printInfo();
        } else {
            console.log("This car does not have an owner yet.");
        }
    }
}


// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.

let john = new Human("John", 21);
let alice = new Human("Alice", 15);

john.printInfo();  // Human: Name - John, Age - 21
alice.printInfo();  // Human: Name - Alice, Age - 15

let car1 = new Car("Tesla", "Model 3", 2023, "TESLA-3");
let car2 = new Car("Toyota", "Corolla", 2022, "COROLLA-22");

car1.printInfo();  // Car: Brand - Tesla, Model - Model 3, Year - 2023, License Plate - TESLA-3, This car does not have an owner yet.
car2.printInfo();  // Car: Brand - Toyota, Model - Corolla, Year - 2022, License Plate - COROLLA-22, This car does not have an owner yet.

car1.assignOwner(john);  // John is now the owner of the car.
car2.assignOwner(alice);  // Owner must be over 18 years old.

car1.printInfo();  // Car: Brand - Tesla, Model - Model 3, Year - 2023, License Plate - TESLA-3, Human: Name - John, Age - 21
car2.printInfo();  // Car: Brand - Toyota, Model - Corolla, Year - 2022, License Plate - COROLLA-22, This car does not have an owner yet.

let notHuman = { name: "Not Human", age: 30 };
car2.assignOwner(notHuman);  // Owner must be an instance of Human.
