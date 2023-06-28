/**
 * VARIABLES:
 * 
 * 0: Variables are name containers for datatypes in Javascript. They are used to store and manipulate data. Variables can
 *  store various types of data, such as numbers, strings, Boolean values, arrays, objects, and more. 
 *
 * 1: Declaration and assignment
 * To declare variables, first use the var keyword, followed by the name to be given to the variable. At this point, the
 * variable is declared, but not yet assigned or initialized. */ 
 var nameFirst;
 console.log(nameFirst); //will print undefined to the console
/*
 * 2: Var, let, and const
 * Var was traditionally used to declare variables in Javascript. Variables declared with var are function scoped, meaning
 * they are accessible within the function in which they are declared or globally if declared outside of any function. 
 * However, they are not block-scoped, which means they are accessible outside of conditional statements or loops.
 * 
 * Let is used to declare a block local scope variable, which is only accessible in a block of code. This provides more
 * predictable behavior and is the preferred way to declare variables in Javascript.
 * 
 * Constants are created using the key word const and must be assigned a value immediately.
 * 
 * 3: Hoisting:
 * 
 * 
 */