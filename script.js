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

function operate(operator, num1, num2) {
    if (operator === '+') {
        if (num1 === 420 && num2 === 69 || num1 === 69 && num2 === 420) {
            return ('Funny number');
        }
        return add(num1, num2);
    };
    if (operator === '-') {
        return subtract(num1, num2);
    };
    if (operator === '*') {
        return multiply(num1, num2);
    };
    if (operator === '/') {
        if (num1 === 0 || num2 === 0) {
            return ('No Can Do!');
        }
        return divide(num1, num2);
    };
};

console.log(operate(multi, 14, 52));


//Grabbing numbers
let num1;
let num2;
let storedNumber = '';
// let calComplete = false;
// let percentActive = false;
// let plusMinus = false;
// const maxLength = 10;

let buttons = document.querySelectorAll('.btn');
console.log(buttons);
// User interface

// Display output
let displayOutput = document.querySelector('.displayText');
// displayOutput.textContent = "Testing";
function numberDisplay() {
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const key = e.target.textContent;
            
            if ( !((key === addy) || (key === subtracty) || (key === multi) || (key === dividy)) ) {
                displayOutput.textContent += key;

                console.log(key);
            }
        })
    })
};

function operateDisplay() {
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const key = e.target.textContent;
            if ( (key === addy) || (key === subtracty) || (key === multi) || (key === dividy) ) {
                console.log('Operaton key: ' + key);
            }
        })
    })
}

numberDisplay();
operateDisplay();





