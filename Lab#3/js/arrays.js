// ********************** FILTER **********************

let numbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];

// classic function syntax inside callbackFn parameter
let positive_array = numbers.filter(function (value) {
  return value >= 0;
});

console.log(positive_array);

//Output = [0, 1, 5, 12, 19, 20]

let arrowExampleNumbers = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];

// Arrow function alternative inside callbackFn parameter

let arrowExamplePositiveArray = arrowExampleNumbers.filter(
  (value) => value >= 0
);

console.log(arrowExamplePositiveArray);

//Output = [0, 1, 5, 12, 19, 20]

// ********************** MAP **********************

// Classic way - for loop

let arr = [3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * 3;
}
console.log(arr); // [9, 12, 15, 18]

// Array.map() alternative

let arrMap = [3, 4, 5, 6];

let modifiedArr = arrMap.map(function (element) {
  return element * 3;
});

console.log(modifiedArr); // [9, 12, 15, 18]

let modifiedArrWithArrowFunction = arrMap.map((element) => element * 3); // return is optional

console.log(modifiedArrWithArrowFunction); // [9, 12, 15, 18]

// ********************** REDUCE **********************

// reduce the array to a single value => total price of the shopping cart

let shoppingCart = [
  {
    product: "phone",
    qty: 1,
    price: 500,
  },
  {
    product: "Screen Protector",
    qty: 1,
    price: 10,
  },
  {
    product: "Memory Card",
    qty: 2,
    price: 20,
  },
];

let total = shoppingCart.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue.qty * currentValue.price;
}, 0);

// ********************** STRING FORMATTING **********************

const formatString = (receivedString, ...formatArguments) => {
  let modifiedString = receivedString;
  for (let i = 0; i < formatArguments.length; i++) {
    if (modifiedString.indexOf("{" + i + "}") !== -1) {
      // if indexOf returns -1 => the item is NOT in the array
      modifiedString = modifiedString.replace(
        "{" + i + "}",
        formatArguments[i]
      );
    }
  }

  return modifiedString;
};

console.log(formatString("a {0} is {1}", "cat", "fat"));

// ********************** MANIPULATING AN ARRAY OF OBJECTS **********************

// Function that receives an array of objects and an object => if all the fields in the object match any item in the array => delete it

const getFilteredObjects = (array, receivedObject) => {
  return array.filter((element) => {
    let result = false;

    Object.keys(receivedObject).forEach((key) => {
      if (!element[key] || element[key] !== object[key]) {
        result = true;
      }
    });

    return result; // default return value is false
  });
};

const laptops = [
  {
    brand: "HP",
    processor: "i5",
    ram: 8,
  },
  {
    brand: "Lenovo",
    processor: "i5",
    ram: 16,
  },
  {
    brand: "Acer",
    processor: "i5",
    ram: 8,
  },
  {
    brand: "Asus",
    processor: "i7",
    ram: 8,
  },
];

const resultedArray = getFilteredObjects(laptops, { processor: "i5", ram: 8 });

console.log("Result : ", resultedArray);
