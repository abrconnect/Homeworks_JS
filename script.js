// 1. Дано object виду

// {
// 	name: true,
// 	age: 12,
//   country: "Ukraine"
// }

// за допомогою циклу видалити всі пари ключ - значення, 
// значенням яких є НЕ string, використовуючи typeof

// Вирішення: 

let obj = {
    name: true,
    age: 12,
    country: "Ukraine"
}

for (key in obj) {
    if (typeof obj[key] !== "string") {
        delete obj[key]
    }
}
console.log(obj)

// 2. Дано objects виду
// {n: 1, m: 2}
// {a: 1, b: 2, c: 3}
// визначити object за найбільшою кількістю пар ключ-значення

// Вирішення:

let object1 = {
    n: 1,
    m: 2
};

let object2 = {
    a: 1,
    b: 2,
    c: 3
}

Object.keys(object1).length > Object.keys(object2) ?
    console.log(object1) : console.log(object2)

// також один із способів, який я розглядав - створити змінні 
// наприклад,
let result1 = Object.keys(object1);
let result2 = Object.keys(object2);
// та порівняти їх довжини
result1.length > result2.length ?
    console.log(object1) : console.log(object2)
    // але фактично результат однаковий