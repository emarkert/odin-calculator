let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldReset = false

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return add(a, b)
            break;
        case '-':
            return subtract(a, b)
            break;
        case '*':
            return multiply(a, b)
            break;
        case '/':
            if (b === 0) return null
            else return divide(a, b)
            break;
        default:
            return null
            break;
    }
}


//SCREEN DISPLAY
const currentDisplay = document.getElementById('screen-content')

//CALCULATOR BUTTONS
const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const clearButton = document.querySelector('.clear-btn')
const equalsButton = document.getElementById('equals')

numberButtons.forEach((button) => 
    button.addEventListener('click', () => updateDisplay(button.dataset.number))
)

operatorButtons.forEach((button) => 
    button.addEventListener('click', () => setOperation(button.dataset.operator))
)

clearButton.onclick = () => clearScreen()

equalsButton.onclick = () => evaluate()

function updateDisplay(number) {
    if (currentDisplay.textContent === '0' || shouldReset ) {
        currentDisplay.textContent = ''
        shouldReset = false
    }  
    currentDisplay.textContent += number
}

function clearScreen() {
  currentDisplay.textContent = '0'
  currentOperation === null
  firstOperand = ''
  secondOperand = ''
  shouldReset = false
}

function setOperation(operator) {
    if (currentOperation !== null) evaluate() 
    firstOperand = currentDisplay.textContent
    currentOperation = operator
    shouldReset = true
}

function evaluate() {
    if (currentOperation === '/' && currentDisplay.textContent === '0') { 
        alert('No dividing by zero!')
        return
    } else {
    secondOperand = currentDisplay.textContent
    currentDisplay.textContent = operate(currentOperation, firstOperand, secondOperand)
    currentOperation = null
    }
}





