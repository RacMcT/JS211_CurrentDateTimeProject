
// Displays the current day and time:
console.log(new Date)
const displayDateClick = () => {

// get current date (local machine date time)
const date = new Date();
// convert the date to a string
let x = date.toDateString();
// convert the time to a string
let time = date.toLocaleTimeString();
// set the innerHTML of that element to the date a space the time - allows to display with button onclick
document.getElementById('time').innerHTML = x + ' ' + time;}


// Converts a number to a string:
 const numberToStringClick = () => {
  let num= document.getElementById("numberForStringConversion").value; 
  toString(num);
  console.log(num);
  console.log(typeof num);
  document.getElementById("number-string").innerHTML +="<p>This was a number and is now a string thanks to JavaScript magic-  check it out in the console log!</p>"; 
 }

// Converts a string to the number:
const stringToNumberClick = () => {
  let str= Number(document.getElementById('number').value);
  console.log(str);
  console.log(typeof str);
  document.getElementById("string-number").innerHTML +="<p>This was a string and is now a number thanks to JavaScript magic- check it out in the console log! </p>"
}

// JavaScript program that takes in different datatypes and prints thier type:
// HOW DO I TEST FOR SOMETHING OTHER THAN A STRING? INPUT DEFAULT TYPE IS TEXT- EVEN IF NOT DECLARED? 

 const dataTypeIdentifyClick = () => {
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

const sumNumbersClick = () => {
  let num1 = Number(document.getElementById('num1').value);
  let num2 = Number(document.getElementById('num2').value);
   console.log(num1 , num2);
   console.log(typeof num1, typeof num2);
  let x= (num1 + num2);
document.getElementById("sum-numbers").innerHTML += "<p>Sum: </p>" + x;
}


// Write a JavaScript program that runs only when 2 things are true.

//criteria- must enter name and choose 1 radio button option
//alert message or prompt if need to choose radio button option
//alert message or prompt if need to enter name
//if both criteria are met- return a message with name and message related to the option chosen

//name- enter string value in input- hold in variable "name"

//image input options- images & messages: which frog are you today?
// frog1- That's great, hope you stay happy!
// frog2- What's on your mind?
// frog3- Sorry, hope your day gets better!

// returns: name + message

//**************************/

// THIS FUNCTION CORRECTED ISSUES WHEN WAS TRYING TO RUN BEFORE DOM HAD CHANCE TO FINISH LOADING:
// (function () {
//   if (window.addEventListener) {
//       window.addEventListener('DOMContentLoaded', submit2CriteriaTrue, false);
//   } else {
//       window.attachEvent('onload', submit2CriteriaTrue);
//   }
// } ());

//******* CODE FOR FROG CHOICES: COMMENT OUT TO START TO WORK ON OTHER SECTIONS *************/

  const submit2CriteriaTrueClick = () =>{
    let name = document.getElementById('name').value;
    let selected = document.getElementsByClassName('frog').value;
  console.log(selected);
  }
//     function validateName(){
//       if (name == "" )
//         alert("Please input your name");
//       else {return true}
//     }
      
//     console.log(selected);
// //bug: Message is getting put into the html even if only one condition is met
//     if (selected = "happy" && validateName() == true);{
//        document.getElementById("frog-message").innerHTML += name + "<p> that's great, hope you stay happy!</p>";
//     } else if (selected = "confused" && validateName() == true);{
//        document.getElementById("frog-message").innerHTML += name + "<p>, what's on your mind?</p>";
//     } else if (selected = "sad" && validateName() == true);{
//        document.getElementById("frog-message").innerHTML += "<p>Sorry </p>" + name + "<p>, I hope you're day gets better! </p>";
//     } else {alert ("please enter name and select froggy emotion");

//     }
//    }
  // Should the else if be switch statments instead?-- NO BECAUSE NEED 2 CONDITIONS TO BE TRUE??


//*************** NEXT SECTION: 1 THING IS TRUE- RESPONSE SHOWS *******************/


// Write a JavaScript program that runs when 1 of 2 things are true.-- section 4

// if the user selects an option then it prints out a message
//if user selects no option nothing happens

// let chores = document.getElementsByName('chore');
// const choreStatusClick = () => {
// for (var i = 0, length = chores.length; i < length; i++){
//   if (chores[i].value =="yes"){
//     document.getElementById("child-allowance").innerHTML += "<p> Good Job, you now have $2.00";
//   }else if (chores[i].value =="no"){
//     document.getElementById("child-allowance").innerHTML += "<p> Please finish up!";
//   } 
//   //break; - when it is incorporated then it just does first response... when not there it gives both... ?

//   }
// }

//************* FIRST ATTEMPT FOR CHORES RADIO BUTTON RESPONSES -- ONLY 1/2 WORKED********
// const choreStatusClick = () => {
//   if (chores.checked == true) {
//     document.getElementById("child-allowance").innerHTML += "<p> Good Job, you now have $2.00";
    
//   } else {
//     document.getElementById("child-allowance").innerHTML += "<p> Please finish up!";
    
//   }
// }

//*************** NEXT SECTION: 2 THING ARE FALSE- RESPONSE SHOWS-- ALERT MESSAGE? *******************/

// Write a JavaScript program that runs when both things are not true.  -- section 5

//When user does NOT choose 2 favorite treats and clicks submit button- alert pops up?
//When user chooses favorite treats- message text appears: "Great Choices Friend!" 


//  let treats = document.getElementsByName('ice-cream');
//  const treatChoiceClick = () => {
//   let choc = document.getElementById("chocolate").checked;
//   let van = document.getElementById("vanilla").checked;
//   let straw = document.getElementById("strawberry").checked;

//   if ((choc == "") && (van == ""))
//   {alert("please select 2 treat flavors");
//   return false;
//  } else if ((choc == "")) && (straw == ""));
//  {alert("please select 2 treat flavors");
//   return false;
// } else if ((straw == "")) && (van == "");
// {alert ("please select 2 treat flavors");
// return false;
// } else {
//   document.getElementById("treat-response").innerHTML += "<p> Great Choices Friend!";
//   return true;
// }
//  }





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

//ASK IN CLASS: WHY DON'T WE DO THIS AS WE GO? WOULDN'T IT BE EASIER TO TROUBLESHOOT BUGS IF WE CAN PHYSICALLY SEE THEM AND THEN AFTER IT IS TOTALLY FUNCTIONAL AND DISPLAYS FOR THE USER TO GO THROUGH AND STYLE IT PRETTY
