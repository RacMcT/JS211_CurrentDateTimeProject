
// Displays the current day and time:
console.log(new Date)
const displayDate = () => {

// get current date (locale machine date time)
const date = new Date();
// convert the date to a string
let x = date.toDateString();
// convert the time to a string
let time = date.toLocaleTimeString();
// set the innerHTML of that element to the date a space the time - allows to display with button onclick
document.getElementById('time').innerHTML = x + ' ' + time;}


// Converts a number to a string:
 const numberToString = () => {
  let num= document.getElementById("numberForStringConversion").value; 
  toString(num);
  console.log(num);
  console.log(typeof num);
  document.getElementById("number-string").innerHTML +="<p>This was a number and is now a string thanks to JavaScript magic-  check it out in the console log!</p>"; 
 }

// Converts a string to the number:
const stringToNumber = () => {
  let str= Number(document.getElementById('number').value);
  console.log(str);
  console.log(typeof str);
  document.getElementById("string-number").innerHTML +="<p>This was a string and is now a number thanks to JavaScript magic- check it out in the console log! </p>"
}

// JavaScript program that takes in different datatypes and prints thier type:
// HOW DO I TEST FOR SOMETHING OTHER THAN A STRING? INPUT DEFAULT TYPE IS TEXT- EVEN IF NOT DECLARED? 

 const dataTypeIdentify = () => {
 let dataTypes = document.getElementById('dataTypes').value;
console.log(dataTypes);
console.log(typeof dataTypes);
document.getElementById("data-type-display").innerHTML += "<p>This is the data type you just input - check it out in the console log! </p>"
 }
  
//*********************************/
//START THIS SECTION TUESDAY - FEB 22ND 
//*********************************/

//input data- then run through functions- 
  
// Write a JavaScript program that adds 2 numbers together.

const sumNumbers = () => {
  let num1 = Number(document.getElementById('num1').value);
  let num2 = Number(document.getElementById('num2').value);
   console.log(num1 , num2);
   console.log(typeof num1, typeof num2);
  let x= (num1 + num2);
document.getElementById("sum-numbers").innerHTML += "<p>Sum: </p>" + x;
}


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

//ASK IN CLASS: WHY DON'T WE DO THIS AS WE GO? WOULDN'T IT BE EASIER TO TROUBLESHOOT BUGS IF WE CAN PHYSICALLY SEE THEM AND THEN GO THROUGH AND STYLE IT PRETTY?
//DOING IT AS I GO HELPS ME TO MAKE SURE IT ALL CONNECTS, FUNCTION BY FUNCTION BEFORE MOVING ONTO THE NEXT SECTION
