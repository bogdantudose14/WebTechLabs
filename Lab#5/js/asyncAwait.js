// ******** Classic promise ********

// function promiseFunctionExample() {
//   return Promise.resolve("1"); // return new Promise((resolve, reject) => { resolve("1");});

// }

// promiseFunctionExample().then((result) => console.log(result));

// ******** ASYNC ALTERNATIVE ********

// async function asyncFunctionExample() {
//   return 1; // return value will be consumed by the first callback in 'then'
//   //throw new Error("test");  // throw value will be consumed by the second callback in 'then'
// }

// asyncFunctionExample().then(
//   (result) => console.log(result), // this will be called for the return value
//   (error) => console.log(error) // this will be called for the thrown value (Error)
// );

// ******** AWAIT ********

function asyncPromiseWithAwait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done after 3 seconds");
    }, 3000);
  });
}

// AWAIT ONLY WORKS IN ASYNC FUNCTIONS

async function f() {
  let result = await asyncPromiseWithAwait(); // wait until the promise resolves (*)
  console.log(result);

  console.log(
    "Should be called before promise solving but it is called after it because of await!"
  ); // await will stop the code execution and resume it after the promise resolves or rejects
}

f();
