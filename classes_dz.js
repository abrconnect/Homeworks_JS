/* 1. Створіть 2 класи з наслідуванням один від одного,
кількість аргументів та назви класів - на ваш розсуд
2. У створеному БАТЬКІВСЬКОМУ класі додайте метод виведення інформації
3. Перепишіть батькіський метод виведення інформації у ДОЧІРНЬОМУ класі
4.  БОНУС напишіть функцію, що приймає класс та масив різних об`єктів та повертає новий масив з об`єктами, що є екземплярами переданого класу */

// Рішення 1-3 завдань

class Phone {

    constructor(price, color) {
        this.price = price;
        this.color = color;
        return this;
    }

    showInfo() {
        console.log(`This is a phone with price: $${this.price} and color: ${this.color}.`);
    };
}

class Iphone extends Phone {

    constructor(price, color, iOS) {
        super(price, color);
        this.iOS = iOS;
        return this;
    }

    showInfo() {
        console.log(`This is an iPhone with price: $${this.price}, color: ${this.color} and iOS version: ${this.iOS}.`);
    }
}

const myIphone = new Iphone(1500, "midnight", "iOS 16");

myIphone.showInfo();


