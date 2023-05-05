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