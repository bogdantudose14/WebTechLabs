var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:

    const responseText = xhttp.responseText; //access the response object

    //process the response
    //parse the responseObject and convert it to object using JSON.parse()

    let responseObject = JSON.parse(responseText);

    //console.log(responseObject);

    //access the object under the "message" key and map its keys to separate <li> items
    Object.keys(responseObject.message).map((currentValue) => {
      let li = document.createElement("li");
      li.innerHTML = currentValue;
      document.getElementById("dogBreeds").append(li);
    });
  }
};
xhttp.open("GET", "https://dog.ceo/api/breeds/list/all", true);
xhttp.send();
