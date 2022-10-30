// Fetch

fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json()) // the response Object returned after consuming the promise
  // call json() method on the Response Object in order to extract the data
  .then((data) => {
    // the parsed response (with "message" and "status" keys)
    const dogBreeds = data.message;
    // we access the message key because that's how the API provides the desired data
    Object.keys(dogBreeds).map((currentBreed) => {
      // select the keys into an array and map the array to specific HTML elements
      console.log(currentBreed);
      let li = document.createElement("li");
      li.innerHTML = currentBreed;
      document.getElementById("dogBreeds").append(li);
    });
  });

// Async-Await alternative => wrap Fetch inside a function

async function getDogBreeds() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");

  //additional code that should be run after the promise is resolved (await will stop execution)
  return response;
}

//console.log(getDogBreeds()); => the Promise object returned

getDogBreeds()
  .then((response) => {
    console.log(response); // the response Object returned after consuming the promise
    return response.json(); // call json() method on the Response Object in order to extract the data
  })
  .then((jsonResponse) => {
    console.log(jsonResponse); // the parsed response (with "message" and "status" keys)
    return jsonResponse.message; // return the object containing the dog breeds ("message" in our case)
  }) // we access the message key because that's how the API provides the desired data
  //  => the key is different depending on the API response object documentation
  .then((dogBreedsObject) => {
    console.log(dogBreedsObject);
    // select the keys into an array and map the array to specific HTML elements
    // append the newly created elements to an existing DOM element

    Object.keys(dogBreedsObject).map((currentBreed) => {
      //console.log(currentBreed);
      let li = document.createElement("li");
      li.innerHTML = currentBreed;
      document.getElementById("dogBreeds").append(li);
    });
  });
