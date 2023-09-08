// Calculation functions


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

function percent(num1) {
    return num1 / 100
}

// operator selection variable
let operator;
const addy = '+';
const subtracty = '-';
const multi = '*';
const dividy = '/';

let currentInput = '';
let previousResult = null;

function calculate() {

    const num1 = previousResult !== null ? previousResult: 0;
    const num2 = parseFloat(currentInput);

    if (operator === '+') {
        if (num1 === 420 && num2 === 69 || num1 === 69 && num2 === 420) {
            return ('Funny number');
        }
        return add(num1, num2);
    }
    else if (operator === '-') {
        return subtract(num1, num2);
    }
    else if (operator === '*') {
        return multiply(num1, num2);
    }
    else if (operator === '/') {
        if (num2 === 0) {
            return ('No Can Do!');
        }
        return divide(num1, num2);
    }
    else {
        return num2; // If no operator return the current input as a number
    }
};

// console.log(operate(multi, 14, 52));


//Grabbing numbers
// let num1;
// let num2;
// let storedNumber = '';
// let calComplete = false;
// let percentActive = false;
// let plusMinus = false;
// const maxLength = 10;

// let buttons = document.querySelectorAll('.btn');
// console.log(buttons);
// User interface

// Display output
let displayOutput = document.querySelector('.displayText');

// displayOutput.textContent = "Testing";

function updateDisplay() {
    displayOutput.textContent = currentInput;
    if (displayOutput.textContent.length > 10 ) {
        displayOutput.textContent = displayOutput.textContent.slice(0, 12);
    }
}



document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const key = e.target.textContent;

        if (key === '=') {
            if (operator && currentInput !== '') {
                previousResult = calculate();
                currentInput = previousResult.toString();
                operator = null;
                updateDisplay();
            }
        }
        else if (key === 'AC') {
            currentInput = '';
            previousResult = null;
            operator = null;
            updateDisplay();
        }
        else {
            if (key.match(/[0-9.]/)) {
                currentInput += key; // Append numbers and decimal point
                updateDisplay();
            } 
            else if (key === '+') {
                operator = key;
                previousResult = parseFloat(currentInput);
                currentInput = '';
            } 
            else if (key === '-') {
                operator = key;
                previousResult = parseFloat(currentInput);
                currentInput = '';
            } 
            else if (key === '*') {
                operator = key;
                previousResult = parseFloat(currentInput);
                currentInput = '';
            } 
            else if (key === '/') {
                operator = key;
                previousResult = parseFloat(currentInput);
                currentInput = '';
            }
            else if (key === '+/-') {
                currentInput = currentInput * -1;
                updateDisplay();
            }
            else if (key === '%') {
                currentInput = currentInput / 100;
                updateDisplay();
            }
        }
    });
});




updateDisplay();







