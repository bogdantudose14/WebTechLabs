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
console.log(arrayConcat("123,1;23,345"));
