// 1. Створити кнопку, що виводить на клік alert з будь-яким текстом

const buttonAlert = document.getElementById("buttonAlert");

buttonAlert.onclick = function () {
    alert("Alert text!");
}

// 2. Написати функцію, що приймає текст та додає HTML 
// елемент span з вказаним текстом на сторінку 

const addSpanFunc = function (text) {
    const addSpan = document.createElement("span");
    document.body.appendChild(addSpan).textContent = text;
};

addSpanFunc("Hello, I'm a new span!");