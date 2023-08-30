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
let operator = '/'; 
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

let buttonContainer = document.querySelector('.buttonContainer');

buttonContainer.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    let var1 = e.target.textContent;
    display.textContent = var1;


});













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
