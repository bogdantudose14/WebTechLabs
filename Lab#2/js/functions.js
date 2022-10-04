function basicFunction() {
<<<<<<< HEAD
  console.log("Basic function call");
=======
    console.log('Basic function call');
>>>>>>> 942af3055f9b2a32b731d340f513079725ff170d
}

basicFunction();

function sum(a, b) {
<<<<<<< HEAD
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
=======
    return a + b;
}
console.log(sum(5, 6));


// default parameters

function defaultParams(a, b = 5) {
    return a * b;
}

console.log(defaultParams(3));
>>>>>>> 942af3055f9b2a32b731d340f513079725ff170d
