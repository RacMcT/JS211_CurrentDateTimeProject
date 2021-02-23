// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)
const displayDate = () => {
  // document.getElementById("display-element").innerHTML = currentDate; - boiler code to start from ACA

// get current date (locale machine date time)
const date = new Date();
// convert the date to a string
let x = date.toDateString();
// convert the time to a string
let time = date.toLocaleTimeString();
// set the innerHTML of that element to the date a space the time - allows to display with button onclick
document.getElementById('time').innerHTML = x + ' ' + time;}



// Write a JavaScript program to convert a number to a string.

 const numberToString = () => {
  var num= document.getElementById("numberForStringConversion").value; 
  toString(num);
  console.log(num);
  console.log(typeof num);
  document.getElementById("number-string").innerHTML +="<p>This was a number and is now a string thanks to JavaScript magic-  check it out in the console log!</p>"; 
 }


// Write a JavaScript program to convert a string to the number.
// stringToNumber();{
//   var text2=456
//   Number(text2)
//   console.log(text2)
// }

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
//input data- then run through functions- 
  
// Write a JavaScript program that adds 2 numbers together.



// Write a JavaScript program that runs only when 2 things are true.



// Write a JavaScript program that runs when 1 of 2 things are true.



// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
