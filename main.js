const input = document.getElementById("input");
const calculateButton = document.getElementById("calculate");

const calculationButtons = Array.from(document.getElementsByClassName("calculations"));


calculationButtons.forEach((el) => {
    el.onclick = function () {
        input.value = input.value + el.textContent;
    };
});

const numberButtons = Array.from(document.getElementsByClassName("number"));
numberButtons.forEach((el) => {
    el.onclick = function () {
        input.value = input.value + (+el.textContent);
    };
});

calculateButton.onclick = function () {
    try {
        let result = eval(input.value);
        if (isFinite(result)) {
            input.value = result;
        } else {
            input.value = "Error";
        }
    } catch (e) {
        input.value = "Error";
    }
}

const clearButton = document.getElementById("clear");
clearButton.onclick = function () {
    input.value = "";
}