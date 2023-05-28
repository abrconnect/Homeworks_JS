// 1. Всі елементи якої є не числами

const str = "Some text for example";
const regexp = /^\D*$/;

const result = regexp.test(str);
console.log(result);

