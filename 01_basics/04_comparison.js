// console.log(2 > 1)  // true
// console.log(2 < 1)  // false
// console.log(2 == 1) // false
// console.log(2 >= 1) // true
// console.log(2 != 1) //true

// console.log("2" > 1) and console.log("02" > 1) are true bcz if there is any relational operator bw a number or a String, then the string is converted into a number if possible and  then comparison is done.
// console.log("12abc" > 1); will give a false bcz when JavaScript tried to convert "12abc" into number, then resulted into NaN and NaN can neither be greater or less than a given number.
// console.log("abc" == true) // false

// console.log(null > 0);  // false
// console.log(null == 0)  // false
// console.log(null >= 0)  // true
// JS converts null to 0 in case of relational operator(>, <, >=, <=, ==) except in case of null when == is used.

// Whenever there is a comparison(>, <, >=, <=, ==, !=) bw two different datatypes, JS tries to convert it into a single datatype to perform comparison but there are some exception for null and undefined specially for == operator.
// Rule for null in Loose Equality:
// null == undefined → true
// null == null → true
// For all other types, including numbers, strings, and booleans, null is not equal under ==.

// Rules for undefined:
// undefined == undefined → true
// undefined == null → true
// undefined is NOT loosely equal to any other type

// Loose equaliy check(==) converts the values being compared into the same type before checking equality(except null) whereas Strict equality(===) requires both the value and the datatype to be the same for equality.
// console.log("2" === 2); will give false 
