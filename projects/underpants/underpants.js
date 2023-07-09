// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    //create if statement to determine if value is an array
    if (Array.isArray(value)) {
        //return array as a string
        return "array";
    //create else if statement to determine if value is equal to null
    } else if (value === null) {
        //return null as a string
        return "null";
    //else return the type of value
    } else {
        return typeof value;
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
    //create if statement to determine if array is an array or if number is less than or equal to 0
    if (!Array.isArray(array) || number <= 0) {
        //if true, return array
        return [];
    //create else if statement to determine if number is not a type of number
    } else if (typeof number !== "number") {
        //if true, return the first element in array
        return array[0];
    //create else if statement to determine if number > the length of the array
    } else if (number > array.length) {
        //if true, return array
        return array;
    }
    //return the first number items of array
    return array.slice(0, number);
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number) {
    //create if statement to determine if array is an array or if number is less than or equal to 0
    if (!Array.isArray(array) || number <= 0) {
        //if true, return array
        return [];
    //create else if statement to determine if number is not a type of number
    } else if (typeof number !== "number") {
        //if true, return the last element in array
        return array[array.length - 1];
    //create else if statement to determine if number > the length of the array
    } else if (number > array.length) {
        //if true, return array
        return array;
    }
    //return the last number items of array
    return array.slice(-number);
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value) {
    //create a for loop to iterate over array
    for (let i = 0; i < array.length; i++) {
        //create if statement to find an occurance of value
        if (array[i] === value) {
            //if true, return the index of the array
            return i;
        }
    }
    //else return -1
     return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value) {
    return array.includes(value) ? true: false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function (collection, func) {
    //if collection is an array
    if (Array.isArray(collection)) {
        //create for loop to iterate over collection
        for (let i = 0; i < collection.length; i++) {
            //call the function
            func(collection[i], i, collection);
        }
    //else collection is an object
    } else if (typeof collection === "object") {
        //create for in loop
        for (let key in collection) {
            //call the function
            func(collection[key], key, collection);
        }

    }
    
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array) {
    //declare an empty array
    let newArr = [];
    //create for loop to iterate over array
    for (let i = 0; i < array.length; i++) {
        //create if statement and use indexof test if value is unique
        if (_.indexOf(newArr, array[i]) === -1){
            //if true, push the value on the new array
            newArr.push(array[i]);
        }
    }
    //return the new array
    return newArr;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func) {
    //declare an empty array
    let storArr = [];
    //create for loop to iterate over
    for (let i = 0; i < array.length; i++) {
        //create if statement to determine if calling the function is true
       if (func(array[i], i, array) === true) {
        //if true, push the element onto the storage array
        storArr.push(array[i]);
       }
    }
    //return the storage array
    return storArr;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func) {
    //declare an empty array
    let newArray = [];
    //create a for loop to iterate over
    for (let i = 0; i < array.length; i++) {
        //create if statment to for which calling function returned false
        if (func(array[i], i, array) === false) {
            //push the new array of elements
            newArray.push(array[i]);
        }
    }
    //return the new array
    return newArray;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func) {
    //declare an empty array truthy
    let truthy = [];
    //declare an empty array falsey
    let falsey = [];
    //create a for loop to iterate over array
    for (let i = 0; i < array.length; i++){
        //create if statement for which calling the function returned true
        if (func(array[i], i, array) === true) {
            //if true, push the element onto the truthy array
            truthy.push(array[i]);
        //else if for which calling the function returned false
        } else if (func(array[i], i, array) === false) {
            //if true, push the element onto the falsey array
            falsey.push(array[i]);
        }
    }
    //return the two subarrays into one array
    return [truthy, falsey];
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func) {
    //declare a new array
    let newArr = [];
    //if collection is an array
    if (Array.isArray(collection)) {
        //create for loop to iterate over collection
        for (let i = 0; i < collection.length; i++) {
            //call the function and push onto new array
            newArr.push(func(collection[i], i, collection));
        }
    //else collection is an object
    } else if (typeof collection === "object") {
        //create for in loop
        for (let key in collection) {
            //call the function and push onto new array
            newArr.push(func(collection[key], key, collection));
        }
    }
    //return newArr
    return newArr;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array, property){
    return _.map(array, function(obj) {
        return obj[property];
    });
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*   _.every([1, 2, 3]) => true
*   _.every([1, null, 3]) => false
*/
_.every = function(collection, func) {
    //create if statement to determine if collection is an array
    if (Array.isArray(collection)) {
        //determine if function wasn't provided
        if (func === undefined) {
            //create for loop to iterate over collection
            for (let i = 0; i < collection.length; i++) {
                //if the return value of calling function for every element is falsey
                if (!collection[i]){
                    //return false
                    return false;
                }
            }
        } else { //else it was
            //create for loop to iterate over collection
            for (let i = 0; i < collection.length; i++) {
                //if result of invoking is falsey
                if (!func(collection[i], i, collection)) {
                    //return false
                    return false;
                }
            }
        }
    //else it is an object
    } else {
        //determine if function wasn't provided
        if (func === undefined) {
            //create for in loop to iterate over collection
            for (let key in collection){
                //if the return value of calling function for every element is falsey
                if (!collection[key])
                //return false
                    return false;
            }
        } else { //else it was
            //create for in loop to iterate over collection
            for (let key in collection){
                //if the return value of calling function for every element is truthy
                if (collection[key])
                    //return true
                    return true;
            }
        }

    } // all else return true
    return true;
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
    //create if statement to determine if collection is an array
    if (Array.isArray(collection)) {
        //create for loop to iterate over collection
        for (let i = 0; i < collection.length; i++) {
            //if func is provided
            if (func !== undefined) {
                //if calling the func is truthy
               if (func(collection[i], i, collection)) {
                //if true, return true
                return true;
               } 
               //else if calling the function is true for at least one element
            } else if (collection[i]) {
                //if true, return true
                return true;
            }
    }
    //else if collection is an object
 } else if (typeof collection === "object") {
        //use for loop to iterate over collection
        for (let key in collection) {
            //if calling the function returns true for at least one element
            if (collection[key]) {
                //if true, return true
                return true;
            }
        }
    } //return false
    return false;
}

/**
 map => calls a function on each value and psuhes return to output array
 filter => tests each value with a function and pushes the values that return true to output array
 reduce => iterates through a collection, passes on each value to a callback to "accumulate" a single return value
 forEach => calls a function on each value on an array (no return)
 */

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
    //declare result
    let result;
    //create if statement to determine if seed was defined
    if (seed === undefined) {
        //if true, set result to the first element of array
        result = array[0];
        //create for loop to iterate over array
        for (let i = 1; i < array.length; i++) {
            //reassign result to result of invoking callback function
            result = func(result, array[i], i, array);
        }
    } else {
        //set result equal to seed
        result = seed;
        //create for loop to iterate over array
        for (let i = 0; i < array.length; i++){
            //reassign result to result of invoking callback function
            result = func(result, array[i], i, array);
            
        }
    }
    //return result
    return result;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(object1, object2, ...moreObjects){
    //create for in loop to iterate over objects
    for (let key in object2) {
        //copy properties from obj2 to obj1
        object1[key] = object2[key];
    }
    //create for loop to iterate over moreobjects
    for (let i = 0; i < moreObjects.length; i++) {
        //create for in loop to iterate over more objects properties
          for (let key in moreObjects[i]) {
            //copy more object properties to object1
            object1[key] = moreObjects[i][key];
          }
        }
    //return the updated object
    return object1;
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
