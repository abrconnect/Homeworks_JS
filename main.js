class Calculator {
    constructor(initialValue = 0) {
        return this.currentValue = initialValue;
    }

    add(num) {
        this.currentValue = this.currentValue + num;
        return this;
    }

    substract(num) {
        this.currentValue = this.currentValue - num;
        return this;
    }

    multiply(num) {
        this.currentValue = this.currentValue * num;
        return this;
    }

    divide(num) {
        this.currentValue = this.currentValue / num;
        return this;
    }

    result() {
        return this.currentValue = this.currentValue;
    }
}

const calculator = new Calculator();
const result = calculator
    .add(8)
    .substract(2)
    .multiply(6)
    .divide(2)
    .result();

console.log(result);


// опис завдання

// Код з уроку  [https://github.com/SpaceHolderdJs/f-25/tree/users-search-way-2/JavaScript/Patterns](https://github.com/SpaceHolderdJs/f-25/tree/users-search-way-2/JavaScript/Patterns)

// На базі коду з уроку відтворіть свою реалізацію патерну Chain-Responsibilities 
// - Створіть будь-яку сутність (клас та його екземпляр)
// - Опишіть 2-3 методи класу які підтримують Chain-Responsibilities концепцію
// - Складність методів не оцінюється (можна просто виводити щось у консоль)