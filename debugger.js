// const READLINE = require("readline-sync");
// const options = ["rock", "paper", "scissors"];

// console.log(`Let's play Rock Paper Scissors!`);

// // Challenge
// // Find the bugs below:

// while(true){
// 	let userInput = READLINE.question(`Do you want to play rock, paper, or scissors? `).toLowerCase();
// 	randomSelection = Math.floor(Math.random()*3);
//   computerSelection = options[randomSelection];

// 	console.log("You played: ${userInput} and the computer played: ${computerSelection}");
//   if(userInput === computerSelection){
//     console.log("It's a tie!");
//   }
//   else if((userInput = "rock" && computerSelection = "paper") ||
//           (userInput = "paper" && computerSelection = "scissors") ||
//           (userInput = "scissors" && computerSelection = "rock")){
//     console.log("You Lose!");
//   }
//   else if{
//     console.log("You Win!");
//   }

  const READLINE = require("readline-sync");
const options = ["rock", "paper", "scissors"];

console.log(`Let's play Rock Paper Scissors!`);

while (true) {
  let userInput = READLINE.question(`Do you want to play rock, paper, or scissors? `).toLowerCase();
  let randomSelection = Math.floor(Math.random() * 3);
  let computerSelection = options[randomSelection];

  console.log(`You played: ${userInput} and the computer played: ${computerSelection}`);
  if (userInput === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (userInput === "rock" && computerSelection === "paper") ||
    (userInput === "paper" && computerSelection === "scissors") ||
    (userInput === "scissors" && computerSelection === "rock")
  ) {
    console.log("You Lose!");
  } else {
    console.log("You Win!");
  }
}
// Bug 1: Missing variable declarations (let) for randomSelection and computerSelection.
// Bug 2: Incorrect string interpolation in the console.log() statements. The use of single quotes ' instead of backticks ` prevents the interpolation from working. Corrected by changing to backticks.
// Bug 3: Assignment (=) operator used instead of equality (===) operator in the conditional statements. The equality operator should be used to compare the values.
// Bug 4: Missing opening parenthesis after the else if statement. It should have an opening parenthesis after else if.