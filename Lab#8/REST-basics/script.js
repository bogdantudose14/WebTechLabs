let dataGetterBtn = document.getElementById("retrieveDataBtn");
let url = "http://localhost:8080/api"; // store the URL in a global variable and adapt it depending on the route we are fetching

// an async function that awaits for the fetch method which by default returns a promise
async function populateTable() {
  clearTableBody(); // method for emptying the table before repopulating it
  await fetch(`${url}/getList`) // template literals for interpolating JS variables inside strings
    .then(
      function (result) {
        return result.json(); // parse the result resolved by the promise returned by fetch method
      },
      function (error) {}
    )
    .then((result) => {
      //let table = document.getElementsByClassName("dataTable")[0];
      let tableBody = document.getElementById("tbody");

      for (const resultObject of result) {
        //for every object inside the array

        //create a table row with two columns (table data <td>)
        let resultObjectTableRow = document.createElement("tr");
        let nameTableData = document.createElement("td");
        let ageTableData = document.createElement("td");

        nameTableData.innerHTML = resultObject.name; // set the innerHTML of the <td> tags
        ageTableData.innerHTML = resultObject.age;

        resultObjectTableRow.appendChild(nameTableData); // append the <td> tags to the <tr> tag
        resultObjectTableRow.appendChild(ageTableData);

        tableBody.appendChild(resultObjectTableRow); // append the <tr> to the table body
      }
    });
}

function clearTableBody() {
  // function for emptying the table body before repopulating it
  let tableBody = document.getElementById("tbody");
  tableBody.innerHTML = "";
}

function clearFormInputs() {
  // function for emptying the form inputs after submitting the data to the server
  document.getElementById("inputName").value = "";
  document.getElementById("inputAge").value = "";
}

async function sendData() {
  // function called by the form submit button

  //select the values of the inputs by accessing the "value" property
  let nameValue = document.getElementById("inputName").value;
  let ageValue = document.getElementById("inputAge").value;

  // validate the inputs (simple validation in case one of them is empty)
  if (!nameValue || !ageValue) {
    throw new Error("Complete the input fields!");
  }

  await fetch(`${url}/postItem`, {
    // by default the fetch method uses a "GET" unless explicitly specifying
    // the method

    // Adding method type
    method: "POST",

    // Adding body or contents to send => generate random ID using Math.random() which returns a value between 0 and 1
    body: JSON.stringify({
      id: Math.random() * 10000,
      name: nameValue,
      age: ageValue,
    }),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }) // Converting to JSON
    .then((response) => response.json()) // this is the response sent by the server which has to be parsed
    // using the json() method

    // Displaying results to console
    .then((jsonResponse) => console.log(jsonResponse));

  clearFormInputs(); // clear the form inputs after sending the data
}

dataGetterBtn.onclick = populateTable; // way of attaching a method on a HTML element (using the onevent property)

// a more recommended way would be
// dataGetterBtn.addEventListener('click',(e)=>{ populateTable()}) // call the populateTable method in the callback handler
