// If we go to the official documentation of JavaScript, then JS datatypes are broadly classified into two categories - Primitive and Non Primitive. This classificaton is based on the difference on how the data is being stored and retrieved from the memory.

// Primitive data types like int, float, char, etc., are stored directly in memory. The memory location contains the actual value. String, Number, Boolean, null, undefined, Symbol, BigInt(for storing big values) comes under Primitive data types.

// Non-primitive data types (also called Reference Data types)like arrays, objects, or strings are stored indirectly in memory. Instead of storing the actual value, the variable contains a reference (or pointer) to the memory location where the value is stored. Array, Objects, Strings, Functions.

// In JavaScript, functions are considered first-class citizens, which means:

// They can be stored in variables.
// They can be passed as arguments to other functions.
// They can be returned from other functions.
// This makes functions not just "executable blocks of code" but also values, similar to objects or strings. which is why it also comes under the category of datatypes.

// JavaScript is a dynamically typed languague where the data types of variables are determined at runtime (when the program runs).We do not need to specify the type of a variable explicitly whereas in statically typed languages, the data types of variables are explicitly declared and checked at compile-time (before the program runs). We must specify the type of a variable when declaring it.

// In JavaScript, symbols are a unique and immutable primitive data type introduced in ES6 (ECMAScript 2015). Symbols are primarily used to create unique identifiers for object properties, which can help avoid naming collisions when working with objects.

// const sym = Symbol("Aniket");
// const anothersym = Symbol("Aniket");
// console.log(sym == anothersym);  // This will give false because we have converted the same string into symbol but they didn't remained the same after conversion.
// console.log(sym);

// const BigNumber = 65484514448454844654846548484574777777777777777777777777777777777777777888888888877777n;
// console.log(BigNumber);
// Writing n in the end considers the number to have a BigInt type and it does not loose its precision after reaching outside the bound of Number.

// Non Primitive Data Types:-

// // Array:-
const names = ["Aniket", "Kalyani", "Sagar"];

// // Objects:--
// let myObj = {
//     name : "Aniket",
//     age : 22
// }

// // Function:--
// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof BigNumber);   // This will give Number if value do not have n in the end otherwise it will give bigint if there is a n in the end.

// Non Primitive data types has a return type of object.
// For ex - objects returns object, array returns object, whereas function returns function which is also object function when we check their datatype using typeof operator.

// console.log(typeof names);  // returns object
// console.log(typeof myObj);  // returns object
// console.log(typeof myFunction);  // returns function but actually it is a object function

// ECMAScript is the official documentation of JavaScript. We can refer it for more information.






