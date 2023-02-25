// 1. Написати функцію що приймає дві функції як аргументи
// та викликає кожну з них, записуючи результат виклику 
// у об`єкт, який потім повертає (дивіться код знизу)

// const fn = function (f1, f2) {
// 	return {
// 			result1: (ваш код),
// 			result2: (ваш код)
//    }
// }

// fn(() => "res1", () => "res2")

// Рішення

const fn = function (f1, f2) {
    return {
        result1: f1(),
        result2: f2()
    }
}

const result = fn(() => "res1", () => "res2")
console.log(result);

// 2. Написати функцію що приймає 2 числа (а та b) 
// і повертає суму довжин цих чисел (переведідь числа 
//     у строки та дізнайтеся їх довжину)

const getLength = function (a, b) {
    return a.toString().length + b.toString().length;
}

console.log(getLength(200, 5));