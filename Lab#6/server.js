// these are included in the package.json file provided by me so you can either install them manually
// by running npm install express; npm install body-parser; npm install cors;
// or by simply running npm install; => this will look inside the package.json file and install the
// dependencies found in the "dependencies" object

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

let app = express(); // It's a layer built on the top of the Node js that helps manage servers and routes.
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true })); //Express body-parser is an npm module used to process data sent in an HTTP request body.
//It provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body.
app.use(bodyParser.json());
app.use(cors()); // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use("/api", router); // Mount the router as middleware at path /api

//hard code some data as we don't have a database configuration yet
const dataArray = [
  { id: 1, name: "Ionut", age: 25 },
  { id: 2, name: "Bogdan", age: 27 },
  { id: 3, name: "Daria", age: 19 },
  { id: 4, name: "Mihai", age: 33 },
  { id: 5, name: "Alexandra", age: 29 },
];

router.route("/getList").get((req, res) => {
  // req => request object && res => response object
  res.json(dataArray);
});

router.route("/postItem").post((req, res) => {
  // res and req can be easily named differently
  let element = req.body; // the data received by the server on a post method can be found inside the body of the request
  // req.body stores the data send by the client
  dataArray.push(element);
  //console.log(element);
  res.json("Successfully received object"); // send the response back to the client
});

let serverPort = 8080; // the server can be now reached on http://localhost:8080

app.listen(serverPort); // mention a port for our server to listen on (make sure you select an open port)
// if you are not sure what ports can you use (what ports are not reserved by the windows/mac OS)

console.log("App is running"); // if this console.log works, it means that the server threw no Error as it reached this line
