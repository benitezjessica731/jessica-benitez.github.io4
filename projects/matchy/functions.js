/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Implement a function declaration called `search`
//Takes a paramater representing an Array of `animals`
//Takes a paramater representing a String, the name of an animal on which to perform a search
//Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
function search(animals, name){
    //create for loop to iterate over animals array
    for (let i = 0; i < animals.length; i++) {
        //create if statement to determine if that animal exists on the array
        if (animals[i].name === name){
            //if true, return the animal
            return animals[i];
        }
     //else, return null
    } return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Write a function declaration called `replace` with a signature of `replace(animals, name, replacement)
//Takes 3 parameters, an Array of animals, a String representing  the name of an animal on which to perform 
//a search, and an Object that represents the replacement animal.
//If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object
function replace(animals, name, replacement) {
    //create for loop to iterate over animals array
    for (let i = 0; i < animals.length; i++) {
        //create if statement to determine if that animal exists on the array
        if (animals[i].name === name) {
            //if true, replace its entire object with the replacement object
            animals[i] = replacement;
            //return
            return;
        }
}
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Write a function declaration called `remove` with a signature of `remove(animals, name)` that
//Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search
//If an animal with that name exists within the `animals` Array, remove it
function remove(animals, name) {
    ////create for loop to iterate over animals array
    for (let i = 0; i < animals.length; i++) {
        //create if statement to determine if that animal exists on the array
        if (animals[i].name === name) {
            //if true, use splice method to remove element
            animals.splice(i, 1);
            return;
        }
    } 
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Write a function declaration called `add` with a signature of `add(animals, animal)
//Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added
//Checks that the animal Object has a `name` property with a length > 0
//Checks that the animal Object has a `species` property with a length > 0
//Has a **unique** name, meaning no other animals have that name
//Adds this new Object to the `animals` Array, **only** if all the other conditions pass
function add(animals, animal) {
    if ((!animal.name.length > 0) && (!animals.species.length > 0)) {
      return;
    }
    let unique = search(animals, animal.name)
    if (unique !== null) {
        return;
    }
  
    animals.push(animal);
  }

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
