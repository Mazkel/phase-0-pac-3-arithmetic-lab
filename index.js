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

function increment(a, n=1) {
    return a + n
}

function decrement(a, n= -1) {
    return a + n 
}

function makeInt(n) {
    if (n.startsWith('0x')) {
        return 0
    } return parseInt(n)
}

function preserveDecimal(n) {
    return parseFloat(n)
}
