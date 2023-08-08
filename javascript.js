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
let operators = ['+', '-', '*', '/'];
let numbers = [1,  2, 3, 4, 5, 6 , 7, 8, 9]
let secondNum = 0;
let result = '0'

function operate(numA, op, numB) {
    op = operatorClick.textContent;
    numA = firstDigitClick.textContent;
    numB = secondDigitClick.textContent;
        if (op === operators[0]) {
        result = add(numA, numB);
    } else if (op === operators[1]) {
        result = subtract(numA, numB);
    } else if (op === operators[2]) {
        result = multiply(numA, numB);
    } else if (op === createOperatorButtons[3]) {
        result = divide(numA, numB);
    } console.log(result);
}

// create operator buttons

const rightContainerSide = document.getElementById('operators');

(function createOperatorButtons() {
    for (let i = 0; i < 4; i++) {
        let operatorButton = document.createElement('button');
        rightContainerSide.appendChild(operatorButton);
        operatorButton.textContent = operators[i];
        operatorButton.classList.add('digit-buttons', 'operators')
    };
})() 

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

// print out the digit when button is clicked

const digitClick = document.getElementsByClassName('numbers')

for(let i = 0; i < 9; i++) {
digitClick[i].addEventListener('click', () => {
        console.log(digitClick[i].textContent)
    } )
}

// print out the digit when button is clicked

const operatorClick = document.getElementsByClassName('operators');

for(let i = 0; i < 4; i++) {
operatorClick[i].addEventListener('click', () => {
        console.log(operatorClick[i].textContent)
    } )
}



// let operatorButton = function () {
//     for (let i = 0; i < 4; i++) {
//         document.createElement('button');
//         rightContainerSide.appendChild(operatorButton);
//         operatorButton.textContent = operator[i];
//         operatorButton.classList.add('digit-buttons', 'operator')
//     };
// }