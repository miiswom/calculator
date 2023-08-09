// basic math operations
function add(a, b) {
    return parseInt(a) + parseInt(b);
};

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
};

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
};

function divide(a, b) {
    return parseInt(a) / parseInt(b);
};

// variables for each part of calculator operations
let firstNum = 0;
let operators = ['+', '-', '*', '/'];
let numbers = [1,  2, 3, 4, 5, 6 , 7, 8, 9]
let secondNum = 0;
let result = 0;


function operate(numA, op, numB) {
    for(let i = 0; i < 4; i++) {
        numA = a.textContent;
        op = operator.textContent;
        numB = b.textContent;

        if (op === operators[0]) {
            result = add(numA, numB);
            } else if (op === operators[1]) {
                result = subtract(numA, numB);
            } else if (op === operators[2]) {
                result = multiply(numA, numB);
            } else if (op === operators[3]) {
                result = divide(numA, numB);
            } operation.textContent = Math.round(result * 100) / 100;
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

// print out the DIGIT when button is clicked

const digitClick = document.getElementsByClassName('numbers')

const a = document.getElementById('num-a');
const b = document.getElementById('num-b');
const operation = document.getElementById('operation');


for(let i = 0; i < 9; i++) {
    digitClick[i].addEventListener('click', () => {
        if (!operator.textContent) {
            a.textContent += digitClick[i].textContent;
        } else if(operator.textContent && !operation.textContent){
            b.textContent += digitClick[i].textContent;
        } else if (operator.textContent && operation.textContent) 
            { a.textContent = digitClick[i].textContent;
                operator.textContent = '';
                b.textContent = '';
                operation.textContent = '';


        }            
        })
    }

// ADD EVENT TO ZERO BUTTON 

const zeroButton = document.getElementById('zero-button');

zeroButton.addEventListener('click', () => {
    if (!operator.textContent && a.textContent) {
        a.textContent = a.textContent + '0';
    } else if(operator.textContent && b.textContent && !operation.textContent) {
        b.textContent = b.textContent + '0';
    } else if (b.textContent && operation.textContent) {
        a.textContent = '';
        b.textContent = '';
        operator.textContent = '';
        operation.textContent = '';   
    }
}
);

// print out the OPERATOR when button is clicked
    
const operatorClick = document.getElementsByClassName('operators');
const operator = document.getElementById('operator');
  
for(let i = 0; i < 4; i++) {
    operatorClick[i].addEventListener('click', () => {
        if(!operator.textContent) {
            operator.textContent = operatorClick[i].textContent;
        } else {
            a.textContent = operation.textContent;
            operation.textContent = '';
            b.textContent = '';
            operator.textContent = operatorClick[i].textContent;        
        }
    }
)}

// CLEAR function

const clear = document.getElementById('clear');

clear.addEventListener('click', clearAll)

function clearAll() { 
        a.textContent = '';
        b.textContent = '';
        operator.textContent = '';
        operation.textContent = '';
    }

// REMOVE FUNCTION 

const remove = document.getElementById('remove');

remove.addEventListener('click', () => {
    if (!operator.textContent) {
    a.textContent = a.textContent.substring(0, a.textContent.length -1);
    return a.textContent
    } else if (operator.textContent) {
    b.textContent = b.textContent.substring(0, b.textContent.length -1);
    return b.textContent
    }
})
