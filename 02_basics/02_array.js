const marvel_heroes = ["Ironman", "Captain America", "Loki", "Doctor Strange"];
const dc_heroes = ["Superman", "Flash", "Batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes)

// We had expected that afer using the push function all he values in the second array will individually get inserted into the first array but we can see after using the push the whole dc_heroes array got inserted into marvel_heroes.

// So if we want to access "Flash", then we have to write:--
// console.log(marvel_heroes[4][1]);

// This is not supposed to be a good way to merge two arrays.

// Rather we can use concat function which merge two arrays and then returns a new array.
// console.log(marvel_heroes.concat(dc_heroes))

// Push pushes into the existing array but concat returns a new merged array.
// But instead of using push or concat, we use a new operator to do this merging easily using spread operator.

// const new_arrays = spread = [...marvel_heroes, ...dc_heroes]     // Here spread operator used
// console.log(new_arrays);

// We can also use flat() to flatten our array. Suppose we have an array of array of array, so we have depth of 3 in our array, and flat returns a new array removing all the depths,
// const myarr1 = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];
// console.log(myarr1.flat(Infinity));

// When we select data from a web page, then it may be available in nodelist or object or in string but to convert it in array we use from().
// console.log(Array.from("Aniket"));   // string got converted into array.
// console.log(Array.isArray("Aniket"));    // returns false.
// console.log(Array.from({name : "Aniket"}));      // returns an empty array as it was unable to interpret whether to make an array from keys or values.

// let score1 = 101;
// let score2 = 201;
// let score3 = 301;
// console.log(Array.of(score1, score2, score3))    // returns a new array from set of elements given in the argument.



