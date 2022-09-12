"use strict";
// basic math operators
function addOperator(numA, numB) {
    return numA + numB;
}
function subtractOperator(numA, numB) {
    return numA - numB;
}
function multiplyOperator(numA, numB) {
    return numA * numB;
}
function divideOperator(numA, numB) {
    return numA / numB;
}
function operate(numA, numB, operator) {
    return operator(numA, numB);
}
let displayValue = '';
const displayElement = document.querySelector('.display');
function updateDisplay() {
    if (displayElement != null) {
        displayElement.innerText = displayValue;
    }
}
function appendDisplay(symbol) {
    // adding spaces between operators and numbers
    if ('0123456789'.includes(displayValue.substring(displayValue.length - 1)) && !'+-*/'.includes(symbol)) {
        displayValue += symbol;
    }
    else {
        displayValue += ` ${symbol}`;
    }
    updateDisplay();
}
