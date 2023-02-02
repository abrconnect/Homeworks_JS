//1
// Дано object виду
// const obj = {
//     city: "Lviv",
//     visitors: 150000
// };
// Повернути на базі object`ту строку вигляду “City Lviv has 150000 visitors novadays” 
// використовуючи поля object`ту

// Рішення:

const obj = {
    city: "Lviv",
    visitors: 150000
};

const output = `City ${obj.city} has ${obj.visitors} nowadays`;
console.log(output)

//2
// Дано object виду

// const data = {
//     n1: 10,
//     n2: 90,
//     n3: 100
// }

// Порахувати сумму значень об’єкту

// Рішення

const data = {
    n1: 10,
    n2: 90,
    n3: 100
};

let sum = 0;
for (let key in data) {
    sum += data[key]; // теж саме, що sum = sum + data[key]
}
console.log(sum);
