function basicFunction() {
  console.log("Basic function call");
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

// Conditional statements

function checkDivisible(n, divisor) {
  if (n % divisor) {
    return false;
    //if true, it would have returned 0 but in this case the value is different than 0
  } //0 value
  else {
    return true;
  }
}

console.log(checkDivisible(10, 2));
console.log(checkDivisible(10, 3));
