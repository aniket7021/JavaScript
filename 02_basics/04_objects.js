// Objects decalared using constructor are singleton objects whereas objects decalred using object literals are not singleton.  // This is as per sir but chatgpt answer is different.
// const tinderUser = new Object()      // Using constructor call
const tinderUser = {}   // Using object literal
tinderUser.id = "123abc";
tinderUser.name = "Aniket"
tinderUser.isLoggedIn = true;
// console.log(tinderUser);

// Nested object:--
const JSUser = {
    email : "abcd@gamil.com",
    userData : {
        userfullname : {
            first_name : "Aniket",
            last_name : "Kumar"
        }
    }
}

// console.log(JSUser.userData.userfullname.last_name);
// console.log(JSUser.userData?.userfullname.last_name);    // This will throw undefined if userData is not present else return the required result. This is called optional chaining and is done to avoid writinf if else when we get an API response.

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}

// console.log(obj)
// obj = {obj1, obj2, obj3};    // Here if we do this, then rather than returning a new object in which all the properties are merged in a single object, this returns an object containing 3 objects.

// const obj = Object.assign(obj1, obj2, obj3);
// console.log(obj)
// In this all the properties of obj1, obj2 and obj3 are assigned in obj1.
// The first parameter in Object.assign(first, second, third) is source which will temporary store the result before assigning and all others are target.

// We can also use this:--
// console.log(Object.assign({}, obj1, obj2, obj3)); 
// Here instead os storing the result in obj1 we are predefining our source as {}, in which the value will be stored.

// But mostly we are going to use spread operator.
// obj = {...obj1, ...obj2, ...obj3}
// console.log(obj);

// Generally, we will get an array of object from database like:--
// const user = [
//     {
//         email : "kp@gmail",
//         name : "Kalyani"
//     },
//     {

//     },
//     {

//     }
// ]

// One way to access
// console.log(user[0].email);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser))     // Returns all the keys of tinderUser object in an array
// console.log(Object.values(tinderUser));  // Returns all the values of tinderUser object in an array
// console.log(Object.entries(tinderUser)); // Returns the key values pair of the object as an array(very rarely used). Each pair is an array 

// Sometime when we are finding any key in the object and if the key is not found, then there are chances of crashing.
// console.log(tinderUser.hasOwnProperty("isLoggedIn"))     // We are checking whether isLoggedIn is present or not.



