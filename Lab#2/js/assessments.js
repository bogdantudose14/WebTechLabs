//******************************************** ASSESSMENT #1 ****************************************************

let concat = (stringArray) => {
  let result = "";
  for (const string of stringArray) {
    // = = = for additional data type equality check
    if (typeof string === "string") result = result.concat(string);
    else {
      throw new Error("The array has different variable types");
    }
  }

  return result;
};

console.log(concat(["test", "124", "finished"]));

//******************************************** ASSESSMENT #2 ****************************************************

function difference(string1, string2) {
  let counter = 0;
  for (let i = 0; i < string1.length; i++) {
    if (!string2.includes(string1[i])) {
      // includes() is a built-in method for "string" variables
      counter++;
    }
  }

  return string1.length !== string2.length ? -1 : counter; // ternary operator => (condition) ? case true expression : case false expression
}

console.log(difference("test124", "test1253"));

//******************************************** ASSESSMENT #3 ****************************************************

const arrayConcat = (numbersList) => {
  let result = []; // initialize empty array => []

  if (typeof numbersList !== "string") {
    throw new Error("A string containing a list should be passed as parameter");
  } else {
    let splitList = numbersList.trim().split(","); // trim() and split are built-in methods of "string" variables

    for (let item of splitList) {
      result.push(parseInt(item)); // push() method for arrays
    }
  }

  return result;
};

// console.log(arrayConcat(123));
console.log(arrayConcat("123,1,23,345"));

//******************************************** ASSESSMENT #4 ****************************************************

const text = "Why does Javascript seem so weird";

const relativeFrequencies = (textParam) => {
  let result = {};
  const letterArray = textParam.trim();

  // Javascript equivalent of forEach => for..of
  // we can use this control structure if we do not need the indexes

  // .trim() is a string method and it removes whitespace from
  //  both ends of a string and returns a new string, without modifying the
  //  original string

  for (let letter of letterArray) {
    if (letter in result) {
      result[letter]++;
    } else result[letter] = 1;
  }

  return result;
};

console.log(relativeFrequencies(text));
