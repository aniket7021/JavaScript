// In JS, an array is an object where we can store mutliple items under a single variable name.
// The items that we store in array can be of different types.

const myarr = [0, 1, 2, 3, 4, "Aniket", true];
// console.log(typeof myarr);
// Since array is an object so we can access its member functions for performing common array operations.
// For knowing more about the array members, we can refer to the browser console or mdn reference.

// console.log(myarr[2]);

// KEY POINTS:-
// JS arrays are resizable.
// It can contains mixed datatypes(Even we can have arrays and objects inside the array)//
// Arrays in JS are dynamic in nature.
// JS array-copy-operation create shallow copies.

// Shallow copy of an object is a copy whose reference share the same reference point. So whenever we change either a source or a copy, the change will be reflected in both the source and the copy. Whereas in deep copy we have copy and source which are completely independent.

// const myarr2 = new Array(1, 2, 4, 45, 5);    // Another way to declare an array.
// console.log(typeof myarr2);

// ARRAY METHODS:--

// myarr.push(6)    // Pushes 6 at the back.
// console.log(myarr);

// myarr.pop()
// console.log(myarr);  //Removes the last value in the array.

// myarr.unshift(5);    // This adds the given element in the front of the array, which results in shifting of all the remaining elements of the element by one place and thus can be very time consuming if the sixe of the array is large.
// console.log(myarr);

// myarr.shift();   // Shifts all the element to the left by one place, and removes the first element.
// console.log(myarr);

// console.log(myarr.includes(21));     // Returns false if the value is not present and true if present.
// console.log(myarr.indexOf(21));      // Returns -1 if the element is not present else return the index of the value given.

// const newArr = myarr.join()      // Converts all the elements of array into a string 
// console.log(typeof newArr);
// console.log(newArr);

// console.log("A", myarr);
// const myarr1 = myarr.slice(1, 3);
// console.log(myarr1);
// console.log("B", myarr);
// const myarr2 = myarr.splice(1, 3);
// console.log(myarr2);
// console.log("C", myarr);
// Slice returns the section of the element given in the argument from the original array.
// Slice will return element from index number 1 to 3 if we write myarr.slice(1, 4). Slice does not include the last index.
// Splice returns the deleted elements from the array.
// Splice will return element from index number 1 to 4 if we write myarr.splice(1, 4) and all these elements will also be deleted from the original array. This is the basic difference bw alice and splice.
// This concludes that slice does not manipulate the original array but splice does.




