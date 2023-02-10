// 1. Написати функцію яка отримує від`ємне число аргументом 
// та повертає додатнє число на базі від`ємного -1 → 1

function convertNumber(num) {
    return Math.abs(num);
};

console.log(convertNumber(-1));

// 2. Написати функцію що отримує об`єкт та повертає 
// всі його ключі у вигляді масиву
//очікуваний результат: {name: “Igor”, age: 23} → [”name”, “age”]

function objToArrByKey(obj) {
    return Object.keys(obj);
};

let object = { name: "Igor", age: 23 };
console.log(objToArrByKey(object));