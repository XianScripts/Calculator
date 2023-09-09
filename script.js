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

function plusMinusOp(num1) {
    return num1 * -1;
}

// console.log(add(5, 10));
// console.log(subtract(10, 5));
// console.log(multiply(5, 10));
// console.log(divide(5, 10));


// operator function
let operator; 
// console.log(operator);

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

console.log(operate(operator, 5, 10));
// if operator = x y z xA => call this function 




// User interface

// Display output
let display = document.querySelector('.displayText');
console.log(display)


//Grabbing numbers
let num1;
let num2;
let calComplete = false;
let percentActive = false;
let plusMinus = false;
const maxLength = 10;

let buttonContainer = document.querySelector('.buttonContainer');

// Probably should do a forEach method next time on a nodelist of buttons ¯\_(ツ)_/¯
buttonContainer.addEventListener('click', (e) => {
    // console.log(e.target.textContent);
    let var1 = e.target.textContent;
    // display.textContent = var1;
    if (var1 === "0" || "1" || "2" || "3" || "4" || "5" || "6" || 
    "7" || "8" || "9" || ".") {
        display.textContent += var1;
        if (calComplete === true) {
            clearCal();
            calComplete = false;
            display.textContent = var1
        }
        // Max length of 10 characters
        if (display.textContent.length > 10) {
            display.textContent = display.textContent.slice(0, 12);
        }

    }
    // Plus module
    if (var1 === "+") {
        operator = "+"
        num1 = display.textContent.slice(0, -1);
        num1 = +num1;
        console.log(num1);
        display.textContent = '';
        percentActive = true;
        plusMinus = true;
    }

    // Subtract module
    if (var1 === "-") {
        operator = "-"
        num1 = display.textContent.slice(0, -1);
        num1 = +num1;
        console.log(num1);
        display.textContent = '';
        percentActive = true;
        plusMinus = true;
    }

    // Multiply module
    if (var1 === "*") {
        operator = "*"
        num1 = display.textContent.slice(0, -1);
        num1 = +num1;
        console.log(num1);
        display.textContent = '';
        percentActive = true;
        plusMinus = true;
    }

    // Division module
    if (var1 === "/") {
        operator = "/";
        num1 = display.textContent.slice(0, -1);
        num1 = +num1;
        console.log(num1);
        display.textContent = '';
        percentActive = true;
        plusMinus = true;
    }

    // Percentage module

    if (var1 === '%') {
        if(percentActive !== true) {
            num1 = display.textContent.slice(0, -1);
            num1 = +num1;
            num1 = percent(num1);
            display.textContent = num1;
            console.log(num1);
            console.log(num2);
            percentActive = false
        }
        if (percentActive === true) {
            num2 = display.textContent.slice(0, -1);
            num2 = +num2;
            num2 = percent(num2);
            display.textContent = num2;
            console.log(num1);
            console.log(num2);
            percentActive = false
        }
    }

    // Plus-Minus module

    if (var1 === '+/-') {
        if (plusMinus === false) {
            num1 = display.textContent.slice(0, -3);
            num1 = +num1;
            num1 = plusMinusOp(num1);
            console.log(num1);
            console.log(var1);
            console.log(plusMinusOp(50));
            display.textContent = num1;
        }
        if (plusMinus === true) {
            num2 = display.textContent.slice(0, -3);
            num2 = +num2;
            num2 = plusMinusOp(num2);
            console.log(num2);
            console.log(var1);
            console.log(plusMinusOp(50));
            display.textContent = num2;
        }

    }


    // Equal module
    if (var1 === "=") {
        console.log('working');
        num2 = display.textContent.slice(0, -1);
        num2 = +num2;
        display.textContent = '';
        console.log(operate(operator, num1, num2));
        display.textContent = operate(operator, num1, num2);
        // calComplete = true;
        
    }
    
    // Clear button
    if (var1 === 'AC') {
        display.textContent = '';
        num1 = ''
        num2 = ''
        operator = ''
    }


});

// Clear calculator function
function clearCal() {
    display.textContent = '';
    num1 = ''
    num2 = ''
    operator = ''
    console.log('cleared');
}
