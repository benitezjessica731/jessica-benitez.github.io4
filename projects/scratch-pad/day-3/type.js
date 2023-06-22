// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //use the array.isarray method to determine if the value is an array
   if (Array.isArray(value)) {
    //if true, return true
    return true;
    //else
   } else {
    //else, return false
    return false;
   }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //create if statement to test if value is not an array, not null, not an instanceof date, and is an object
    if (!Array.isArray(value) && value !== null && !(value instanceof Date) && typeof value === "object") {
        //if true, return true
        return true;
        //else return false
    } else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //create if statement to determine if value is a typeof array or object, but not null and not an instanceof date
    if ((Array.isArray(value)) || (typeof value === "object") && (value !== null) && !(value instanceof Date)) {
        //if true, return true
        return true;
        //else return false
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //create if statement to determine if value is an array
    if (Array.isArray(value)) {
        //if true, return array
        return "array";
    //create if statement to determine if value is null
    } else if (value === null) {
        //if true, return null
        return "null";
    //create if statement to determine if value is an instance of date
    } else if (value instanceof Date) {
        //if true, return date
        return "date";
    //else, return the type of value
    } else {
        return typeof value;
    }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
