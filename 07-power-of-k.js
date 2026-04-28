/*
 * Lesson 7: Checking if a number is a power of a given base
 *
 * In many coding interviews you will be asked to determine if an integer n is a power of two,
 * three, four, or some arbitrary k.  While the implementations share a common shape,
 * there are a few different strategies worth knowing: a simple loop that divides by k,
 * bit‑wise tricks for powers of two (because of binary representation), and math‑based
 * or precomputation techniques for other bases.
 *
 * This file introduces three approaches and shows how to implement them in JavaScript.
 *
 * 1. Iterative division: repeatedly divide by k until you either hit 1 (success) or find
 *    a non‑integer remainder (failure).  This works for any base > 1 and does not require
 *    special knowledge beyond loops and modulus.  Time complexity is O(log_k n).  It is
 *    sometimes called the “looping solution” and is the most straightforward to write.
 *
 * 2. Bit manipulation for powers of two: because 2‑power numbers have exactly one bit set
 *    in their binary representation (e.g. 1(0001), 2(0010), 4(0100), 8(1000), …), you can
 *    use the property that (n & (n – 1)) === 0 to check powers of two in O(1) time.  This
 *    relies on basic bitwise operations and is extremely fast.  It doesn’t generalise to
 *    powers of three or four, but it highlights how understanding binary helps you in
 *    interview questions.
 *
 * 3. Mathematical or precomputed constant checks: for some bases, you can avoid loops
 *    entirely by leveraging properties of numbers.  For example, the largest power of
 *    three that fits in a 32‑bit integer is 3^19 = 1162261467.  Any power of three must
 *    divide that number exactly, so you can check (1162261467 % n === 0) to determine if
 *    n is a power of three.  Similarly, for powers of four you could use bit patterns or
 *    precompute the maximum power.  These approaches are constant time but require you
 *    to know (and hard‑code) limits for your integer size.
 *
 * At the end of the file you’ll find implementations for powers of two, three and four
 * using the techniques above.  When solving variations of this problem on platforms
 * like LeetCode or HackerRank, always consider the constraints and choose the simplest
 * approach that satisfies them.
 */

// 1. Generic iterative division: works for any base > 1
function isPowerOf(base, n) {
  if (base <= 1 || n < 1) return false;
  // Keep dividing while n is divisible by base
  while (n % base === 0) {
    n = Math.floor(n / base);
  }
  // If we ended up with 1, n was a perfect power of base
  return n === 1;
}

// Example usage for powers of 2, 3 and 4:
// console.log(isPowerOf(2, 16)); // true
// console.log(isPowerOf(3, 27)); // true
// console.log(isPowerOf(4, 64)); // true
// console.log(isPowerOf(4, 72)); // false

// 2. Bitwise check for powers of two
// An integer is a power of two iff n > 0 and (n & (n - 1)) === 0.
function isPowerOfTwoBitwise(n) {
  // Guard against non‑positive numbers
  if (n <= 0) return false;
  // n & (n - 1) removes the lowest set bit.  A power of two has only one set bit.
  return (n & (n - 1)) === 0;
}

// 3. Constant‑time check for powers of three using the maximum 32‑bit power
// The largest power of three that fits in a 32‑bit signed integer is 3^19 = 1162261467.
const MAX_POWER_OF_THREE_INT = 1162261467;
function isPowerOfThreeFast(n) {
  return n > 0 && MAX_POWER_OF_THREE_INT % n === 0;
}

// 4. Precompute powers of four and use a Set for constant‑time lookup
// Maximum 32‑bit signed integer is 2^31 - 1 = 2147483647.  The largest power of four
// less than or equal to that is 4^15 = 1073741824.  We can store all powers up to that
// limit in a Set.  This makes membership tests O(1).
const powersOfFourSet = (() => {
  const set = new Set();
  let val = 1;
  while (val > 0 && val <= 0x7fffffff) { // 0x7fffffff = 2^31 - 1
    set.add(val);
    val *= 4;
  }
  return set;
})();
function isPowerOfFourSet(n) {
  return powersOfFourSet.has(n);
}

// Exports for testing or integration
module.exports = {
  isPowerOf,
  isPowerOfTwoBitwise,
  isPowerOfThreeFast,
  isPowerOfFourSet
};
