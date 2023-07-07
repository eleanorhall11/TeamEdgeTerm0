/* -------------------------------------------- 

	You've just learned about variables, conditionals, functions, and user input. 
	You've also created a basic calculator in a previous project.
	
	Now imagine you are going out to eat with two other friends.
	Are you at a restaurant for a meal? Are you grabbing boba? Or are you just going to an ice cream parlor?
	At the end of the meal, you and your friends have to split the bill. 

	Wouldn't it be great if we could automate that math?

					Let's try it!

  -------------------------------------------- 

Scenario Parameters: 

	When you and your friends eat out, each of you have the option to order one or multiple items.
	What kind of items are available to order?

	At the end of the order, the receipt comes and you all have to calculate the cost for each person:
	Don't forget the tax and tip!

After this program finishes running, it should output a specific total for each person

  -------------------------------------------- */

const READLINE = require("readline-sync");

/* -------------------------------------------- 

Part 1:
Let's start by asking taking the order of the group(you and two friends). What did each person order?

Write a function that will take the group's order:
- Prompt the user to enter the price of each item they ordered
- Return the cost 

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */



function calculateCost() {
	let orderCost = 0;
  
	let item1Price = parseFloat(prompt("Enter the price of the first item:"));
	orderCost += item1Price;
  
	let item2Price = parseFloat(prompt("Enter the price of the second item:"));
	orderCost += item2Price;
  
	let item3Price = parseFloat(prompt("Enter the price of the third item:"));
	orderCost += item3Price;
  
	return orderCost;
  }
  
  let totalCost = calculateCost();
  console.log("Total Cost:", totalCost);
  








/* -------------------------------------------- 

Part 2:
Now that you have the costs of everything ordered, let's calculate the cost of each person's order(including tip and tax).

Write a function that will calculate the cost of each person's order, including:
- Cost of all of their ordered items
- Tax (Look up the sales tax of your city)
- Tip (Give the user the option to enter how much they want to tip)

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */


function calculatePersonCost() {
	let itemCost = parseFloat(prompt("Enter the cost of the ordered items:"));
	let taxRate = 0.08; // Assume 8% sales tax
	let tipPercentage = parseFloat(prompt("Enter the tip percentage:"));
	
	let tax = itemCost * taxRate;
	let tip = itemCost * (tipPercentage / 100);
	
	let personCost = itemCost + tax + tip;
	return personCost;
  }
  
  let personCost1 = calculatePersonCost();
  console.log("Person 1 Cost:", personCost1);
  
  let personCost2 = calculatePersonCost();
  console.log("Person 2 Cost:", personCost2);
  
  let personCost3 = calculatePersonCost();
  console.log("Person 3 Cost:", personCost3);
  









/* -------------------------------------------- 

Part 3:
Let's print out a receipt for each person.

Write a function that will take the values of each person's order and total cost and print it out in an appealing way.

The receipt should include:
- Cost of each item
- Total cost for each person

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */

function printReceipt(personName, itemCost, tax, tip, totalCost) {
	console.log(`--- Receipt for ${personName} ---`);
	console.log("Item Cost:", itemCost);
	console.log("Tax:", tax);
	console.log("Tip:", tip);
	console.log("Total Cost:", totalCost);
	console.log("--------------------------------");
  }
  
  let person1 = "Person 1";
  let itemCost1 = 25.99;
  let tax1 = 2.08;
  let tip1 = 5.0;
  let totalCost1 = itemCost1 + tax1 + tip1;
  
  printReceipt(person1, itemCost1, tax1, tip1, totalCost1);
  
  








/* -------------------------------------------- 

Part 4: Upchallenges!

How many of these upchallenges can you implement?

- Make sure the user is only entering numbers. If they enter an invalid value, prompt them to re-enter. 
- The displayed prices should only have two decimal places.
- Can you adjust your program to account for any shared items ordered for the group?
- Display the tax and tip values
- Implement a rewards system (stamp cards, buy one get one, etc)

-------------------------------------------- */
function calculatePersonCost() {
	let itemCost;
	let validInput = false;
  
	while (!validInput) {
	  let userInput = prompt("Enter the cost of the ordered items:");
	  itemCost = parseFloat(userInput);
  
	  if (!isNaN(itemCost)) {
		validInput = true;
	  } else {
		alert("Invalid input! Please enter a valid number.");
	  }
	}
  
	// Rest of the code...
  }
  