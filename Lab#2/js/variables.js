console.log('My first JS interaction');
console.log(this);
console.log(window);

/*
    Data types: 
    - number
    - string
    - boolean
    - null 
    - undefined
    - Symbol
    - BigInt
*/

var a = 10;
console.log(typeof a);
console.log(a);
a = 'Hello there';
console.log(typeof a);
console.log(a);
a = false;
console.log(typeof a);
console.log(a);
a = null;
console.log(typeof a);
console.log(a);

{
    let b = 'Block scoped';
    console.log(b);
}

const c = 'I am immutable';
console.log(c);
// c = 'reinitialize'; // Throws error
// console.log(b); // Throws error