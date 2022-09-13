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
    const splitArray = displayValue.split(' ');

    if (('0123456789'.includes(symbol) || !'+-*/'.includes(displayValue.substring(displayValue.length - 1))) && !(symbol == '.' && splitArray[splitArray.length - 1].includes('.'))) {
        if ('0123456789.'.includes(displayValue.substring(displayValue.length - 1)) && !'+-*/'.includes(symbol)) {
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
        } else {
            displayValue = result.toString();
            updateDisplay();
            displayValue = '';
        }
    }
}

document.body.addEventListener('keydown', (event) => {
    console.log(event.key);
    if ('0123456789.+-*/'.includes(event.key)) {
        appendDisplay(event.key)
    } else if (event.key == '=') {
        evaluateDisplay();
    } else if (event.key == 'Backspace') {
        backspaceDisplay();
    }
});