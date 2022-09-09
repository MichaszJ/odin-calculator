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