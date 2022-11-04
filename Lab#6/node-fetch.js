// fetch alternative => this is not the same as fetchAPI for requesting from Browser
// this fetch needs "node-fetch" to be installed using npm install node-fetch
// and is a way of fetching from nodeJS apps (apps executed from terminal using node interpreter)

import fetch from "node-fetch";

fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) => console.log(data));

// potential error => Cannot use import statement outside a module
// This error occurs for one reason: you’re trying to use import and you’re not inside an ES module.
// To solve the error, set the type attribute to module when loading a script, or in your package.json ***for Node.js apps.***
// *** HTML***To solve the error, set the type attribute to module when loading the script in your HTML code.

//OBS: If using node for running the app, the ReferenceError: "document is not defined" will be thrown.
//This happens because The variable relates to the Document Object Model, which represents a web page that is loaded in the browser and can't be used on the server side (e.g. in Node.js).
//To solve this, open the HTML page in a browser.
