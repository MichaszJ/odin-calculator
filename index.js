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
function errorDisplay() {
    displayValue = 'ERR';
    updateDisplay();
    displayValue = '';
}
function operate(numA, numB, operator) {
    if (numB == 0 && operator == divideOperator) {
        return 0;
    }
    else {
        return operator(numA, numB);
    }
}
let displayValue = '';
const displayElement = document.querySelector('.display');
function updateDisplay() {
    if (displayElement != null) {
        if (displayValue == '') {
            displayElement.innerText = '0';
        }
        else {
            displayElement.innerText = displayValue;
        }
    }
}
function appendDisplay(symbol) {
    // adding spaces between operators and numbers
    if ('0123456789'.includes(symbol) || !'+-*/'.includes(displayValue.substring(displayValue.length - 1))) {
        if ('0123456789'.includes(displayValue.substring(displayValue.length - 1)) && !'+-*/'.includes(symbol)) {
            displayValue += symbol;
        }
        else {
            displayValue += ` ${symbol}`;
        }
    }
    updateDisplay();
}
function clearDisplay() {
    displayValue = '';
    updateDisplay();
}
function backspaceDisplay() {
    if ('0123456789'.includes(displayValue.substring(displayValue.length - 1))) {
        displayValue = displayValue.substring(0, displayValue.length - 1);
    }
    else {
        displayValue = displayValue.substring(0, displayValue.length - 2);
    }
    updateDisplay();
}
function getOperator(operatorSymbol) {
    if (operatorSymbol == '+') {
        return addOperator;
    }
    else if (operatorSymbol == '-') {
        return subtractOperator;
    }
    else if (operatorSymbol == '*') {
        return multiplyOperator;
    }
    else {
        return divideOperator;
    }
}
function evaluateDisplay() {
    // naive evaluation without order of operations
    let splitArray = displayValue.split(' ');
    let errorRaised = false;
    if (splitArray.length >= 3 && !'+-*/'.includes(splitArray[splitArray.length - 1])) {
        let result = 0;
        while (splitArray.length > 1) {
            let numA = Number(splitArray[0]);
            let operator = getOperator(splitArray[1]);
            let numB = Number(splitArray[2]);
            if (numB == 0 && operator == divideOperator) {
                errorRaised = true;
                break;
            }
            result = operate(numA, numB, operator);
            splitArray[2] = result.toString();
            splitArray = splitArray.slice(2);
        }
        if (errorRaised) {
            errorDisplay();
        }
        else {
            displayValue = result.toString();
            updateDisplay();
            displayValue = '';
        }
    }
}
