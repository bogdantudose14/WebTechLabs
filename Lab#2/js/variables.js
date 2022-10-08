console.log("My first JS interaction");
console.log(this);

//window is a global JS object in browsers
// => try to log it inside browser console
//console.log(window);

/*
    Data types:
    ** PRIMITIVE **
    - number
    - string
    - boolean
    - null
    - undefined
    - Symbol
    - BigInt

    ** NON-PRIMITIVE (referentual) **
    - object
    - array
*/

var a = 10;
console.log(typeof a);
console.log(a);
a = "Hello there";
console.log(typeof a);
console.log(a);
a = false;
console.log(typeof a);
console.log(a);
a = null;
console.log(typeof a);
console.log(a);

const d = "I am immutable";
console.log(d);
// d = 'reinitialize'; // Throws error

// DEFINE REGIONS => collapsible blocks
//  // #region REGION_NAME

//   ...code inside

// // #endregion

// #region SCOPING

// DEFINE Block
{
  let blockScopeB = "Block scoped"; // LET and CONST have block scope
  const blockScopeC = "Another block scoped";

  console.log(blockScopeB); // accessible inside block
  console.log(blockScopeC); // accessible inside block

  var blockScopeD = "Not block scoped"; // VAR does NOT have block scope
}

//console.log(blockScopeB)  // => b is not visible outside the block (it has block scope)
//console.log(blockScopeD)  // => blockScopeD is visible outside the block (it does not have block scope)

function demonstrateFunctionScope() {
  var functionScopeA = 123;
  let functionScopeB = 124;
  const functionScopeC = 125;
}

// functionScopeA, functionScopeB, functionScopeC are NOT accessible outside the
// function where they have been declared in => VAR,LET AND CONST have function scope

console.log("Usage of A outside the function" + functionScopeA); //error => undefined
console.log("Usage of B outside the function" + functionScopeB); //error => undefined
console.log("Usage of C outside the function" + functionScopeC); //error => undefined

// #endregion

// #region ARRAYS

let array = [4, 5, 6];

for (let i in array) {
  console.log(i); // "0", "1", "2",
}
for (let i of array) {
  console.log(i); // "4", "5", "6" }
}
// OBS: for..of iterates through values
//      for..in iterates through keys (indexes)

// #endregion

// #region OBJECTS

const carObject = { make: "Honda", model: "Accord", year: 1998 };

for (let i in carObject) {
  console.log(i); // "make","model","year"
}

for (let i of carObject) {
  // for..of usable in arrays (iterable objects)
  console.log(i); // ERROR
}

for (let i in carObject) {
  console.log(carObject[i]); // "Honda","Accord","1998"
}

// OBS: for..in iterates through keys
//      for..of in Objects => error (object are not iterable)
// - to access values use for..in => (for let key in object) + object[key]

carObject.make = "Toyota";
console.log(carObject);

carObject.owner = "Owner 1"; //add property => simply define another key-value pair
console.log(carObject);

delete carObject.make;
console.log(carObject); // delete property

// OBS: carObject is const !!
// in objects, const allows us to modify the content of the object
// BUT it does NOT allow us to reassign it

//carObject = { anotherMake: "Dacia", anotherYear: 2002 }; // ASSIGNMENT ERROR

// #endregion
