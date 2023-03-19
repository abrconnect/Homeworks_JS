// Написати функцію (логіку, що розбиває масив з користувачами
// на підмасиви по 3 користувачі у кожному)

let users = [
    { name: "Igor", city: "Kyiv", age: 20 },
    { name: "Alex", city: "Kyiv", age: 50 },
    { name: "Oleg", city: "Kyiv", age: 10 },
    { name: "Igor", city: "Kyiv", age: 20 },
    { name: "Alex", city: "Kyiv", age: 50 },
    { name: "Oleg", city: "Kyiv", age: 10 },
    { name: "Igor", city: "Kyiv", age: 20 },
    { name: "Alex", city: "Kyiv", age: 50 },
    { name: "Oleg", city: "Kyiv", age: 10 },
];

function splitArrayForPagination(array, subArraySize) {
    const subArray = [];
    for (let i = 0; i < array.length; i += subArraySize) {
        subArray.push(array.slice(i, i + subArraySize));
    }
    return subArray;
}

const usersSubArray = splitArrayForPagination(users, 3);
console.log(usersSubArray);




