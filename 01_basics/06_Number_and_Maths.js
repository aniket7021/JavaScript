// **************************** Number **************************** //
// const score = 400;   // It creates a primitive number.
// console.log(typeof score);  // returns "number".
// console.log(score)      // returns 400  

const score = new Number(400);   // It creates a Number object
// console.log(typeof num);     // returns "object".
// console.log(score);     // returns [Number: 400], explicitly specifies a number.

// We can acccess all the properties and methods of the Number class through the later but we can also accesss most of the properties and methods through the primitive number type bcz JavaScript automatically wraps primitive numbers into a Number object when you access methods or properties. This process is called autoboxing.

// We can look at the properties and the methods in the console of our browser.

// Some methods:--
// console.log(score.toString().length);   // Now score which was an object initially is converted into a string which we can check using typeof operator. After this now we can access all the methods of the string.

// console.log(Math.sqrt(9.8));

// const mini = 1;
// const maxi = 6;

// console.log(Math.floor(Math.random() * (maxi - mini + 1)) + mini);




