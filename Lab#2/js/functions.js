function basicFunction() {
    console.log('Basic function call');
}

basicFunction();

function sum(a, b) {
    return a + b;
}
console.log(sum(5, 6));


// default parameters

function defaultParams(a, b = 5) {
    return a * b;
}

console.log(defaultParams(3));
