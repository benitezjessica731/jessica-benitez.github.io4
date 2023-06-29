/**
 * VARIABLES:
 * 
 * 0: Variables are name containers for datatypes in Javascript. They are used to store and manipulate data. Variables can
 *  store various types of data, such as numbers, strings, Boolean values, arrays, objects, and more. 
 *
 * // 1: Declaration and assignment //
 * To declare variables, first use the var keyword, followed by the name to be given to the variable. Variables are assigned
 * using camelCase, the first word starts lowercase, each following word is uppercased. */
 //Below the variable is declared, but not yet assigned or initialized
 var nameFirst;
 console.log(nameFirst); //will print undefined to the console
 //Below the variable is assigned/initialized.
 nameFirst = "Jessica";
 console.log(nameFirst); //will log Jessica to the console
/*
 * // 2: Var, let, and const //
 * // Var was traditionally used to declare variables in Javascript. Variables declared with var are function scoped, meaning
 * they are accessible within the function in which they are declared or globally if declared outside of any function. 
 * However, they are not block-scoped, which means they are accessible outside of conditional statements or loops. Variables
 * are able to be reassigned. */
var firstName = "Jessica";
firstName = "Bryan";
console.log(firstName); //will print Bryan to the console
/*
 * // Let is used to declare a block local scope variable, which is only accessible in a block of code. This provides more
 * predictable behavior and is the preferred way to declare variables in Javascript. */
let x = 1;
if (x === 1) {
    let x = 2;
    console.log(x); //2 will log to the console because of block scoping
};
console.log(x); //1 will log to the console because x = 1 is declared outside of the function
/* 
 * // Constants are created using the key word const and must be assigned a value immediately. Constants can never change, 
 * are block scoped, and are not hoisted to the top of their block scope. */
 const city; //this is not allowed and will log an error to console
 const currentCity = "Los Angeles";
 currentCity = "New Orleans"; 
 console.log(currentCity); //will print assignment error to console because const can not be reassigned
/*
 * // 3: Hoisting //
 * Before the statements of a program are executed all var and function declarations are hoisted to the top of the program.
 * Only the declarations are hoisted to the top, not the assignemts. */
console.log(x); //this will print undefined because only the declaration of x is hoisted to the top, not the assignment
var x = 10;
console.log(x); //this will print 10
//let and const values are not hoisted to the top and cannot be referenced before they are declared
console.log(y); //will log a reference error to console
console.log(nameFirst); //will log a reference error to console
let y = 10;
const nameFirst = "Jessica";