/*
1) Читаємо теор лінки і ставимо "вивчив(ла)" у якості виконання ДЗ.
2) Додати до роботи в класі конструктор HTMLElementInput по прикладу HTMLAnchor. Прототипне успадкувати render, rotate. Самостійно вирішити які будуть поля, методи прототипа та екземпляра HTMLElementInput. */

class HTMLElement {
    foo = 12; // this.foo = 12

    constructor(tagName, className, id) {
        this.tagName = tagName;
        this.className = className;
        this.id = id;
    }

    rotate() {
        console.log("rotating from HTMLElement", this.tagName);
    }

    render() {
        console.log("rendering from HTMLElement", this.tagName);
    }
}

class HTMLElementInput extends HTMLElement {
    type = "";
    value = "";
    placeholder = "";
    name = "";

    // Конструктор є основним місцем, де встановлюються властивості екземпляра класу
    constructor(type, value, placeholder, name, ...args) {
        super(...args); // Викликаємо конструктор батьківського класу з усіма аргументами
        this.type = type;
        this.value = value;
        this.placeholder = placeholder;
        this.name = name;
    }

    // Метод екземпляра класу для зміни значення 'value' елемента 'input'
    changeValue(newValue) {
        this.value = newValue;
    }

    // Перевизначаємо метод 'render()' з батьківського класу для конкретних потреб HTMLElementInput
    render() {
        super.render(); // Викликаємо реалізацію методу 'render()' батьківського класу
        console.log("Specific render for HTMLElementInput", this.tagName);
    }
}

