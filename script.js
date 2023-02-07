// 1. Дано масив виду
// порахувати сумму елементів масиву, що є числами (reduce)

const arr = [1, 2, 4, "I am not a number", "Hello", 100, 45];

const sum = arr.reduce((acc, el) => {
    if (!isNaN(el)) {
        return acc + el;
    }
    return acc;
}, 0);

console.log(sum);

// 2. Дано масив виду
// з`ясувати, чи всі елементи масиву мають назву міста, 
// написані з великої літери

const arr2 = [{ city: "lviv" }, { city: "Kyiv" }, { city: "dnipro" }];
const res = arr2.every((el) => el.city[0].toUpperCase() === el.city[0]);
console.log(res);

// 3. Дано масив виду
// заповнити масив рандомними числами (reduce)

const arr3 = [];
const newArray = Array(5).fill().reduce((acc) => {
    acc.push(Math.floor(Math.random() * 10));
    return acc;
}, arr3);
console.log(arr3)