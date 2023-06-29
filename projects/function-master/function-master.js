//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //take an object and return its values in an array
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //take an object and return all its keys in a string each separated with a space
    return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //declare an empty array to store string values
    storArr = [];
    //create for in loop to iterate over object
    for (let key in object) {
        //create if statement to determine if value is a typeof string
        if (typeof object[key] === "string") {
            //if true, push the value onto the storage array
            storArr.push(object[key]) 
        }
    } //return the storage array joined by spaces
    return storArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //create an if statement to determine if collection is an array
    if (Array.isArray(collection)) {
        //if true, return array as a string
        return "array";
    //create an else if statement to determine if collection is an object and not equal to null
    } else if (typeof collection === "object" && collection !== null) {
        //if true, return object as a string
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //take a string of one word, and return the word with its first letter capitalized 
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //first split the string of words from the space
    let words = string.split(" ");
    //create for loop to iterate over the words
    for (let i = 0; i < words.length; i++) {
        //capitalize each word at each index and concatenate the rest of the string
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    //return the words joined back together with a space
    return words.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name property and return 'Welcome <Name>!' 
function welcomeMessage(object) {
    //let capitalizedname equal to the object name first letter uppercased and the rest lowercased
    let capitalizedName = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    //return welcome name !
    return "Welcome " + capitalizedName + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //let capitalizedname equal to the object name first letter uppercased and the rest lowercased
    let capitalizedName = object.name.charAt(0).toUpperCase() + object.name.slice(1);
    //let capitalizedspecies equal the species name first letter capitalized and the rest lowercased
    let capitalizedSpecies = object.species.charAt(0).toUpperCase() + object.species.slice(1);
    //return name is a species
    return capitalizedName + " is a " + capitalizedSpecies;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//maybeNoises() : Should take an object, if this object has a noises array 
//return them as a string separated by a space, if there are no noises return 'there are no noises' 
function maybeNoises(object) {
    //create if statement to determine if object has a noises array
    if (object.noises && object.noises.length > 0) {
        //if true return them as a string seperated by a space
        return object.noises.join(" ");
    } 
    //else return there are no noises
    return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
function hasWord(string, word) {
    //let an empty array equal to the string split by the space
    let storArr = string.split(" ")
    //use includes method to see if storarr has word
    if (storArr.includes(word)) {
        //if true, return true
        return true;
    //else return false
    } return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//addFriend() : Should take a name and an object and add the name to the object's friends array then return the object
function addFriend (name, object) {
    //push name onto friends array in object
    object.friends.push(name);
    //return object
    return object;
    
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
function isFriend(name, object) {
    //create if statement to determine if friends exists and is an array
    if (object && object.friends && Array.isArray(object.friends)) {
        //if true, use the includes method to see if name is in the friends array
        return object.friends.includes(name);
      } //if not, return false
      return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with 
function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}