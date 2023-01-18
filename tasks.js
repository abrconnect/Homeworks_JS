// 1. Дано змінні

// const a = 10;
// const b = 15;

// застосувати тернарний оператор для виведення більшої з них

const a = 10;
const b = 15;
a > b ? alert(a) : alert(b);

// 2. Дано 
// const year = +prompt("Введіть ваш рік народження");
// вивести на екран кількість років користувача

const year = +prompt("Введіть ваш рік народження");
const currentYear = new Date().getFullYear();
alert(`Вам ${currentYear - userYear} років`)

// 3. Дано змінні

// const name1 = "Igor";
// const name2 = "Oleg";
// const name3 = "Olena";
// const name4 = "Nastya";

// написати детектор статті людини з цим ім’ям використовуючи switch-case

const name1 = "Igor";
const name2 = "Oleg";
const name3 = "Olena";
const name4 = "Nastya";

const userName = prompt("Введіть ім'я: Igor, Oleg, Olena, Nastya");

switch (userName) {
    case "Igor":
    case "Oleg":
        console.log("Male")
        break;

    case "Olena":
    case "Nastya":
        console.log("Female")
        break;

    default:
        console.log("Error")
}
