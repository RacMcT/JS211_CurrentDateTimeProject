
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

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:

console.log(typeof true) // * Boolean
console.log(typeof null) // * Null

let doesNotDefine

console.log(typeof null) // * Undefined
console.log(typeof 4) // * Number
console.log(typeof NaN) // * NaN
console.log(typeof "hello") // * String

function dataTypeClick() {
  let typeInput = document.querySelector(".type-input").value

  if(parseInt(typeInput) == Number) {
    document.getElementById("data-type-display").innerHTML = "<p>This is a Number</p>";
  } else if (typeInput.toLowerCase() == "true" || typeInput.toLowerCase() == "false"){
    document.getElementById("data-type-display").innerHTML = "<p>This is a Boolian</p>";
  } else if (parseInt(typeInput) == NaN) {
    document.getElementById("data-type-display").innerHTML = "<p>This is not a number (aka NaN) or Null</p>";
  } else if (typeInput == "") {
    document.getElementById("data-type-display").innerHTML = "<p>This is undefined</p>";
  } else {
    document.getElementById("data-type-display").innerHTML = "<p>This is a string</p>";
  }
}

  
//*********************************/
//START THIS SECTION TUESDAY - FEB 22ND 
//*********************************/

//input data- then run through functions 
  
// Write a JavaScript program that adds 2 numbers together.

const sumNumbersClick = () => {
  let num1 = Number(document.getElementById('num1').value);
  let num2 = Number(document.getElementById('num2').value);
   console.log(num1 , num2);
   console.log(typeof num1, typeof num2);
  let x= (num1 + num2);
document.getElementById("sum-numbers").innerHTML += "<p>Sum: </p>" + x;
}

//****************************************************************/
// Write a JavaScript program that runs only when 2 things are true.

//LOGIC NOTES FOR MYSELF:

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

//****************************************************************/

// THIS FUNCTION CORRECTED ISSUES WHEN WAS TRYING TO RUN BEFORE DOM HAD CHANCE TO FINISH LOADING:
// LOAD ERROR NOT HAPPENING ANYMORE- KEEP CODE IN COMMENTS IN CASE NEED AGAIN?! 
// (function () {
//   if (window.addEventListener) {
//       window.addEventListener('DOMContentLoaded', submit2CriteriaTrue, false);
//   } else {
//       window.attachEvent('onload', submit2CriteriaTrue);
//   }
// } ());

//******* CODE FOR FROG CHOICES- 3 RADIO BUTTONS AND USERNAME: *************/

//Function validates that the user entered a name and puts alert if not met
function validateName(name){
  if (name == "" )
    alert("Please input your name");
  else {return true}
     console.log(name);
}

//Function takes input data from frog radio buttons and username; depending on selections a different message shows in HTML for user
  const submit2CriteriaTrueClick = () =>{
    let name = document.getElementById('name').value;
    let selected = document.getElementById('frogForm');
    let emotion = "";

//if statements get data from radio buttons- puts the checked into variable to be called later

    if (document.getElementById('happyFrog').checked){
      emotion = "happy"
    }
    if (document.getElementById('confusedFrog').checked){
      emotion = "confused"
    }
    if (document.getElementById('sadFrog').checked){
      emotion = "sad"
    }

// checks to make sure array from form is able to be input/used if needed
console.log(selected); 

//if else statments- runs permutations for different combos and connects username, frog emotion and outputs message for user in HTML container
//error- only gives happy message, does not give other messages?

    if (emotion == "happy" && validateName(name) == true){
       document.getElementById("frog-message").innerHTML += name + "<p> that's great, hope you stay happy!</p>";
    } else if (emotion == "confused" && validateName(name) == true){
       document.getElementById("frog-message").innerHTML += name + "<p>, what's on your mind?</p>";
    } else if (emotion == "sad" && validateName(name) == true){
       document.getElementById("frog-message").innerHTML += "<p>Sorry </p>" + name + "<p>, I hope you're day gets better! </p>";
    } else {alert ("please enter name and select froggy emotion");

    }
   }

  // Should the else if be switch statments instead?-- NO BECAUSE NEED 2 CONDITIONS TO BE TRUE??


//*************** NEXT SECTION: 1 THING IS TRUE- RESPONSE SHOWS *******************/

// Write a JavaScript program that runs when 1 of 2 things are true.-- section 4

