'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Takes in a value and returns it unchanged.
 * 
 * @param {value} : Function takes in any input value.
 * @returns {value} : Function returns input value unchanged.
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeof: Takes in a value and returns the type of value as a string.
 * 
 * @param {value} : Function takes in any input value.
 * @returns {string} : Function returns the type of input value as a string.
 */
function typeOf(value) {
    if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null";
    } else {
        return typeof value;
    }
};
module.exports.typeOf = typeOf;

/**
 * first: function gives the first value of the collection. Simply means it returns the first value or the 
 * first method returns the first element in the collection that passes a given condition. 
 *
 * @param {array}: Function takes in arra as the first perameter.
 * @param {number}: Function takes in a number as a second parameter.
 * @returns {array}: Dependent on the conditions, returns either an empty array, the first element in array, or the 
 * first number items of array.
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
};
module.exports.first = first;

/**
 * last: This function returns the last item in the array.
 * 
 * @param {array}: Function takes in an array as the first parameter.
 * @param {number}: Function takes in a number as the second parameter.
 * @returns {*} : Dependant on the conditions, will return either an empty array, the last element in array, or 
 * the last number items of array.
 * 
 */
function last(array, number) {
    if (!Array.isArray(array) || number <= 0) {
        return [];
    } else if (typeof number !== "number") {
        return array[array.length - 1];
    } else if (number > array.length) {
        return array;
    }
    return array.slice(-number);
};
module.exports.last = last;

/**
 * indexOf: function returns the first index at which a given element can be found 
 * in the array, or -1 if it is not present.
 * 
 * @param {array}: Function takes in an array as its first parameter.
 * @param {value}: Function takes in a value as its second parameter.
 * @returns {i} : Function returns the first index at which a given element is found
 * @returns {-1}: Function returns -1 if element is not found in array.
 * 
 */
function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
};
module.exports.indexOf = indexOf;

/**
 * contains: The contains() method is used to determines whether the collection contains a given item or not
 * 
 * @param {Array}: Function takes in an array as its first parameter.
 * @param {value}: Function takes in a value as its first parameter.
 * @returns {boolean}: Function returns true or false.
 * 
 */
function contains(array, value){
    return array.includes(value) ? true: false;
};
module.exports.contains = contains;

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
};
module.exports.each = each;

/**
 * unique: Function used to return all of the unique values a collection.
 * 
 * @param {array}: Function takes in one parameter, an array.
 * @returns {array}: Function returns a new array with all of the duplicates removed.
 * 
 */
function unique(array){
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (_.indexOf(newArr, array[i]) === -1) {
            newArr.push(array[i]);
        }
    }
    return newArr;
};
module.exports.unique = unique;

/**
 * filter: A function that creates a shallow copy of a portion of a given array, 
 * filtered down to just the elements from the given array that pass the test implemented 
 * by the provided function.
 * 
 * @param {array} : Function takes in an array as its first parameter.
 * @param {func} action : Function takes in a function as its second parameter.
 * @returns {array} : Function returns a new array for which calling func returned true.
 * 
 */
function filter(array, func) {
    let storArr = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            storArr.push(array[i]);
        }
    }
    return storArr;
};
module.exports.filter = filter;

/**
 * reject: Function that is the inverse of filter, returns an array for which calling func 
 * returns false, instead of true.
 * 
 * @param {array} array: Function takes in an array as its first argument.
 * @param {func} action: Function takes in a function as its second argument.
 * @returns {array} array: Function returns an array for which calling func return false.
 * 
 */
function reject(array, func){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};
module.exports.reject = reject;

/**
 * partition: Function that is used to separate the collection elements according 
 * to the given callback function.
 * 
 * @param {array} : Function takes in an array as its first parameter.
 * @param {func} action: Function takes in func as a second parameter.
 * @returns {array} : Function returns an array with two subarrays, one for which calling
 * func returns something truthy and one for which calling the func returns something falsey.
 * 
 */
function partition(array, func){
    let truthy = [];
    let falsey = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            truthy.push(array[i]);
        } else if (func(array[i], i, array) === false) {
            falsey.push(array[i]);
        }
    }
    return [truthy, falsey];
};
module.exports.partition = partition;

