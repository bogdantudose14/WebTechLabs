// ********************** ASSESSMENT #1 **********************

//Implement the 'times' method on the Number type, such as 3.times(() => {}) executes the function 3 times.

// If we create a number => the Number constructor function gets called;
// If we add new methods to this prototype, they will be available to every instance of the Number class

Number.prototype.times = function (functionToBeExecuted) {
  // it receives 'this' as the object that we called this 'times' method on
  //return this.valueOf(); => accessing the number itself => otherwise [Number:3] is returned

  for (let i = 0; i < this.valueOf(); i++) {
    functionToBeExecuted();
  }
};

var functionToBeExecuted = function () {
  console.log("Fn execution");
};

console.log((3).times(functionToBeExecuted));

// ********************** ASSESSMENT #2 **********************

//Implement the increaseSalary function which receives an array representing a list of salaries and a number representing the percentage of the increase (ex 10) as parameters. The function throws exceptions if the first parameter is not an array or if the second parameter is not a number.

let increaseSalary = (salariesArray, increasePercentage) => {
  // check if param is array  => typeof salariesArray would return 'object' but Array.isArray(salariesArray) will return true/false

  const increasedSalariesArray = [];
  if (Array.isArray(salariesArray) && typeof increasePercentage === "number")
    for (let salary of salariesArray) {
      let increasedSalary = salary + (salary * increasePercentage) / 100;
      increasedSalariesArray.push(increasedSalary);
    }
  else {
    throw new Error( //TypeError(
      "The first parameter should be an array and the second parameter should be a number!"
    );
  }

  return increasedSalariesArray;
};

try {
  console.log(increaseSalary([20, 30, 40, 50], 10));

  console.log(increaseSalary([20, 30, 40, 50], "test"));
} catch (err) {
  console.log(err.name);
  console.error(err.message);
}
