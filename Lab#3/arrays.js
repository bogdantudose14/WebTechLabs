// ********************** FILTER **********************

let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20]

// classic function syntax inside callbackFn parameter
let positive_array = numbers.filter(function (value) {
  return value >= 0
})

console.log(positive_array)

//Output = [0, 1, 5, 12, 19, 20]

let arrowExampleNumbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20]

// Arrow function alternative inside callbackFn parameter

let arrowExamplePositiveArray = arrowExampleNumbers.filter(value => value >= 0)

console.log(arrowExamplePositiveArray)

//Output = [0, 1, 5, 12, 19, 20]
