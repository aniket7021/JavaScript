let score = "72"

// console.log(typeof score)
// Instead on writing console.log(typeof score), we could also have written console.log(typeof (score))

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)    In this way string is converted into number.

// But let us take an example of a string s = "72ab", then if we convert in into a number like:-
// let s = "72ab"
// let valueInNumber = Number(s)
// console.log(typeof valueInNumber)
// console.log(valueInNumber);
// then JavaScript converts the expression in number, but if we see the converted number then it states that is is NaN(Not a Number)
// NaN is a special numeric value in JavaScript used to represent invalid or undefined numeric operations.

// On conversion of undefined into number using Number() function, it gets converted into number, but the converted number is NaN. Whereas null is converted to 0.
// let x = undefined //(or null)
// let valueInNumber = Number(x);
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// Similarly true is converted in to 1 and false is converted into 0

// STRING/NUMBER TO BOOLEAN:--
// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)
// While boolean conversion any number is converted into true and 0 is converted into false. Similarly, empty string is converted into false whereas string containing even a single character is converted into true.


// In the same manner, we can convert a number/boolean into a string unsig String() function.