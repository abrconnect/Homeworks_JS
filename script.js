// 1. Написати функцію що приймає 2 масиви чисел та повертає
// той масив, сума чисел якого більша

function getArrayWithLargerSum(arr1, arr2) {
    let sum1 = arr1.reduce((acc, el) => acc + el, 0);
    let sum2 = arr2.reduce((acc, el) => acc + el, 0);
    return sum1 > sum2 ? arr1 : arr2;
}
console.log(getArrayWithLargerSum([1, 2], [30, 40])); // для прикладу


// 2. Написати свою функцію-конструктор людини (person) з 
// аргументами name, age, city, skills (масив технологій з якими ви вмієте 
//     працювати, наприклад [”html”, “css”, “js]).
//     Додати функцію до вашого об`єкту, що додає skill у масив ваших вмінь

function Person(name, age, city, skills) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.skills = skills;
    this.addSkill = function (skill) {
        this.skills.push(skill);
    }
}


const person = new Person("Andrii", 26, "Kyiv", ["html", "css", "js"]);
person.addSkill("git")
console.log(person);

