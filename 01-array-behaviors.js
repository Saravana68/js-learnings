/**
 * Array Behaviors and Common Pitfalls in JavaScript
 *
 * This file documents some key learnings about JavaScript arrays,
 * especially differences between dense and sparse arrays.
 *
 * - `new Array(n)` creates a sparse array with empty slots (holes).
 *   Many array methods such as `map()`, `forEach()`, `filter()`, etc.
 *   skip these holes.  For example:
 *
 *     const sparse = new Array(5);
 *     // sparse is [ <5 empty items> ]
 *     const mapped = sparse.map(() => 1);
 *     // mapped is still [ <5 empty items> ] because callbacks were not invoked.
 *
 * - Use `Array.from({ length: n }, callback)` or `.fill()` to create arrays
 *   with defined values and avoid holes.  For example:
 *
 *     const ones = Array.from({ length: 5 }, () => 1);
 *     // [1, 1, 1, 1, 1]
 *
 *     // or
 *     const zeros = new Array(5).fill(0);
 *     const twos  = zeros.map(() => 2);
 *     // [2, 2, 2, 2, 2]
 *
 * - Array literals such as `[undefined, undefined]` create **dense**
 *   arrays where each slot is defined (even if the value is `undefined`).
 *
 * - Use `Array.isArray(value)` to test whether a value is an array.
 *
 * Below are examples of common array operations and iteration patterns.
 */

// Creating arrays
const dense = [1, 2, 3];                // dense array with 3 elements
const sparse = new Array(3);            // sparse array: [ <3 empty items> ]
const filled = Array.from({ length: 3 }, (_, i) => i + 1); // [1, 2, 3]

// Demonstrating that map skips empty slots
const holes = new Array(3);
const mappedHoles = holes.map(() => 42);
// mappedHoles is [ <3 empty items> ]

// Using .fill() to avoid empty slots
const filledArray = new Array(3).fill(0).map(() => 42);
// filledArray is [42, 42, 42]

// Iteration patterns
const numbers = [1, 2, 3, 4, 5];

// Traditional for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// for...of loop
for (const value of numbers) {
  console.log(value);
}

// forEach method
numbers.forEach((value, index) => {
  console.log(index, value);
});

// Using reduce to compute a sum
const sum = numbers.reduce((acc, val) => acc + val, 0); // 15

// filter and map examples
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
const doubled = numbers.map(n => n * 2);        // [2, 4, 6, 8, 10]

// Mutating vs non-mutating methods
const stack = []; // using push/pop as LIFO (stack)
stack.push(1);
stack.push(2);
const last = stack.pop(); // 2

const queue = []; // using push/shift as FIFO (queue)
queue.push(1);
queue.push(2);
const first = queue.shift(); // 1

// Array methods complexity notes:
// - push/pop: O(1)
// - shift/unshift: O(n) because elements need to be reindexed.
// - map/filter/reduce: O(n) over the length of the array.

// Utility function to check if a value is an array
function isArray(value) {
  return Array.isArray(value);
}

// Exporting nothing; this file is for educational purposes.
