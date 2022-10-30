// #region SETTIMEOUT && CLEARTIMEOUT

// setTimeout calls the function once !!

// setTimeout(function () {
//   console.log("Timeout call");
// }, 3000);

// clearTimeout for stopping the setTimeout

let counter = 0;
let timeoutId;
// program to display time every 3 seconds
function showTime() {
  // return new date and time
  let dateTime = new Date();

  // returns the current local time
  let time = dateTime.toLocaleTimeString();

  console.log(time);
  counter++;

  if (counter < 10) {
    // display the time after 3 seconds
    timeoutId = setTimeout(showTime, 1000);
  }
}

// calling the function
showTime();

// clear the timeout

//clearTimeout(timeoutId);

// #endregion

// #region SETINTERVAL && CLEARINTERVAL

//const myInterval = setInterval(myTimer, 1000);

// function myTimer() {
//   const date = new Date();
//   document.getElementById("demo").innerHTML = date.toLocaleTimeString();
// }

// function myStopFunction() {
//   clearInterval(myInterval);
//}

//#endregion
