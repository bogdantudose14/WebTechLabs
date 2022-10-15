// ********************** ASSESSMENT #1 **********************

//Use the map and filter methods to process an array of numbers representing birth years to obtain all ages over 18.

const years = [2012, 1997, 1999, 1969];

const ages = years.map((year) => new Date().getFullYear() - year);

console.log(ages);
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(result);

// ***** OR *****

const lambdaResult = ages.filter((age) => {
  return age >= 18;
});

console.log(lambdaResult);

//  ********************** ASSESSMENT #2 **********************

//Implement a function which receives an array of numbers and a number as parameters and returns the sum of all array elements divisible by the second parameter

function sumOfNumbersDivisible(numbersArray, divisor) {
  return (
    numbersArray
      .filter((arrayItem) => arrayItem % divisor == 0)
      .reduce((prev, current) => prev + current),
    0
  );
}

console.log(sumOfNumbersDivisible([2, 4, 5, 10, 12, 13, 25, 26], 2));

//  ********************** ASSESSMENT #3 **********************

//Given an array of numbers, write a function to calculate their average using reduce.

function averageOfArrayUsingReduce(numbersArray) {
  let average = // compute sum using reduce and divide by array length
    numbersArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0) / numbersArray.length;

  return average;
}

console.log(averageOfArrayUsingReduce([2, 3, 4, 5, 6]));
