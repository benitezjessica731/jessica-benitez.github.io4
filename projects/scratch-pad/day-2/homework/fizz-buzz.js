// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //create a for loop to print out nubers 1-100
    for (let i = 1; i < 101; i++) {
        //create if statement to determine if i is divisible by 15
        if (i % 15 === 0) {
            //if true, log fizzbuzz to the console
            console.log("FizzBuzz");
        //create else if statement to determine if i is divisible by 3
        } else if (i % 3 === 0) {
            //if true, log fizz to the console
            console.log("Fizz");
        //create else if statement to determine if i is divisible by 5
        } else if (i % 5 === 0) {
            //if true, log buzz to the console
            console.log("Buzz")
        } else {
            //all else log i to the console
          console.log(i);
        }
      }

      
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}