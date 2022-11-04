// import { varA} from "./math.js"; // explicitly specify the extension .js

// console.log(varA);

//import { a, f1 } from "./math.js";
//console.log(f1(a, 4));

// import { Sum } from "./math.js";

// console.log(Sum(1, 3));

// Importing using aliases

// import { Sum as f1 } from "./math.js";

//console.log(f1(3, 4));

// Importing everything from a specific module as an object => use * and give it an alias

import * as MathModule from "./math.js";

console.log(MathModule.Sum(5, 6));

//Dependencies administration and usage => npm instal myDependency will create/update a node_modules file and add it as a dependency inside package.json
