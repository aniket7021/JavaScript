// "use strict"    // Treat all JavaScript code as newer version

// There is a difference in the JavaScript code written today and how it was written 8 yo 10 years back bcz at that time there was no any concept of objects and classes, modules, arrow function. It is not necessary to use "use strict".

// alert(3+4)  // This would have been executed in our developer console in browser but we are using node js which has a different syntax to use alert.

// console.log(3 + 3) console.log("Aniket") 
// This throws an error as there is no separation bw the two statements.

// console.log(3 + 3); console.log("Aniket")
// The above does not throws an error as there is a semocolon which acts as the separartor bw the two consoles but this is also not a good practice as it reduces the code readability so it is always recommended to use new lines to separate two statements

/* Prefer not to use var because of issue in block scope and functional scope */

// We can also reserve the memory of a variable without writing anything just like 
// accountCity = "Ranchi" but is not suggested to use.

// If we declare a variable in JavaScript and do not assign any value then it is considered as undefined value.

// We can refer two documentation, one is mdn docs by developer.mozilla.org and another is tc39.es by ECMAScript where the standards of JavaScript are written(like how the input and the output should be taken).

let name = "Aniket"
let age = 22
let isLoggedIn = true

/*
    Different types of datatypes:-
    number - range is -2^53 + 1 to 2^53 - 1
    bigint - for number bigger than the above range
    string - written inside "" or ''
    bool - true or false    
    null - a standalone value, which represents absense of a value intentionally
    undefined - when a variable is declared but its value is not asigned
    symbol - used to determine uniqueness (mostly we will use it in react)
*/

// console.log(typeof undefined)
// undefined is a value as well as a type(i.e, the the value undefined has a datatype undefined)

// But if we do console.log(typeof null), then logically the value null should have the type null as well but we get object as its type which is a historic bug in the JavaScript.



