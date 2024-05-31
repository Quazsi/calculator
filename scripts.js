function add(num1, num2) {
    return Number(num1) + Number(num2);
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


function operate(number1, operator, number2){
    switch (operator) {
        case "+":
            return add(number1,number2);
        
        case "-":
            return subtract(number1, number2);
        
        case "*":
            return multiply(number1, number2);
        
        case "/":
            return divide(number1, number2);
        
    }
}

const display = document.querySelector("#display");

document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("content");
    const display = document.getElementById("display");

    let num1;
    let num2;
    let operator;

    content.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("digit")) {
            handleDigitButtonClick(target.textContent);
        } else if (target.id === "clearButton") {
            handleClearButtonClick();
        } else if (target.classList.contains("operator")) {
            handleOperatorClick(target.textContent);
        } else if (target.id === "equalButton") {
            handleEqualsClick();
        }
    });
    
    function handleDigitButtonClick(value) {
        console.log("Digit button clicked:", value);
        display.textContent += value;
    }

    function handleClearButtonClick() {
        console.log("Clear button clicked");
        display.textContent = "";
        num1 = "";
        num2 = "";
        operator = "";
    }

    function handleOperatorClick(selectedOperator) {
        console.log("Operator button clicked: ", selectedOperator);
        num1 = display.textContent;
        operator = selectedOperator;
        display.textContent = "";
        console.log("Num1 is equal to: ", num1);
    }

    function handleEqualsClick() {
        console.log("Equals Button clicked");
        num2 = display.textContent;
        if(num1 && operator && num2) {
            console.log(num1, operator, num2);
            answer = operate(num1, operator, num2)
            console.log(answer);
            display.textContent = answer;
            
        }
    }

});