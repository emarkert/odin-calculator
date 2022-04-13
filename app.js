function add(a, b) {return a + b}
function subtract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function divide(a, b) {return a / b}

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
        case '÷':
            return divide(a, b)
            break;
        default:
            return null
            break;
    }
}


//SCREEN DISPLAY
const display = document.getElementById('screen-content')
display.textContent = '0'

// CALCULATOR BUTTONS

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')

numberButtons.forEach((button) => 
    button.addEventListener('click', () => updateDisplay(button.textContent))
)

function updateDisplay(number) {
    if (display.textContent === 0) {
    display.textContent = ''
}
    display.textContent += number    
}
