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

// console.log(add(5, 10));
// console.log(subtract(10, 5));
// console.log(multiply(5, 10));
// console.log(divide(5, 10));


// operator function
let operator; 
// console.log(operator);

function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    };
    if (operator === '-') {
        return subtract(num1, num2);
    };
    if (operator === '*') {
        return multiply(num1, num2);
    };
    if (operator === '/') {
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

let buttonContainer = document.querySelector('.buttonContainer');

buttonContainer.addEventListener('click', (e) => {
    console.log(e.target.textContent);
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
        if (display.textContent.length >= 8) {
            const value = var1
            display.textContent = value;
        }

    }
    // Plus module
    if (var1 === "+") {
        operator = "+"
        num1 = display.textContent.slice(0, -1);
        num1 = +num1;
        console.log(num1);
        display.textContent = '';
    }

    // Subtract module
    if (var1 === "-") {
        operator = "-"
        num1 = display.textContent.slice(0, -1);
        num1 = +num1;
        console.log(num1);
        display.textContent = '';
    }

    // Multiply module
    if (var1 === "*") {
        operator = "*"
        num1 = display.textContent.slice(0, -1);
        num1 = +num1;
        console.log(num1);
        display.textContent = '';
    }

    // Division module
    if (var1 === "/") {
        operator = "/"
        num1 = display.textContent.slice(0, -1);
        num1 = +num1;
        console.log(num1);
        display.textContent = '';
    }

    // Equal module
    if (var1 === "=") {
        console.log('working');
        num2 = display.textContent.slice(0, -1);
        num2 = +num2;
        display.textContent = '';
        console.log(operate(operator, num1, num2));
        display.textContent = operate(operator, num1, num2);
        calComplete = true;
      
        
    }
    
    // Clear button
    if (var1 === 'AC') {
        display.textContent = '';
        num1 = ''
        num2 = ''
        operator = ''
    }


});



function numFunc() {
    if (var1 === "0" || "1" || "2" || "3" || "4" || "5" || "6" || 
    "7" || "8" || "9" || ".") {
        display.textContent += var1;
        if (display.textContent.length >= 8) {
            const value = var1
            display.textContent = value;
        }
}
}


// Clear calculator function
function clearCal() {
    display.textContent = '';
    num1 = ''
    num2 = ''
    operator = ''
    console.log('cleared');
}




// const buttonMapping = {
//     'btn-0' : 'zero',
//     'btn-1' : 1,
//     'btn-2' : 2,
//     'btn-3' : 3,
//     'btn-4' : 4,
//     'btn-5' : 5,
//     'btn-6' : 6,
//     'btn-7' : 7,
//     'btn-8' : 8,
//     'btn-9' : 9,
//     'btn-AC' : 'AC',
//     'btn-plusMinus' : 'plusMinus',
//     'btn-mod' : 'mod',
//     'btn-divide' : 'divide',
//     'btn-multi' : 'multi',
//     'btn-subtract' : 'subtract',
//     'btn-plus' : 'plus',
//     'btn-dot' : 'dot',
//     'btn-equal' : 'equal',
// }
