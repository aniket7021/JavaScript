// We can create an object by creating an object literal or by constructor.
// We can create an object using object.create(), but that we will study later.
// Currently, we will create our object using object literals

// Object Literals:--
const mysym = Symbol("mykey1");
const JSUser = {
    name : "Aniket",
    "full name" : "Aniket Kumar",
    age : 23,
    "location" : "Ranchi",
    email : "aniket123@google.com",
    [mysym] : "mykey2",
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Saturday"]
}

// const JSUser1 = {
//     name : "Aniket",
//     age : 23
// }

// console.log(JSUser == JSUser1);  // false

// Like array object where the keys are predefined like 0, 1, 2, 3 ..., when we create an object literal, then we have the freedom of creating our own keys, but whatever the keys that we are declaring gets automatically converted into string or symbol. 
// For ex :- If we write bool : true, then js treats it as "bool" : true. This means bool now have lost its special meaning.

// For accessing the value in JS:-
// console.log(JSUser.name);
// But this method is not considered the best way for accessing JS objects because suppose we have to acces full name property of JSUser, then we cannot use dot operator as there is a space in the object key name.
// Also suppose we have an object key name as 123age, then we can only write it as "123age".
// So to access these properties, we will use bracket notation like:--
// console.log(JSUser["full name"]);

// JSUser["email"] = "abcd@gmail"
// console.log(JSUser.email);
// We could have also changed this using dot operator but we prefer this bracket notation.

// Primtive datatypes in JS are immutable, which means when we try to modify the value, then the actual value does not get modified rather a new value is assigned to that variable. 
// In JavaScript, Symbols are a primitive data type introduced in ECMAScript 6 (ES6). A Symbol is a unique and immutable value that can be used as a key for object properties. They are often used to avoid property name collisions in objects.

// const sym1 = Symbol("Aniket")
// This is how we declare a symbol, we call Symbol funtion which always returns a unique value
// "Aniket" is a description that you can optionally provide when creating a Symbol.
// The description is not used in the actual Symbol value but is included for debugging purposes. It allows you to differentiate symbols by name when logged in the console or when inspecting the symbol.

// console.log(JSUser[mysym]);
// const sym1 = Symbol("Aniket");
// const sym2 = Symbol("Aniket");
// console.log(sym1 == sym2);   // false because Symbol always returns a unique value, and hence sym1 and sym2 have two different values, despite of having the same symbol description - "Aniket".

// When we need to use the symbol as the object key, then we need to enclose it into brackets like        
//   [mysym] : "mykey2"

// Object.freeze(JSUser)    // freezes the object and the changes if done will not be propagated.
// JSUser.email = "kalyani@123";
// console.log(JSUser);
// console.log(JSUser[mysym]);

JSUser.greet = function()
{
    console.log("Welcome JS User");
}
// console.log(JSUser.greet());     // The output will be - Welcome JS User first and then undefined will be shown. This is becasue greet do not returns anything.

// In the above case, the greet function is called and - Welcome JS User was printed but if we write
// console.log(JSUser.greet);
// Here, greet is not called. Instead, the function itself (its reference) is printed.



