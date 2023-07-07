
/* -------------------------------------------- 
Day 2 Challenges
-------------------------------------------- */

let message = `Welcome to Day 2
Today we are learning about conditionals. 
Let's practice writing some conditionals of our own!`;
console.log(message);

const READLINE = require("readline-sync");
/* -------------------------------------------- */

console.log("------------------- Challenge 1 -------------------")
/* Can you drive?
    Prompt the user to enter their age.
    Write conditional statements that print out whether you can drive in your city. */


    const readline = require('readline-sync');

    // Prompt the user to enter their age
    const age = parseInt(readline.question('Enter your age: '));
    
    // Check if the age meets the driving requirement
    if (age >= 16) {
      console.log('You can drive in your city!');
    } else {
      console.log('Sorry, you cannot drive in your city yet.');
    }
    










/* -------------------------------------------- */

console.log("------------------- Challenge 2 -------------------") 

/* Who placed first?
    Write conditional statements that checks which is the highest and prints the highest score. 
    Hint: Create three variables and assign them random scores. */


// Generate random scores between 0 and 100
const score1 = Math.floor(Math.random() * 101);
const score2 = Math.floor(Math.random() * 101);
const score3 = Math.floor(Math.random() * 101);

console.log('Score 1:', score1);
console.log('Score 2:', score2);
console.log('Score 3:', score3);

// Compare the scores using conditional statements
if (score1 > score2 && score1 > score3) {
  console.log('Highest score:', score1);
} else if (score2 > score1 && score2 > score3) {
  console.log('Highest score:', score2);
} else if (score3 > score1 && score3 > score2) {
  console.log('Highest score:', score3);
} else {
  console.log('There is a tie or all scores are equal.')

}






/* -------------------------------------------- */

console.log("------------------- Challenge 3 -------------------")

/* One of the most common parts of our daily routine is checking the weather. 
   Our outfit and accessories are dependent on the temperature and conditions outside. 
   ie. We're probably not going to wear shorts out when it's snowing...


**** Challenge 3: Part 1 ****
   Write a conditional statement that checks the value of the weather variable 
   and prints out a weather report based on the current weather:
   Rainy: Bring an umbrella
   Sunny: Wear a hat and sunglasses
   Snowing: Wear gloves and a scarf */

//Here's a variable to get you started:
let weather = `rainy`;

if (weather === 'rainy') {
  console.log('Weather report: Bring an umbrella.');
} else if (weather === 'sunny') {
  console.log('Weather report: Wear a hat and sunglasses.');
} else if (weather === 'snowing') {
  console.log('Weather report: Wear gloves and a scarf.');
} else {
  console.log('Weather report: Check the weather conditions for specific recommendations.');
}












//Tip: Try changing the value of the weather variable to test your other conditions.

/**** Challenge 3: Part 2 ****
   Now that you've written conditions for specific weather forecasts, let's also add in temperature! 
   You can't dress accordingly if you only know that it's raining outside but not how cold it is!
   For example:
      If it's raining and 60 degrees, you might want to bring your umbrella and wear a light jacket.
      However, if it's raining and 30 degrees, you might want to break out a warmer jacket with your umbrella instead. 
    
   Add to your conditional statements above and modify your weather reports to also take into account the temperature. 
   Make sure to account for at least three different temperatures!
   Hint: You will need another variable to keep track of the temperature.
*/


let weathe = 'rainy';
let temperature = 60;

if (weathe === 'rainy') {
  if (temperature >= 60) {
    console.log('Weather report: Bring an umbrella and wear a light jacket.');
  } else if (temperature >= 40 && temperature < 60) {
    console.log('Weather report: Bring an umbrella and wear a warmer jacket.');
  } else {
    console.log('Weather report: Bring an umbrella and dress warmly.');
  }
} else if (weathe === 'sunny') {
  if (temperature >= 80) {
    console.log('Weather report: Wear a hat, sunglasses, and light clothing.');
  } else if (temperature >= 60 && temperature < 80) {
    console.log('Weather report: Wear a hat, sunglasses, and a light jacket.');
  } else {
    console.log('Weather report: Wear a hat, sunglasses, and dress warmly.');
  }
} else if (weathe === 'snowing') {
  if (temperature >= 32) {
    console.log('Weather report: Wear gloves, a scarf, and a warm coat.');
  } else if (temperature >= 20 && temperature < 32) {
    console.log('Weather report: Wear gloves, a scarf, and a heavier coat.');
  } else {
    console.log('Weather report: Wear gloves, a scarf, and dress warmly.');
  }
} else {
  console.log('Weather report: Check the weather conditions for specific recommendations.');
}









/* -------------------------------------------- */

console.log("------------------- Challenge 4 -------------------")

/* Prompt the user to enter the day of the week (1-7 representing Monday - Sunday)
    Write a set of conditionals that will take a number from 1 to 7 
    and print out the corresponding day of the week. 
    Make sure to add a statement that accounts of any numbers out of range! */


    const read = require('readline-sync');

    // Prompt the user to enter the day of the week
    // const numString = '42';
    // const parsedInt = parseInt(numString);

// console.log(parsedInt); // Output: 42

    const dayNumber = parseInt(read.question('Enter a number from 1 to 7 representing the day of the week: '));
    
    // Check the day number and print the corresponding day of the week
    if (dayNumber === 1) {
      console.log('The day is Monday.');
    } else if (dayNumber === 2) {
      console.log('The day is Tuesday.');
    } else if (dayNumber === 3) {
      console.log('The day is Wednesday.');
    } else if (dayNumber === 4) {
      console.log('The day is Thursday.');
    } else if (dayNumber === 5) {
      console.log('The day is Friday.');
    } else if (dayNumber === 6) {
      console.log('The day is Saturday.');
    } else if (dayNumber === 7) {
      console.log('The day is Sunday.');
    } else {
      console.log('Invalid input. Please enter a number from 1 to 7 representing the day of the week.');
    }
    








/* -------------------------------------------- */

console.log("------------------- Challenge 1 -------------------")

/* A leap year is a calendar year that contains an additional day added 
    to keep the calendar year synchronized with the astronomical year or seasonal year.
    To calculate if a specific year is/was a leap year, you can follow the following steps:
      1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
      2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
      3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
      4. The year is a leap year (it has 366 days).
      5. The year is not a leap year (it has 365 days).

  Those are a lot of conditions...

  Your challenge is to translate the steps above into conditionals which will evaluate if the 
  year stored in a variable is/was a leap year.*/


  let year = 2003;

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log(year + ' is a leap year.');
      } else {
        console.log(year + ' is not a leap year.');
      }
    } else {
      console.log(year + ' is a leap year.');
    }
  } else {
    console.log(year + ' is not a leap year.');
  }
  




