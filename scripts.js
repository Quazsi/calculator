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
            break;
        
        case "-":
            return subtract(num1, num2);
            break;
        
        case "*":
            return multiply(num1, num2);
            break;
        
        case "/":
            return divide(num1, num2);
            break;
        
        default:
            break;
    }
}