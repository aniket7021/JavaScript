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


// *************************OPERATIONS*******************************
// let value = 3
// let negvalue = -value
// console.log(negvalue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)  // Gives 2^2
// console.log(2/2)
// console.log(2%2)


// String concatenation 
// let str1 = "hello"
// let str2 = " Aniket"
// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2 + 3) gives 123 as the output whereas console.log(1 + 2 + "3") gives 33 as the output. This happens because the precedence is from left to right and if there is any operation bw string and number, then JavaScript converts the number into string and applies string concatenation bw them.

// console.log(+true) gives 1 bcz + is unary operator, which converts the input into its number equivalent. There are other unary operators like -, ++, --, ! etc which has differnt operations. For more info refer chatgpt.
// Similarly, console.log(+"") will give 0 as "" is cosidered as 0 after conversion.

// let num1, num2, num3
// num1 = num2 = num3 = 2+2
// console.log(num1);
// console.log(num2);
// console.log(num3);
// We can assign values like this but this is not considred a good practice bcz it reduces the readability of our code.

// let x = 2
// let y = x++
// console.log(y, x);  // Output is 2 3 because of the postfix increment operator which assigns the current value of x to y and after assignment, it increases the value of x whereas in prefix increment operator, first the value is increased and then the increased value is assigned.





