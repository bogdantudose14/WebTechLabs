// Memoization uses closures => give a specific state to a function => return it from another function

// Fibonacci sequence

function fibGen() {
  const cache = [1, 1]; // we know the initial state of the function

  // the function itself

  const fib = (index) => {
    if (index < cache.length) {
      console.log("Found ", index);
      return cache[index];
    } else {
      // populating the cache
      console.log("Calculated " + index);
      cache[index] = fib(index - 1) + fib(index - 2);
      return cache[index];
    }
  };

  return fib; // return it from the 'generator' function
}

const fib = fibGen();

console.log(fib(1));
console.log(fib(5));
console.log(fib(3));

// ex: found 3 => 3 was found in cache
// ex: calculated 5 => it was computed just once

// NOTE: Every function call will be a cache
