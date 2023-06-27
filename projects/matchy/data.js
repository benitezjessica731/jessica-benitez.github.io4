/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `animal` and assign it to an empty object
var animal = {};
//Using **dot notation** give `animal` a **property** named `species` with a value of any animal species
animal.species = "dog";
//Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name
animal["name"] = "Bruce";
//Using either notation, give `animal` a **property** called `noises` with a value of empty array
animal.noises = [];
//Print your `animal` Object to the console by adding, `console.log(animal);`
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `noises` and assign it to an empty array
var noises = [];
//Using **bracket notation** give `noises` it's first element
noises[0] = "Bark";
//Using an array function add another noise to the end of `noises`
noises.push("Growl");
//Add an element to `noises` using this function
noises.unshift("Whimper");
//Using **bracket syntax** again, add another element to the end of `noises`
noises[noises.length] = "Fart";
//`console.log` the length of `noises`
console.log(noises.length);
//`console.log` the last element in `noises` again without hard coding the index
console.log(noises[noises.length - 1]);
//`console.log` the whole array
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array
animal["noises"] = noises;
//Using any syntax add another noise to the `noises` property on `animal`
animal.noises[noises.length] = "Ruff";
//`console.log` `animal`
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `animals` and assign it to an empty array
var animals = [];
//`push` our `animal` that we created to `animals`
animals.push(animal);
//`console.log` `animals`
console.log(animals);
//Create a variable called `duck` and assign it to the data
var duck = {
  species: "duck",
  name: "Jerome",
  noises: ["quack", "honk", "sneeze", "whoosh"]
};
//`push` `duck` to `animals`
animals.push(duck);
//`console.log` `animals`
console.log(animals);
//Create two more animal objects each with a species, a name, and at least two sounds sounds
var cat = {
  species: "feline",
  name: "Luna",
  noises: ["meow", "purr"]
};
var snake = {
  species: "reptile",
  name: "Snakey",
  noises: ["hiss", "rattle"]
};
//add each one of them to `animals.
animals.push(cat);
//add each one of them to `animals.
animals.push(snake);
//`console.log` `animals`
console.log(animals);
//`console.log` the length of `animals`
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Choose a data structure for this **list** of friends
//array
//Write a comment in your code that explains why you chose this data structure
//Choosing to use an array because it is a list of data, not value/key pairs necessary for an object.
//Create a variable called `friends` and assign it to the data structure that you chose
var friends = [];
//Write a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input array
function getRandom(array) {
  return Math.floor(Math.random() * array.length);
}
//Using a random index from this function that you just created, get a random animal and add its `name` to `friends`
var randomIndex = getRandom(animals);
var randomAnimal = animals[randomIndex];
//check if the random animal already has a friends array
if (!randomAnimal.friends) {
  randomAnimal.friends = [];
}
//use push method to add random animal's name to friends array
friends.push(randomAnimal.name);

//log the friends array
console.log(friends);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}