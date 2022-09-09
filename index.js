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
