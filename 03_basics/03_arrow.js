// this keyword:--
// const user = {
//     username : "Aniket", 
//     price : 1099,
//     welcome_message : function() {
//     console.log(`${this.username}, welcome to this site`);
//     console.log(this);
//     }
// }

// user.welcome_message()
// Here we have used this keyword which is used to refer the current context(i.e all the stuffs that is inside the object).Instead of using this, if we would have used username directly, then js first try to find username the local scope of the function and then in the global scope and not inside the user object.
// We have written console.log(this) inside the function welcome_message, so when welcome_message will get executed then we can see the current context of the user object.

// user.username = "David"
// user.welcome_message()
// Here we change the current context of username from "Aniket" to "David", bcz it was not hard coded, and we can use (this) to refer to the current context(after being changed).

// console.log(this);
// This gives an {}, which is an empty object bcz we are running our code in node environment where top-level code is wrapped inside a module, so this at the top level refers to module.exports, which starts as {} as :-
// (function (exports, require, module, __filename, __dirname) {
//     console.log(this);
//   });

// But when we try to check the current context of the using this in windows then we get a window oject because in the browser, at the top level, this refers to the global object, which is window.

// function user() {
//     let username = "Puja Kumari"
//     console.log(this);
// }
  
// user()
// When we can use (this) inside an object or a method on an object, then it refers to the current object but in case of a regular function (this) refers to the global object in node and window object in case of a browser.
// Here user being the regular function, (this) refers to the global object 


// Arrow function:--
// const user = () => {
//     let username = "Puja Kumari"
//     console.log(this);
// }

// user()
// Arrow functions do not have their own this — they inherit it from the outer scope. Here the outer scope is {}.

// const obj = {
//     name: "Puja",
//     sayHi: () => {
//       console.log(this.name); 
//     }
//   };
  
//   obj.sayHi();
// Here we have defined sayHi inside the object and when we call obj.sayHi(), then there we have to print (this.name) but since arrow function do not have their own this, they inherit (this) from the outer scope so here this is not refering to the current context of the object, rather it is refering to the scope outside the object which is {} where there is no name defined that's why the output is undefined and not Puja.
// In case of a regular function(not in case of a method on an object), this refers to the global scope 

// const addtwo = (num1, num2) => {
//   return num1+num2
// }
// console.log(addtwo(3,5));
// This is an example of explicit return when we explicitely writes what to return.

// const add = (num1, num2) => num1+num2
// console.log(add(3,5));
// This an example of implicit return when we do not write any return keyword ans js automatically interprets it.

// const add = (num1, num2) => (num1+num2)
// console.log(add(3,5));
// This also works fine.

// If we wrap in {} braces, then we have to explicitly write the return keyword but if wrapped inside a (), then we do not have to explicitely write the return keyword.

// Using () to return in case of arrow functions are important because to avoid confusion. Suppose we are returning an object, then if we don't use (), then arrow function by default understood {} to be a code block rather than an object and will not find any return statement and hence will return undefined. So if we do not want to explicitely write the return statement, then we have to use ().
// For ex:--
// const add = (num1, num2) => ({
//   username : `Aniket your age is ${num1 + num2}`
// })
// console.log(add(18,5));

// or explicitely write return like:--
//   const add = (num1, num2) => {
//     return {
//     username : `Aniket your age is ${num1 + num2}`
//   }
// }
//   console.log(add(18,5))





  

 
  