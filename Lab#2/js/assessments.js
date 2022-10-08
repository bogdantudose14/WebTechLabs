//******************************************** ASSESSMENT #1 ****************************************************

let concat = (stringArray) => {
  let result = "";
  for (const string of stringArray) {
    if (typeof string === "string")
      // concat() is a "string" data type built-in method
      result = result.concat(string);
    //result += string // same result as concat method
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
      // includes() is a "string" data type built-in method
      counter++;
    }
  }
  // (= = =) vs (! = =) => checks the data type equality too
  // ternary operator => (condition) ? if true : if false => an alternative to (if then else)

  return string1.length !== string2.length ? -1 : counter;
}

console.log(difference("test124", "test1253"));

//******************************************** ASSESSMENT #3 ****************************************************

const arrayConcat = (numbersList) => {
  let result = [];

  if (typeof numbersList !== "string") {
    throw new Error("A string containing a list should be passed as parameter");
  } else {
    let splitList = numbersList.trim().split(",");

    for (let item of splitList) {
      result.push(parseInt(item));
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
