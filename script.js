// 1. Дано масив виду
// знайти середнє арифметичне елементів масиву

const arr = [1, 6, 8, 21, 56];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum / arr.length, "average");

//2. Дано строку виду
// вивести на екран кількість слів у реченні

const str = "Hello world random words here";
const words = str.split(" ");
const wordCount = words.length;
console.log(wordCount);

//3. Дано масив виду
// знайти та вивести максимальне та мінімальне число у масиві 

const arr2 = [20, 90, 7, 8, 100];

let max = arr2[0];
let min = arr2[0];

for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > max) {
        max = arr2[i];
    }
    if (arr2[i] < min) {
        min = arr2[i];
    }
}
console.log(`Max number: ${max}, Min number: ${min}`);