// if the user selects an option then it prints out a message
// if user selects no option nothing happens

//****************CODE FOR CHORES STATUS- 2 RADIO BUTTONS:******************************/

const choreStatusClick = () => {

 if (document.getElementById("yes").checked){
  choreAnswer = "yes"
}
if (document.getElementById("no").checked){
  choreAnswer = "no"
}

  if (choreAnswer == "yes"){
    document.getElementById("child-allowance").innerHTML += "<p> Good Job, you now have $2.00 </p>";
  } else if (choreAnswer == "no"){
    document.getElementById("child-allowance").innerHTML += "<p>Please finish up! </p>";
  }
}


//*************** NEXT SECTION: 2 THING ARE FALSE- RESPONSE SHOWS-- ALERT MESSAGE? *******************/

// Write a JavaScript program that runs when both things are not true.  -- section 5

//*********** ALTERNATIVE SOLUTION TO PROMPT ******/

//User enters two numbers into input, if they are both false a message appears
//false 1 needs to be greter than 5 to be false - ask for user to input opposite
//false 2 needs to be less than 8 to be false - ask for user to input opposite

function twoFalseClick () {
  let false1 = parseInt(document.getElementById("false1").value);
  let false2 = parseInt(document.getElementById("false2").value);

if((false1 >5) && (false2 <8)){
  alert("thanks for entering two falsy numbers")
}else{
  alert("please enter falsy numbers (not meet criteria)")
}
}

/*************** NEXT SECTION: 2 THING ARE FALSE- RESPONSE SHOWS-- ALERT MESSAGE? *******************/

// Write a JavaScript program that runs when both things are not true.  -- section 5

//When user does NOT choose 2 favorite treats and clicks submit button- alert pops up?
//When user chooses favorite treats- message text appears: "Great Choices Friend!" 

//****************CODE FOR TREATS CHOICES- 3 CHECKBOXES: ABANDONED FOR ASSIGNMENT- WILL TRY AGAIN AT A LATER DATE****************/

//****BUG: ALERT MESSAGE SHOWS UP NO MATTER WHAT *****
//****DOES THIS REALLY MEET CRITERIA?? -- ASK IN CLASS FOR SUGGESTIONS... ****

//  function treatChoiceClick () {
//   let form_data = new
//   FormData(document.getElementById("treatsForm"));
//   if(!form_data.getAll("treat")<2){
//     alert ("please select 2 treat flavors")
//  }else {
//   document.getElementById("treat-response").innerHTML += "<p> Great Choices Friend!";
//  }
// }

//*****FIRST TREATS CODE ATTEMPT- LONG AND DIDN'T REALLY VALIDATE FOR 2 CHOICES *************/
 // const treatChoiceClick = () => {

  //   if (document.getElementById("chocolate").checked){
  //    choc = "choc"
  //  }
  //  if (document.getElementById("vanilla").checked){
  //    van = "van"
  //  }
  //  if(document.getElementById("strawberry").checked){
  //    straw="straw"
  //  }
   
  //   if ((choc == "") && (van == ""))
  //   {alert("please select 2 treat flavors")
  
  //  } else if ((choc == "") && (straw == ""))
  //  {alert("please select 2 treat flavors")
  
  // } else if ((straw == "") && (van == ""))
  // {alert ("please select 2 treat flavors")
  
  // } else {
  //   document.getElementById("treat-response").innerHTML += "<p> Great Choices Friend!"
  // }
  //  }


  //************* FIRST ATTEMPT FOR CHORES RADIO BUTTON RESPONSES -- ONLY 1/2 WORKED********
// const choreStatusClick = () => {
//   if (chores.checked == true) {
//     document.getElementById("child-allowance").innerHTML += "<p> Good Job, you now have $2.00";
    
//   } else {
//     document.getElementById("child-allowance").innerHTML += "<p> Please finish up!";
    
//   }
// }

//**********************SECOND ATTEMPT- TRIED TO USE FOR LOOP -- KINDA WORKED **************
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

//ASK IN CLASS: WHY DON'T WE DO THIS AS WE GO? WOULDN'T IT BE EASIER TO TROUBLESHOOT BUGS IF WE CAN PHYSICALLY SEE THEM AND THEN AFTER IT IS TOTALLY FUNCTIONAL AND DISPLAYS FOR THE USER TO GO THROUGH?