/**
 * map: Function that creates a new array populated with the results of calling a provided 
 * function on every element in the calling array.
 * 
 * @param {array or object} collection: Function takes in a collection as its first parameter.
 * @param {func} action: Function takes in a function as its second parameter.
 * @returns {array} : Function returns a new array with each element being the result of the callback function.
 * 
 */
function map(array, func){
    let newArr = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < array.length; i++){
            newArr.push(func(collection[i], i, collection));
        }
    } else if (typeof collection === "object"){
        for (let key in collection) {
            newArr.push(func(collection[key], key, collection));
        }
    }
    return newArr;
};
module.exports.map = map;

/**
 * pluck: Function used to return all the values from the given key.
 * 
 * @param {array} : Function takes in an array of objects as its first parameter.
 * @param {property} : Function takes in the object's key as its second parameter.
 * @returns {array} : Function returns an array containing the value of property for every element in array.
 * 
 */
function pluck(array, property){
    return _.map(array, function(obj) {
        return obj[property];
    });
};
module.exports.pluck = pluck;

/**
 * every: Function that tests whether all elements in the array pass the test implemented
 * by the provided function.
 * 
 * @param {array or object} collection: Function takes in a collection as its first argument.
 * @param {func} action: Function takes in a func as its second parameter.
 * @returns {booean} : Function returns a true or false value.
 * 
 */
function every(collection, func){
        if (Array.isArray(collection)) {
            if (func === undefined) {
                for (let i = 0; i < collection.length; i++) {
                    if (!collection[i]){
                        return false;
                    }
                }
            } else {
                for (let i = 0; i < collection.length; i++) {
                    if (!func(collection[i], i, collection)) {
                        return false;
                    }
                }
            }
        } else {
            if (func === undefined) {
                for (let key in collection){
                    if (!collection[key])
                        return false;
                }
            } else {
                for (let key in collection){
                    if (!collection[key])
                        return false;
                }
            }
        }
        return true;
};
module.exports.every = every;

/**
 * some: Function tests whether at least one element in the array passes the test 
 * implemented by the provided function.
 * 
 * @param {array or object} collection: Function takes in a collection as its first argument.
 * @param {func} action: Function takes in a function as its second parameter.
 * @returns {boolean} : Function returns true or false based on conditions.
 * 
 */
function some(collection, func){
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (func !== undefined) {
               if (func(collection[i], i, collection)) {
                return true;
               } 
            } else if (collection[i]) {
                return true;
            }
    }
 } else if (typeof collection === "object") {
        for (let key in collection) {
            if (collection[key]) {
                return true;
            }
        }
    return false;
    }
};
module.exports.some = some;

/**
 * reduce: Function executes a user-supplied "reducer" callback function on each element of the array,
 * in order, passing in the return value from the calculation on the preceding element.
 * 
 * @param {array} : Function takes in an array as its first parameter.
 * @param {func} : Function takes in a function as its second parameter.
 * @param {seed} : Function takes in a seed as its third parameter.
 * @returns {value} : Function returns the value that results from running the "reducer" callback function 
 * to completion over the entire array.
 * 
 */
function reduce(array, func, seed){
    let result;
    if (seed === undefined) {
        result = array[0];
        for (let i = 1; i < array.length; i++) {
            result = func(result, array[i], i, array);
        }
    } else {
        result = seed;
        for (let i = 0; i < array.length; i++){
            result = func(result, array[i], i, array);
        }
    }
    return result;
};
module.exports.reduce = reduce;

/**
 * extend: Function copies all properties from the source to the destination object.
 * 
 * @param {object} : Function takes in an object as its first parameter.
 * @param {object} : Function takes in an object as its second parameter.
 * @param {object} : Function takes in a possible third parameter of multiple objects.
 * @returns {object} : Function returns the first object argument updated with the other object arguments.
 * 
 */
function extend(object1, object2, ...moreObjects){
    for (let key in object2) {
        object1[key] = object2[key];
    }
    for (let i = 0; i < moreObjects.length; i++) {
          for (let key in moreObjects[i]) {
            object1[key] = moreObjects[i][key];
          }
        }
    return object1;
};
module.exports.extend = extend;