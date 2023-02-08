// 1. Дано масив виду
// створити масив на базі існуючого виду 
//очікуваний результат: [["1", "2", "3"], ["4", "5", "6"]];

const arr = [[1, 2, 3], [4, 5, 6]];

const res = arr.map((arrElement) => {
    return arrElement.map((element) => String(element));
})

console.log(res)

//2.Дано масив виду
// поверунути новий масив на базі існуючого виду
// очікуваний результат: [["name", "Igor"], ["age", 20], ["name", "Oleg], ["age", 40]]


const arr1 = [{ name: "Igor", age: 20 }, { name: "Oleg", age: 40 }];

const res1 = [];
for (const objects of arr1) {
    for (const key in objects) {
        res1.push([key, objects[key]]);
    }
}

console.log(res1);

//3. Відсортувати масив виду за зростанням та окремо за спаданням
// використовуючи [...arr2]

const arr2 = [1, 10, 3, 5, 9];
const sortedByAscending = [...arr2].sort((e1, e2) => e1 - e2);
const sortedByDescending = [...arr2].sort((e1, e2) => e2 - e1);

console.log(sortedByAscending);
console.log(sortedByDescending);