// Calculation functions
let num1;
let num2;

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

console.log(add(5, 10));
console.log(subtract(10, 5));
console.log(multiply(5, 10));
console.log(divide(5, 10));


// operator function
let operator; 

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    }
    if (operator === "-") {
        return subtract(num1, num2);
    }
    if (operator === "*") {
        return multiply(num1, num2);
    }
    if (operator === "/") {
        return divide(num1, num2);
    }
}



// if operator = x y z xA => call this function 

// User Interface


const buttons = document.querySelector('.buttonContainer');

// function createButtons(x) {
//     for (let i = 0; i < x; i++) {
//         const buttonMaker = document.createElement('button');
//         buttonMaker.classList.add('buttons');
//         buttons.appendChild(buttonMaker);
//     }
// }
// createButtons(19);