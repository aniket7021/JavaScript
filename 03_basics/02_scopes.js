// var, let and const are keywords used to declare a variable in JS.
// var can be redeclared and can be updated and it is only function scoped(i.e if a variable is declared using var inside a function block, then outside the function block we cannot access it but in case of any other block, the variable declared inside that given blocks leaks and is accessible outside of that block also).

// For ex :-- 
// if(true) {
//     var x = 10
// }
// console.log(x)   // Output is 10 bcz we declared x inside the if block but it leaks outside the block.

// Generally, we can access the value in a block if it is declared outside the block, but vice versa is also true in case of var except the case of function block where its scope is limited only to the function.

// function test() {
//     var x = 10;
// }
// console.log(x);  // Here we are going to get, ReferenceError: x is not defined.

// var x = 10;
// if(x == 20){
//     var y = 20
// }
// console.log(y);  // Here we are going to get undefined

// var x = 10;
// if(x == 10){
//     var x = 20
// }
// console.log(x);    // Prints 20 bcz in JavaScript, var does NOT have block scope, it has function scope.

// Just like var, let is also a keyword used to declare a variable and posseses below properties:--
// Scope: Block-scoped (only accessible within {} block)
// Redeclaration: ❌ Not allowed in the same scope declaring two variable with the same name but in two different code blocks are allowed
// Reassignment: ✅ Allowed

// Example:--
// let x = 10
// x = 20
// console.log(x);

// Following are the properties that const posses:--
// Scope: Block-scoped (like let)
// Redeclaration: ❌ Not allowed in the same scope
// Reassignment: ❌ Not allowed (must be initialized at declaration)

// let x
// x = 10   // We can initilaize let after declaration but this is not possible in case of const.
// console.log(10 + x); 


// function one() {
//     const username = "Aniket"

//     function two() {
//         const website = "grandmaster"
//         console.log(username);
//     }

//     console.log(website);
    
//     two();
// }
//  one()

// This will give reference error on line number 57, because we are trying to print the value in website variable inside one function but actually, website is decalred inside two function, which is a child function for one() and execution stops there only. But if we comment that line then we can see that two function called further. 
// Child function can access everything which is inside the parent function but the vice versa is not is false.

// Scope story is same for nested if else also.
// if(true) {
//     const username = "Aniket"
//     if(true) {
//         const age = 22
//         console.log(username + age);
//     }
//     console.log(age)
// }
// console.log(username);
// Output will be Aniket 22 and then ReferenceError: age is not defined where the execution will be stopped before reaching console.log(username);

// We can also decalre a function like :--
// console.log(addOne(5));
// const addOne = function(num) {
//     return num+1;
// }


// console.log(addTwo(5));
// function addTwo(num) {
//     return num+2;
// }
// Here in this case we are trying to call addTwo() before the function declaration and we didn't faced any problem bcz behind the scenes JS moves the function declaration to the top of its scope during compliation . This is called function hoisting.

// Variables in JS are very powerful as they can hold the value of a fucntion and when a variable holds the value of a function it is called function expression. For ex-


// const addTwo = function(num) {
//         return num + 2;
//     }
    
//     console.log(addTwo(5))
    
// This works perfectly fine but if we hoist the declaration to the top, then we will get (ReferenceError: Cannot access 'addTwo' before initialization) bcz here in this time addTwo is not a function but addTwo is assigned the value that the function returns, so here addTwo is acting like a variable and not function whose declaration is moved to the top and not the initialization. Thats why we are getting (ReferenceError: Cannot access 'addTwo' before initialization).

// Same is the case with variables, where the declaration is moved to the top.
// If the variable is declared with var, then while hoisting we get undefined and in case of let and const we get Temporal Dead Zone (TDZ).


