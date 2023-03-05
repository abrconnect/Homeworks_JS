// 1. Створити класс, що наслідується від глобального класу Array та:
// - Переписати метод at на метод що повертає object з масивом та останнім значенням

// const arr = new SuperArr([1, 2, 3])
// arr.at(0) // повертає {element: 1, array: [1, 2, 3]}

//     - додати метод copy що повертає нову, незалежну версію масива

// Рішення:
class SuperArr extends Array {
    at(index) {
        return {
            element: this[index],
            array: [...this]
        };
    }

    copy() {
        return [...this];
    }
}

const arr = new SuperArr([1, 2, 3, 4, 5]);
console.log(arr.at(0));
console.log(arr.copy()); // незалежна версія масива (копія)

// 2. Створти класс з приватними змінними

//       Написати метод, що приймає назву приватної змінної классу та 
//       робить її не приватну копію 

// Рішення:

class AboutPrivateVar {
    #privateVar = "privateVar";

    makeUnprivate(privateVarName) {
        this[privateVarName] = this.#privateVar;
        return this[privateVarName];
    }
}

const myObj = new AboutPrivateVar();
myObj.makeUnprivate('unprivateVar');
console.log(myObj.unprivateVar); 
