
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

