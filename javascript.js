// basic math operations
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

// variables for each part of calculator operations
let firstNum = 0;
let operator = ['+', '-', '*', '/'];
let secondNum = 0;
let result = '0'

function operate(numA, op, numB) {
    op = operatorClick.textContent;
    numA = firstDigitClick.textContent;
    numB = secondDigitClick.textContent;
        if (op === operator[0]) {
        result = add(numA, numB);
    } else if (op === operator[1]) {
        result = subtract(numA, numB);
    } else if (op === operator[2]) {
        result = multiply(numA, numB);
    } else if (op === operator[3]) {
        result = divide(numA, numB);
    } console.log(result);
}

// creates digit buttons
const digits = document.getElementById('nine-digits');

(function createDigitsToNine() {
    for (let i = 1; i < 10; i++) {
        let digitButtons = document.createElement('button');
        digits.appendChild(digitButtons);
        digitButtons.textContent = [i];
        digitButtons.classList.add('digit-buttons', 'numbers')
    };
})()

const digitClick = document.getElementsByClassName('numbers')

for (let i=0; i < digitClick.length; i++) {
    digitClick[i].addEventListener('click', test);
}

function test () {
    console.log(digitClick.textContent)
}
// create operator buttons

const rightContainerSide = document.getElementById('operators');

(function createOperatorButtons() {
    for (let i = 0; i < 4; i++) {
        let operatorButton = document.createElement('button');
        rightContainerSide.appendChild(operatorButton);
        operatorButton.textContent = operator[i];
        operatorButton.classList.add('digit-buttons', 'operators')
    };
})() 


// let operatorButton = function () {
//     for (let i = 0; i < 4; i++) {
//         document.createElement('button');
//         rightContainerSide.appendChild(operatorButton);
//         operatorButton.textContent = operator[i];
//         operatorButton.classList.add('digit-buttons', 'operator')
//     };
// }

let operatorClick = document.getElementsByClassName('operators');
operatorClick[1].addEventListener('click', operate);