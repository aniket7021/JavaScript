let myDate = new Date();
// console.log(myDate);     
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate)       // object

// let myCreatedDate = new Date(2025, 0, 25)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2025, 0, 25, 3, 5, 7);      // Here the month is started from 0
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2025-01-25");
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("01-25-2025");
// console.log(myCreatedDate.toLocaleString());

// In JS, we can create a timestamp when we are designing a polls or quizes.

let myTimeStamp = Date.now();   // We can also declare like this when we need a timestamp.
// console.log(myTimeStamp);

// If we have to compare two given dates, then we can compare their timestamps.

// console.log(myCreatedDate.getTime());    // date got converted into timestamp.

// To convert timestamp in sec from millisecond 
// console.log(Math.floor(Date.now()/1000))     // We can use floor or round function of math bcz after division the result is in decimal.

// console.log(myDate.getMonth());  // Since this returns 0 which is the first month of the year, so we could have used console.log(myDate.getMonth() + 1) so as to avoid confusion.
// console.log(myDate.getDay());


