// 1. Всі елементи строки не є числами

const str = "Some text for example";
const regexp = /^\D*$/;
// // const regexp = /^[^0-9]*$/; // <--- або

const result = regexp.test(str);
console.log(result, str, "all elements are not numbers");

// 2. Всі елементи строки написані з маленької літери

const str2 = "some text for example";
const regexp2 = /^[a-z\s]*$/;
const result2 = regexp2.test(str2);
console.log(result2, str2, "all elements are in lowerCase");
