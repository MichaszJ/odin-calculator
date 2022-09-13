// basic math operators
function addOperator(numA: number, numB: number): number {
    return numA + numB;
}

function subtractOperator(numA: number, numB: number): number {
    return numA - numB;
}

function multiplyOperator(numA: number, numB: number): number {
    return numA * numB;
}

function divideOperator(numA: number, numB: number): number {
    return numA / numB;
}

function errorDisplay(): void {
    displayValue = 'ERR';
    updateDisplay();
    displayValue = '';
}

function operate(numA: number, numB: number, operator: Function): number {
    if (numB == 0 && operator == divideOperator) {
        errorDisplay();
        return 0;
    } else {
        return operator(numA, numB);
    }
}

let displayValue = '';

const displayElement = document.querySelector<HTMLParagraphElement>('.display');
function updateDisplay(): void {
    if (displayElement != null) {
        if (displayValue == '') {
            displayElement.innerText = '0';
        } else {
            displayElement.innerText = displayValue;
        }
    }
}

function appendDisplay(symbol: string): void {
    // adding spaces between operators and numbers
    if ('0123456789'.includes(symbol) || !'+-*/'.includes(displayValue.substring(displayValue.length - 1))) {
        if ('0123456789'.includes(displayValue.substring(displayValue.length - 1)) && !'+-*/'.includes(symbol)) {
            displayValue += symbol;
        } else {
            displayValue += ` ${symbol}`;
        }
    }

    updateDisplay();
}

function clearDisplay(): void {
    displayValue = '';
    updateDisplay();
}

function backspaceDisplay(): void {
    if ('0123456789'.includes(displayValue.substring(displayValue.length - 1))) {
        displayValue = displayValue.substring(0, displayValue.length - 1);
    } else {
        displayValue = displayValue.substring(0, displayValue.length - 2);
    }

    updateDisplay();
}

function getOperator(operatorSymbol: string) {
    if (operatorSymbol == '+') {
        return addOperator;
    } else if (operatorSymbol == '-') {
        return subtractOperator;
    } else if (operatorSymbol == '*') {
        return multiplyOperator;
    } else {
        return divideOperator;
    }
}

function evaluateDisplay(): void {
    // naive evaluation without order of operations
    let splitArray = displayValue.split(' ');

    if (splitArray.length >= 3) {
        let numA = Number(splitArray[0]);
        let operator = getOperator(splitArray[1]);
        let numB = Number(splitArray[2]);
        let result = operate(numA, numB, operator);

        splitArray[2] = result.toString();
        splitArray = splitArray.slice(2);

        while (splitArray.length > 1) {
            numA = Number(splitArray[0]);
            operator = getOperator(splitArray[1]);
            numB = Number(splitArray[2]);
            result = operate(numA, numB, operator);

            splitArray[2] = result.toString();
            splitArray = splitArray.slice(2);
        }

        // console.log(operate(numA, numB, operator));
        displayValue = result.toString();
        updateDisplay();
    }
}