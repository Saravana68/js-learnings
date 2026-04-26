/**
 * Array Methods and Usage Examples
 *
 * This file expands on various array methods beyond creation and basic iteration.
 * It provides concise examples and notes on performance or common pitfalls.
 *
 * Topics covered:
 *
 * - Searching: `indexOf`, `includes`, `find`, `findIndex`
 *   Use these methods to locate elements in an array.  `indexOf` returns the
 *   index of the first match or `-1` if not found.  `includes` returns a
 *   boolean indicating presence.  `find`/`findIndex` accept a predicate and
 *   return the matching element or its index.
 *
 * - Condition checks: `some`, `every`
 *   `some` returns `true` if at least one element satisfies the predicate.
 *   `every` returns `true` only if all elements satisfy the predicate.
 *
 * - Transformation: `map`, `filter`, `reduce`, `flatMap`
 *   `map` applies a function to each element and returns a new array.
 *   `filter` keeps elements that satisfy a predicate.
 *   `reduce` accumulates a single result (e.g., sum or product).
 *   `flatMap` maps and flattens one level of nesting in a single step.
 *
 * - Combining and slicing: `concat`, `slice`, `splice`
 *   `concat` returns a new array by merging arrays or values.
 *   `slice` returns a shallow copy of a portion without modifying the original.
 *   `splice` modifies the array by removing or adding elements (mutating).
 *
 * - Sorting: `sort`
 *   The default sort converts elements to strings and compares lexicographically,
 *   which may lead to unexpected results with numbers.  Always pass a
 *   comparator function when sorting numbers.
 *
 * - Modifying: `push`, `pop`, `shift`, `unshift`, `fill`
 *   These methods add or remove elements.  `fill` overwrites existing values.
 *   Note that `shift` and `unshift` are O(n) operations.
 *
 * - Flattening: `flat`
 *   `flat(depth = 1)` flattens nested arrays up to a specified depth.
 *
 * - Copying and merging arrays: spread operator `[...]`, `Array.from`
 *   Use these to clone or merge arrays without mutating the originals.
 *
 * - Destructuring arrays
 *   Syntax for unpacking values into variables.
 */

// Sample array for demonstrations
const nums = [10, 20, 30, 40, 50];

/*
 * Searching
 */
const idx20 = nums.indexOf(20);   // 1
const has30 = nums.includes(30);  // true
const firstOver25 = nums.find(n => n > 25);      // 30
const indexFirstOver25 = nums.findIndex(n => n > 25); // 2

/*
 * Condition checks
 */
const hasEven = nums.some(n => n % 2 === 0);        // true
const allDivBy10 = nums.every(n => n % 10 === 0);   // true

/*
 * Transformation
 */
const squares = nums.map(n => n * n);               // [100, 400, 900, 1600, 2500]
const evensOnly = nums.filter(n => n % 20 === 0);    // [20, 40]
const total = nums.reduce((acc, val) => acc + val, 0); // 150

// flatMap: duplicate each element and flatten
const duplicated = nums.flatMap(n => [n, n]);        // [10,10,20,20,30,30,40,40,50,50]

/*
 * Combining and slicing
 */
const moreNums = [60, 70];
const combined = nums.concat(moreNums);             // [10,20,30,40,50,60,70]
const sliceOfNums = nums.slice(1, 4);               // [20,30,40]

// splice removes and/or adds elements (mutates nums)
const removed = nums.splice(2, 1, 25, 27);          // removed: [30]; nums becomes [10,20,25,27,40,50]

/*
 * Sorting
 */
const unsorted = [3, 1, 15, 4];
// Default sort (lexicographical): [1, 15, 3, 4]
const defaultSorted = [...unsorted].sort();
// Numeric sort: provide comparator
const numericSorted = [...unsorted].sort((a, b) => a - b); // [1, 3, 4, 15]

/*
 * Modifying
 */
const arr = [];
arr.push(1);    // [1]
arr.push(2);    // [1,2]
arr.pop();      // [1]
arr.unshift(0); // [0,1] (unshift is O(n))
arr.shift();    // [1]  (shift is O(n))

// fill overwrites values
const filledWith9 = new Array(3).fill(9); // [9,9,9]

/*
 * Flattening
 */
const nested = [1, [2, [3, 4]], 5];
nested.flat(1);    // [1, 2, [3,4], 5]
nested.flat(2);    // [1, 2, 3, 4, 5]

/*
 * Copying and merging arrays
 */
const copyOfNums = [...nums];
const merged = [...nums, ...moreNums];

/*
 * Destructuring
 */
const [first, second, ...rest] = nums; // first=10, second=20, rest=[25,27,40,50] (after splice mutation)

// Swapping values using destructuring
let a = 1, b = 2;
[a, b] = [b, a]; // a=2, b=1

// Notes:
// - Most array methods are O(n) in time complexity relative to array length.
// - `push`/`pop` are generally O(1); `shift`/`unshift` and `splice` with non-zero start index are O(n).
// - Use spread or Array.from to clone arrays when you need an immutable copy.
// - When sorting numbers, always provide a comparator to avoid lexical ordering bugs.

// Export nothing; this file is for educational purposes.
