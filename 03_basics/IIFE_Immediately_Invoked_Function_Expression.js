// IIFE -- Immediately Invoked Function Expression:-

// Normal Function:--
// function db() {
//     console.log("Database 1 Connected");
// }
// db()
// In this normal function the function was invoked/called immedietely but this is not an IIFE bcz IIFE has the following property:--
// An IIFE is a function that is:

// ✅ Defined as an expression,
// ✅ And invoked immediately,
// ✅ Without a separate name or reusable reference.(means that the name is local to the function itself and isn't available outside.)

// One of the main reasons IIFEs (Immediately Invoked Function Expressions) became popular — especially before ES6 — was to avoid polluting the global scope.
// An IIFE creates a new local scope, so any variables declared inside it stay private and don't leak into the global space.
// Before ES6, We didn’t have block-level scope (let or const), so IIFE was a life-saver for encapsulation(hiding the sensitive info using private access modifier).

// Another Example:--
// (function db1() {
//     console.log("DB1 connected");
// }) ();
// This also works and prints "DB Connected", bcz we have wrapped our function definition inside () and instead of directly calling the function like - db(), we have just called it immediately after putting () at the end of wrapped function definition which was wrapped inside () but still this is not a IIFE bcz here we have named the function as db() and this is not an expression. () at the end is for execution just like in case of normal function call we put () for execution.

// (() => {
//     console.log("DB Finally Connected");
// }) ()
// This is an example of IIFE.


// If we write two IIFEs, one after another then we need to separate then using ; otherwise it will cause an error like stated below:--

// (() => {
//     console.log("DB2 Finally Connected");
// }) ();

// (() => {
//     console.log("DB2 Finally Connected");
// }) ()

// ( (name) => {
//     console.log(`He he he he, I am ${name}`);
// }) ("Aniket")