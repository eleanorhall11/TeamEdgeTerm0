/* -------------------------------------------- 

	You've just learned about functions.
	Functions are reusable pieces of code that make your code more modular.
	
	If you are writing the same bit of code over and over, you are doing more work that you have to.
	Use functions to simplify your code and decrease the amount of work you're doing. 

	Any time you start thinking 'this is tedious', you can probably write a function for that task.

  -------------------------------------------- */

const READLINE = require("readline-sync");

/* -------------------------------------------- 
  Challenge 1: Let's try to write some basic functions.
-------------------------------------------- */
function greetPerson(namey) {
	return `Hello, ${namey}!`;
  }
  
  console.log(greetPerson("elly"));
  
 console.log("------------------- Challenge 1 -------------------")

// **** Challenge 1: Problem 1 ****
// Write a function called printMessage() that prints any message you want.
function printMessage(message) {
	console.log(message);
  }
printMessage("Hello, world!");
printMessage("Welcome to the program!");
printMessage("This is a custom message.");


// **** Challenge 1: Problem 2 ****
// Write a function called printFiveMessages() that calls printMessage() five times.

function printMessage(message) {
	console.log(message);
  }
  
  function printFiveMessages() {
	for (let i = 0; i < 5; i++) {
	  printMessage("This is message #" + (i + 1));
	}
  }
  
  printFiveMessages();
  
// **** Challenge 1: Problem 3 ****
// Write a function called getUserInput() that asks the user if they'd like to print your message
// once or five times. Then call one of the two functions above based on what the user decides.
const readone = require('readline-sync');

function printMessage(message) {
  console.log(message);
}

function printFiveMessages() {
  for (let i = 0; i < 5; i++) {
    printMessage("This is message #" + (i + 1));
  }
}

function getUserInput() {
  const userInput = readone.question("Would you like to print the message once or five times? Enter 'once' or 'five': ");

  if (userInput === "once") {
    printMessage("Printing the message once:");
  } else if (userInput === "five") {
    printFiveMessages();
  } else {
    console.log("Invalid input. Please try again.");
  }
}

getUserInput();


// **** Challenge 1: Problem 4 ****
// Write a function called printGreeting() that prints a greeting message to the user.
function printGreeting() {
	console.log("Welcome! It's nice to meet you.");
  }
  
  printGreeting();
  

// **** Challenge 1: Problem 5 ****
// Write a function called printClosing() that prints a goodbye message to the user.
function printClosing() {
	console.log("Goodbye! Have a great day.");
  }
  
  printClosing();
  

// **** Challenge 1: Problem 6 ****
// Write a function called run() that greets the user, asks them for input, and sends a goodbye message.
// Remember! Use the functions that you've already made. Don't hardcode anything!

const readline = require('readline-sync');

function printGreeting() {
  console.log("Welcome! It's nice to meet you.");
}

function printClosing() {
  console.log("Goodbye! Have a great day.");
}

function run() {
  printGreeting();
  
  const userInput = readline.question("Please enter your input: ");
  console.log("You entered:", userInput);

  printClosing();
}

run();


/* -------------------------------------------- 

Challenge 2: Functions are also able to take input and return output. 
				The value(s) you pass to it are called parameters.

-------------------------------------------- */

 console.log("------------------- Challenge 2 -------------------")

/* **** Challenge 2: Problem 1 ****

Write a function called sumDouble that takes two number paramters and returns their sum.
However, if the two values are the same, the funciton will return double their sum.

	Examples:
		sumDouble(1, 2) → 3
		sumDouble(3, 2) → 5
		sumDouble(2, 2) → 8

-------------------------------------------- */

function sumDouble(a, b) {
	if (a === b) {
	  return 2 * (a + b);
	} else {
	  return a + b;
	}
  }
  
  console.log(sumDouble(1, 2)); // Output: 3
  console.log(sumDouble(3, 2)); // Output: 5
  console.log(sumDouble(2, 2)); // Output: 8
  





// Make sure to test your code! Write a few function calls to make sure your code works!

/* -------------------------------------------- 

**** Challenge 2: Problem 2 ****

Write a function called makes10 that takes two numbers, a and b, and returns true if one if them is 10 or if their sum is 10.

	Examples:
		makes10(9, 10) → true
		makes10(9, 9) → false
		makes10(1, 9) → true

-------------------------------------------- */


function makes10(a, b) {
	return a === 10 || b === 10 || a + b === 10;
  }
  
  console.log(makes10(9, 10)); // Output: true
  console.log(makes10(9, 9)); // Output: false
  console.log(makes10(1, 9)); // Output: true
  



// Make sure to test your code! Write a few function calls to make sure your code works!

/* -------------------------------------------- 

**** Challenge 2: Problem 3 ****

Write a function that will return the time our alarm is set to go off.

Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean
indicating if we are on vacation, return a string in the form "7:00" indicating
when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on
the weekend it should be "10:00". However, if we are on vacation -- then on weekdays
it should be "10:00" and weekends it should be "off".
	Examples:
		alarmClock(1, false) → "7:00"
		alarmClock(6, true) → "off"
		alarmClock(0, false) → "10:00"

-------------------------------------------- */



function alarmClock(day, vacation) {
	if (vacation) {
	  if (day === 0 || day === 6) {
		return "off";
	  } else {
		return "10:00";
	  }
	} else {
	  if (day === 0 || day === 6) {
		return "10:00";
	  } else {
		return "7:00";
	  }
	}
  }
  
  console.log(alarmClock(1, false)); // Output: "7:00"
  console.log(alarmClock(6, true)); // Output: "off"
  console.log(alarmClock(0, false)); // Output: "10:00"
  



// Make sure to test your code! Write a few function calls to make sure your code works!

/* -------------------------------------------- 

**** Challenge 2: Problem 4 ****

Write a function that will tell if you if you received a speeding ticket.
You are driving a little too fast, and a police officer stops you. 

To compute the result, encoded as a number value: 
	0=no ticket
	1=small ticket
	2=big ticket
If speed is 60 or less, the result is 0. 
If speed is between 61and 80 inclusive, the result is 1. 
If speed is 81 or more, the result is 2.

-------------------------------------------- */

function checkSpeed(speed) {
	if (speed <= 60) {
	  return 0;
	} else if (speed >= 61 && speed <= 80) {
	  return 1;
	} else {
	  return 2;
	}
  }
  
  console.log(checkSpeed(55)); // Output: 0
  console.log(checkSpeed(70)); // Output: 1
  console.log(checkSpeed(90)); // Output: 2
  






// Make sure to test your code! Write a few function calls to make sure your code works!