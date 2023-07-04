'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection.
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: Takes in a value and returns it unchanged.
 * 
 * @param {*} value: Function takes in any input value.
 * @returns {*} value: Function returns input value unchanged.
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeof: Takes in a value and returns the type of value as a string.
 * 
 * @param {*} value: Function takes in any input value.
 * @returns {*} string: Function returns the type of input value as a string.
 */
function typeOf(value) {
    if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null";
    } else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Takes in an array and a number; based on the conditions, returns either an empty array, the first element
 * in array, or the first number items of array.  
 *
 * @param {*} array: Function takes in array.
 * @param {*} number: Function takes in a number as a second argument.
 * @returns {*} 
 */
function first(array, number) {
    if (!Array.isArray(array) || number <= 0) {
        return [];
    } else if (typeof number !== "number") {
        return array[0];
    } else if (number > array.length) {
        return array;
    }
    return array.slice(0, number);
}
module.exports.first = first;