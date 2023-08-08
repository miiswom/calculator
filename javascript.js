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
let result = '';


function operate(numA, op, numB) {
    for(let i = 0; i < 4; i++) {
        numA = a.textContent;
        op = operator.textContent;
        numB = b.textContent;
        // const b = document.getElementById('num-b');
        const operation = document.getElementById('operation');

        // a.textContent = numA;
        // operator.textContent = op;
        // b.textContent = numB + " = ";

        if (op === operators[0]) {
            result = add(numA, numB);
            } else if (op === operators[1]) {
                result = subtract(numA, numB);
            } else if (op === operators[2]) {
                result = multiply(numA, numB);
            } else if (op === operators[3]) {
                result = divide(numA, numB);
            } operation.textContent = result;
            return result;
    } 
}    

//EQUAL function
const equal = document.getElementById('equal');

equal.addEventListener('click', operate)

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

const a = document.getElementById('num-a');
const b = document.getElementById('num-b');

for(let i = 0; i < 9; i++) {
    digitClick[i].addEventListener('click', () => {
        if (!a.textContent) {
            a.textContent = digitClick[i].textContent;
        } else {
            b.textContent = digitClick[i].textContent;
        }
    } )
}
    
    // print out the operator when button is clicked
    
const operatorClick = document.getElementsByClassName('operators');
const operator = document.getElementById('operator');
  
for(let i = 0; i < 4; i++) {
    operatorClick[i].addEventListener('click', () => {
        operator.textContent = operatorClick[i].textContent;
        } )
}

// CLEAR function

const clear = document.getElementById('clear-button');

clear.addEventListener('click', () => {
    a.textContent = '';
    b.textContent = '';
    operator.textContent = '';
    operation.textContent = '';
})
