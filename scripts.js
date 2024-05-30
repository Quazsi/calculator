function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let num1;
let num2;
let operator;

function operate(num1, operator, num2){
    switch (operator) {
        case "+":
            return add(num1,num2);
        
        case "-":
            return subtract(num1, num2);
        
        case "*":
            return multiply(num1, num2);
        
        case "/":
            return divide(num1, num2);
        
        default:
            break;
    }
}

const display = document.querySelector("#display");
display.textContent = "007"

document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("content");
    const display = document.getElementById("display");

    content.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("digit")) {
            handleDigitButtonClick(target.textContent);
        }
    });
    
    function handleDigitButtonClick(value) {
        console.log("Digit button clicked:", value);
        display.textContent += value;
    }
});