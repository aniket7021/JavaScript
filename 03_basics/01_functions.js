// Functions in JS are some lines of code packaged together specifically written to perform a specific task so that we do not have to write the same code again and again, instead of which we can use this package.

// Definition of a function:--
// function sayMyName(){
//     console.log("A");
//     console.log("n");
//     console.log("i");
//     console.log("k");
//     console.log("e");
//     console.log("t");
// }

// sayMyName()
// sayMyName is just the reference of the function (i.e just pointing to the function without executing it) but sayMyName() will execute the function 

// function addTwoNumbers(number1, number2){
//     const x = number1 + number2
//     console.log(typeof(x));
    
// }

// addTwoNumbers(1, 'a')     // retured NaN if no arguments were given.
// If we have given (1, "a"), then since inside the function we are not checking whether the arguments are number or not, the output will be "1a" because one of the argument is a string which we can check using typeof operator.

// const result = addTwoNumbers(1, 2)
// result will be undefined because result is just declared but did not got initialized bcz function did not returned anything.

// Now if we write:--
// function addTwoNumbers(number1, number2){
//     const x = number1 + number2
//     return x;
// }
// console.log(result);     // This will not return undefined

// function loginUserMessage(Username){
//     if(!Username){
//         console.log("Please enter a valid username");
//         return 
//     }
//     return `${Username} has just logged in`
// }

// console.log(loginUserMessage("Aniket125"));
// But if we write loginUserMessage() and does not gives any argument, then the parameter Username is declared but didn't received any value due to which it will be undefined and the output will be - undefined has logged in.
// For that we put a check whether the parameter contains undefined or it is initialized(i.e it contains some value) using if else.

// While function definition, we can also set the parameters value in no arguments is passed
// For ex:--
// function loginUserMessage(Username = "Kalyani1211"){
//     if(!Username){
//         console.log("Please enter a valid username");
//         return 
//     }
//     return `${Username} has just logged in`
// }

// console.log(loginUserMessage("")) will not give the outout as :-- Kalyani1211 has just logged in bcz we are explicitly passing an empty string as an argument.
// but console.log(loginUserMessage()) will give the outout as :-- Kalyani1211 has just logged in bcz we are passing no argument.

// There is a diff bw no argument and an empty string.

// Take an example of an e-commerce app, where customer keeps on adding items to the cart and we want to know the prices of each items customer purchased or have added in the cast.
// function calculateCartPrice(...num)
// {
//     return num
// }

// console.log(calculateCartPrice(100, 200, 300, 400, 700))     // Returns [ 100, 200, 300, 400, 700 ]
// ... is a rest parameter which collects all the arguments passed into an array.
// The above num is an array and not a number.

// function calculateCartPrice(x, y, ...num)
// {
//     return num
// }
// console.log(calculateCartPrice(100, 200, 300, 400, 700))  returns [ 300, 400, 700 ]

// In JS, the arguments are passed by value if the arguments are primary data types but the referenced data types are also pased by value but the value is the reference of the datatype(i.e. referenced data types are pased by the value of the memory address where the data is present)

// const user = {
//     username : "Aniket",
//     price : 999
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject(user)
// This is how we pass an object to a function.
// Also we could have directly declared the object inside the function call. For ex :--

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject({
//     username : "KP",
//     price : 99999
// })

// Sometimes if we have given the wrong name of the key then it throws an undefined.
// If we would have written anyobject.prices in place of anyobject.price then our fucntion will try to access the prices property of the object which is not present and hence the output will be :-- Username is KP and price is undefined.

// const myNewArray = [100, 2000, 300, 4000]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(myNewArray));

// We could have also written:--
// console.log(returnSecondValue([100, 2000, 300, 4000]));


