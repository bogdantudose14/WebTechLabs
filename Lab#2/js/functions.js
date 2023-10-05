function basicFunction () {
  console.log('Basic function call')
}

basicFunction()

function sum (a, b) {
  return a + b
}
console.log(sum(5, 6))

// Default parameters

function defaultParams (a, b = 5) {
  return a * b
}

console.log(defaultParams(3))

// Conditional statements

function checkDivisible (n, divisor) {
  if (n % divisor) {
    return false
    //if true, it would have returned 0 but in this case the value is different than 0
  } //0 value
  else {
    return true
  }
}

console.log(checkDivisible(10, 2))
console.log(checkDivisible(10, 3))

//the split method will return an array and we subtract one out of the split string to find the occurences
let occurences = (text, character) => text.split(character).length - 1

console.log(occurences('sample text', 'e'))

// Variadic functions => unknown number of params

function sum (...theArgs) {
  let total = 0
  for (const arg of theArgs) {
    total += arg
  }
  return total
}

console.log(sum(1, 2, 3))
// expected output: 6

console.log(sum(1, 2, 3, 4))
// expected output: 10
