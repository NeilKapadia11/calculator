// The Real Code of the Calculator

// global variables for the numbers and operator
let num1;
let num2;
let operator;
const container = document.querySelector("container");

// basic math functions
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

// calls the correct math function
function operate(num1, num2, operator) {
    if(operator === "+") {
        return add(num1, num2);
    }
    else if(operator === "-") {
        return subtract(num1, num2);
    }
    else if(operator === "*") {
        return multiply(num1, num2);
    }
    else if(operator === "/") {
        return divide(num1, num2);
    }
}   

// diplay button text
function displayButtonText() {
    const buttonText = this.textContent;
    const isEquals = buttonText === "=";
    const isClear = buttonText === "clear";
    const isOperator = buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/";
    const displayText = document.querySelector(".display");
    if(isOperator) {
        operator = buttonText;
        num1 = parseFloat(displayText.textContent);
        displayText.textContent += " " + buttonText + " ";
        console.log(operator)
        console.log(num1);      
    }
    else if(isEquals) {
        num2 = parseFloat(displayText.textContent.substring(displayText.textContent.lastIndexOf(operator) + 1));
        console.log(num2);
        displayText.textContent = operate(num1, num2, operator);
    }
    else if(isClear) {
        displayText.textContent = "";
    }
    else displayText.textContent += buttonText;   
}

// populate display
function populateDisplay() {
    const digits = document.querySelectorAll(".digit, .operator, .clear button");
    digits.forEach(button => {
        button.addEventListener("click", displayButtonText);
    });
}

populateDisplay();
