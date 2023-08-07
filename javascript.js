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

function operate(numA, op, numB) {
    let result = add(numA, numB)
    return result;
    // return "The operation is " + numA + " " + op + " " + numB + " .";
}

// creates digit buttons

const digits = document.getElementById('nine-digits');

// (function createDigits() {
//     for (let i = 0; i < 16; i++) {
//         let digitButtons = document.createElement('button');
//         digits.appendChild(digitButtons);
//         digitButtons.textContent = [i];
//         digitButtons.classList.add('digit-buttons')
//     };
// })()

(function createDigitsToNine() {
    for (let i = 1; i < 10; i++) {
        let digitButtons = document.createElement('button');
        digits.appendChild(digitButtons);
        digitButtons.textContent = [i];
        digitButtons.classList.add('digit-buttons')
    };
})()

const rightContainerSide = document.getElementById('operators');

(function createOperatorButtons() {
    for (let i = 0; i < 3; i++) {
        let operatorButton = document.createElement('button');
        rightContainerSide.appendChild(operatorButton);
        // digitButtons.textContent =
        operatorButton.classList.add('digit-buttons', 'operator')
    };
})()

