'use strict';
// Javascript is a high-level, prototype-based object-oriented, multi-paradigm, interpreted or just in time compiled, dynamic, single-threaded, garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model.

/*Multi-Paradigm 
- Procedural Programming
- Objected-Oriented Programming
- Functional Programming.
JS does all the above. Paradigm could also be imperative or declarative.
Almost everything in JS is an Object except for primitive values (e.g strings, numbers)

// FIRST-CLASS FUNCTIONS
Functions are simply treated as variables. They can be passed into other functions, and return them from functions.

// DYNAMIC
JS is dynamically typed, you do not have to assign data type to variables, rather they become known during code execution.

*/

// function calcAge(birthYear) {
//     const age = 2022 - birthYear;
//     console.log(firstName);
//     return age;
// }

// const firstName = 'Abdurrahman'
// calcAge(2000);

// Const and let variables are BLOCK-SCOPED, hence, they are only accessible inside of the block they were created. Var variables are function-scoped. Functions in ES6 are block-scoped iff the strict mode is being used.

// HOISTING AND TDZ
// Hoisting basically, is the ability for some types of variables to be accessible in the code before they are actually declared. Hoisting doesnt work for let and const variables. They are literally in the TDZ before being declared. For let and const, the TDZ begins from the beginning of the current scope up until the line in which they are actually defined.

// VARIABLES
//console.log(me);
// console.log(job);
// console.log(year);

var me = 'Abdurrahman';
let job = "teacher"
const year = 2000;

// Functions
//console.log(addDecl(4,6)); //This function is hoisted and can be accessed before its declaration.
//console.log(addExpr(4, 6)); // This function expression is not hoisted in practice, as function expression with const/let cannot be initialized before declaration. They will be in the TDZ
//console.log(addArrow(4,6)); // / This arrow function is not hoisted in practice, as arrow functions  with const/let cannot be initialized before declaration. They will be in the TDZ

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

// Example
if (!numProds)  deleteCart();

var numProds = 10;

function deleteCart() {
   // console.log('All products deleted!');
}

// BEST PRACTCES
// Do not use var to declare variables. Use const instead, and let when a variable will need to be changed. In addition, to write clean code, declare all your variables at the top of each scope.
// Finally, always declare all your functions first, and use them only after declaration. 


// THE "THIS" KEYWORD IN PRACTICE
// 4 basic ways to call functions

//  console.log(this); // points to the window object in the global scope.

// Simple function declaration call
function calcAge(birthYear) {
    //console.log(2037 - birthYear);
    //console.log(this); // logs undefined. For all simple function calls, only in strict mode. In non-strict mode however, it logs the window object.
}
calcAge(2000);

// Arrow Function call 
const calcAgeArrow = (birthYear) => {
    //console.log(2037 - birthYear);
    //console.log(this); //logs the window object to the console. Arrow functions do not have "this" of their own. They only have a "lexical this" - the "this" of their surrounding function/parent function or scope.
}
calcAgeArrow(1998);

// Method call
const Abdurrahman = {
    year: 2000,
    calcAge: function () {
        //console.log(this); // logs to the console, the Abdurrahman Object. Always points to the object that is calling the method
        //console.log(2022 - this.year);
    }
}
Abdurrahman.calcAge();

const Maryam = {
    year: 2001
}
Maryam.calcAge = Abdurrahman.calcAge // This is called method borrowing

Maryam.calcAge();

// BEST PRACTICE
// Never use arrow functions as a method.

const AbdurrahmanX = {
    firstName: "Abdurrahman",
    year: 2000,
    // calcAge: () => {
    //     console.log(this) // logs window object
    //     console.log(this.firstName); // Undefined - window.firstName
    // }

    calcAge: function () {
        console.log(this); //logs Abdurrahman object.
        console.log(this.firstName);
    },

    greet: () => {
        console.log(this);
        console.log(`Hey, this is ${this.firstName}`); // Hey Undefined.
    }
}
AbdurrahmanX.calcAge()
AbdurrahmanX.greet();

// Argument keywords only exists in regular functions.


// PRIMITIVES VS OBJECTS (PRIMITIVE VS REFERENCE TYPES)
// Primitive data types are numbers, strings, boolean, undefined, etc

// HEAP - Where objects (reference types) are stored in memory.  CALL STACK - Where functions are executed.
// variables declared with the const keyword are only immutable for primitive types, not reference types.
