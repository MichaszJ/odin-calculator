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

function operate(numA: number, numB: number, operator: Function): number {
    return operator(numA, numB);
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
    if ('0123456789'.includes(displayValue.substring(displayValue.length - 1)) && !'+-*/'.includes(symbol)) {
        displayValue += symbol;
    } else {
        displayValue += ` ${symbol}`;
    }

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