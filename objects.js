/****************************************************************************
 *                                                                  
 *  Team Edge objects: OBJECTS CHALLENGES 
 * 
 *  For this activity, you will be building an object and with properties
 *  and methods. You will access the properties, set new values, and use
 *  the methods to change your object state. What object? Ask your coach.
 * 
 *  1. DEFINE: Make an object and set its properties, logging changes in between.
 *  2. MODIFY: Add 2 new properties and assing values. Change existing values,
 *     including adding or updating values inside arrays
 *  3. METHODS: Now its time to make some methods. Then can simply make a change
 *     to your values, like a boolean, or they can console log something about
 *     the object. Nothing fancy, unless you fancy it.
 *  4. LITERALLY: Use string literals to put it all together in one statement.
 * 
 * *************************************************************************/
// 1. DEFINE: Make an object and set its properties, logging changes in between.
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2021,
    color: "Blue",
  };
  
  console.log(car); // Output: { brand: "Toyota", model: "Camry", year: 2021, color: "Blue" }
  
  // 2. MODIFY: Add 2 new properties and assign values. Change existing values, including adding or updating values inside arrays.
  car.price = 25000;
  car.features = ["GPS", "Bluetooth", "Backup Camera"];
  car.year = 2022;
  car.color = "Silver";
  
  console.log(car); // Output: { brand: "Toyota", model: "Camry", year: 2022, color: "Silver", price: 25000, features: ["GPS", "Bluetooth", "Backup Camera"] }
  
  // 3. METHODS: Add methods to the car object.
  car.startEngine = function() {
    console.log("The car engine has started.");
  };
  
  car.turnOffEngine = function() {
    console.log("The car engine has turned off.");
  };
  
  // 4. LITERALLY: Use string literals to put it all together in one statement.
  console.log(`I have a ${car.color} ${car.brand} ${car.model} (${car.year}). It has the following features: ${car.features.join(", ")}.`);
  
  // Call the methods
  car.startEngine(); // Output: The car engine has started.
  car.turnOffEngine(); // Output: The car engine has turned off.
  
console.log("------------------- CHALLENGE 1 : DEFINE    -------------------")

//Below is a simple example of an object implementaion. 
//-->TODO: Add at least 3 comments to the object below to demonstrate you understand its usage

let object = {
    name: "box", // Comment 1: The 'name' property stores the name of the object, in this case, it is "box".
    isEmpty: true, // Comment 2: The 'isEmpty' property indicates whether the box is empty or not. It is initially set to 'true'.

    fillMe(){ // Comment 3: The 'fillMe' method is used to fill the box by setting the 'isEmpty' property to 'false'.
        this.isEmpty = false;
    },
    emptyMe(){ // Comment 4: The 'emptyMe' method is used to empty the box by setting the 'isEmpty' property to 'true'.
        this.isEmpty = true;
    }
}

// Working with the object:

object.length = 12; // Adding the 'length' property to the object and assigning it a value of 12.
object.width = 8; // Adding the 'width' property to the object and assigning it a value of 8.
object.contents = ["thing 1", "thing 2", "thing 3"]; // Adding the 'contents' property to the object and assigning it an array of items.

console.log(`${object.name} is ${object.length} x ${object.width}`); // Output: "box is 12 x 8"

object.contents.push("thing 4"); // Adding "thing 4" to the 'contents' array.

console.log(`${object.name} has ${object.contents}`); // Output: "box has thing 1,thing 2,thing 3,thing 4"

console.log(object); // Output: The entire object with all its properties and values.

 

//-->TODO: Declare a new object and set at least 4 properties to it including: string, boolean, number, array

//*********************************  MY OBJECT *************************** */


let person = {
    name: "John",
    isStudent: true,
    age: 25,
    hobbies: ["reading", "playing guitar", "running"],
  };
  
 
  



//************************************************************************* */



console.log("------------------- CHALLENGE 2 : MODIFY   -------------------")

//-->TODO: Log your object you created above

console.log(person);

//-->TODO: Update the object you just created  by adding new properties and values, including array elements, in this section.
person.city = "New York";
person.isEmployed = false;
person.hobbies.push("painting");

console.log(person);

  

//-->TODO: Log your object again and observe changes


console.log("------------------- CHALLENGE 3 : METHOD   -------------------")

//-->TODO: Add at least two methods (object functions) to your object defined in Challenge 1 and invoke them here.
//          Make your methods update your variables, or add a random number to an array, etc.

person.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
  };
  
  person.birthday = function() {
    this.age++;
    console.log(`Happy birthday! Now I am ${this.age} years old.`);
  };
  
  person.greet(); // Output: "Hello, my name is John."
  person.birthday(); // Output: "Happy birthday! Now I am 26 years old."
  
  console.log(person);
  
console.log("------------------- CHALLENGE 4 : LITERALLY   -------------------")

//-->TODO: Put it all together using a string literal to tell the story of your object!

console.log(`${person.name} is a ${person.age}-year-old ${person.isStudent ? "student" : "individual"} from ${person.city}.`);

person.greet();

console.log(`${person.name} enjoys ${person.hobbies.join(", ")} as their hobbies.`);

person.birthday();

console.log(`After their birthday, ${person.name} is now ${person.age} years old.`);

console.log(person);
