// Input Validation

//Considering the coffee type to be limited to some specific values => like in an enum;

const orderCoffee = (type) => {
  const types = {
    SPECIAL: "SPECIAL",
    REGULAR: "REGULAR",
  };

  if (Object.values(types).indexOf(type) === -1) {
    // invalid type

    throw new Error("coffee error"); // keyword throw + Error object
  } else {
    console.log(`preparing ${type} coffee`);
  }
};

//we know that our function can throw an exception => use a try{} catch{}

try {
  orderCoffee("REGULAR");
  orderCoffee("ESPRESSO");
} catch (err) {
  console.warn(err);
}
