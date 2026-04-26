/**
 * Lesson 3: Math functions for competitive programming in JavaScript.
 *
 * JavaScript's `Math` object provides helper functions that fill
 * gaps left by languages like C++.  In DSA problems you often
 * need integer division, rounding, absolute values, minima/maxima,
 * logarithms, square roots and powers.  This file demonstrates
 * when and how to use these functions, along with example patterns
 * and notes.
 *
 * 1. Integer Division & Rounding:
 *    • `Math.floor(x)` truncates down to the nearest integer.  This
 *      is useful for removing the last digit of a number or
 *      computing index boundaries.  For example, repeatedly
 *      dividing a positive number by 10 and flooring the result
 *      removes one digit at a time.
 *    • `Math.ceil(x)` rounds up to the nearest integer.  Use this
 *      when dividing items into groups and you need to cover
 *      everything (e.g. the minimum number of pages needed to
 *      store `n` elements, `ceil(n / pageSize)`).
 *    • `Math.trunc(x)` removes the fractional part for both
 *      positive and negative numbers.  This behaves like C++'s
 *      integer division (`123/10 === 12`, `-123/10 === -12`).
 *
 * 2. Absolute Values & Bounds:
 *    • `Math.abs(x)` returns the absolute value of `x`.  It's
 *      commonly used in distance or difference calculations.
 *    • `Math.min(a, b, ...)` and `Math.max(a, b, ...)` find the
 *      minimum or maximum among their arguments.  When operating
 *      on large arrays, prefer a loop or reduction rather than
 *      spreading the array into the function to avoid stack
 *      limitations.
 *
 * 3. Logarithms:
 *    • `Math.log10(n)` gives the base‑10 logarithm.  For a
 *      positive integer `n`, `Math.floor(Math.log10(n)) + 1`
 *      returns the number of digits in `n`.  This can replace
 *      manual digit counting loops when constraints allow.
 *    • `Math.log2(n)` gives the base‑2 logarithm.  This is useful
 *      when reasoning about binary trees or bit widths.  For
 *      example, the height of a balanced binary tree with `n`
 *      nodes is roughly `log₂ n`.
 *
 * 4. Power & Square Root:
 *    • `Math.sqrt(n)` computes the square root.  It's often used
 *      to limit loops when checking for primes or factors (you
 *      only need to test divisors up to `√n`).
 *    • `Math.pow(a, b)` returns `a` raised to `b`, but in modern
 *      JavaScript you can write `a ** b` instead.  Use this for
 *      exponentiation and combinatorics.
 *
 * 5. Constants:
 *    • `Math.PI` provides the value of π.  It's handy in
 *      geometric problems when calculating circumference or area.
 *
 * Example snippets follow each section to illustrate typical usage.
 */

// -----------------------------------------------------------------------------
// 1. Integer division and rounding examples
// -----------------------------------------------------------------------------

/**
 * Count the number of digits by repeatedly removing the last digit using
 * Math.floor.  Each iteration divides `num` by 10 and floors the result,
 * effectively truncating the least significant digit.  Returns the
 * number of digits processed.  For `num = 123`, this returns 3.
 *
 * @param {number} num A positive integer.
 * @returns {number} The number of digits in `num`.
 */
function removeDigits(num) {
  let digits = 0;
  while (num > 0) {
    num = Math.floor(num / 10); // shrink by one digit
    digits++;
  }
  return digits;
}

/**
 * Compute how many pages are needed to hold `count` items if each page
 * can store at most `pageSize` items.  Uses Math.ceil to ensure that
 * any remainder items require an additional page.
 *
 * @param {number} count Total number of items.
 * @param {number} pageSize Number of items per page.
 * @returns {number} The minimal number of pages needed.
 */
function pagesNeeded(count, pageSize) {
  return Math.ceil(count / pageSize);
}

/**
 * Perform true integer division (truncation toward zero) using Math.trunc.
 * For positive numbers Math.floor and Math.trunc are equivalent, but for
 * negative numbers they differ (floor rounds toward -∞ while trunc rounds
 * toward 0).  This function mirrors C++'s integer division behavior.
 *
 * @param {number} a Dividend.
 * @param {number} b Divisor (non‑zero).
 * @returns {number} The integer quotient of `a / b` truncated toward zero.
 */
function integerDivision(a, b) {
  return Math.trunc(a / b);
}

// -----------------------------------------------------------------------------
// 2. Absolute values and boundary functions
// -----------------------------------------------------------------------------

/**
 * Compute the absolute difference between two numbers.  This is useful in
 * problems where only the magnitude of a difference matters, such as
 * determining the distance between two coordinates on a number line.
 *
 * @param {number} a First number.
 * @param {number} b Second number.
 * @returns {number} The absolute difference between `a` and `b`.
 */
function absoluteDifference(a, b) {
  return Math.abs(a - b);
}

/**
 * Find the minimum element in an array using a simple loop.  Using
 * Math.min(...arr) works for small arrays but can cause stack overflow
 * on very large arrays, so iteration is safer in competitive settings.
 *
 * @param {number[]} arr An array of numbers with at least one element.
 * @returns {number} The smallest value in the array.
 */
function arrayMin(arr) {
  let min = arr[0];
  for (const val of arr) {
    if (val < min) min = val;
  }
  return min;
}

/**
 * Similarly compute the maximum element in an array using a loop.  You
 * could adapt this to track both min and max in a single pass.
 *
 * @param {number[]} arr An array of numbers.
 * @returns {number} The largest value in the array.
 */
function arrayMax(arr) {
  let max = arr[0];
  for (const val of arr) {
    if (val > max) max = val;
  }
  return max;
}

// -----------------------------------------------------------------------------
// 3. Logarithms and digit counting
// -----------------------------------------------------------------------------

/**
 * Count the number of digits in a positive integer using base‑10 logarithms.
 * For example, 1234 has `Math.log10(1234) ≈ 3.091`, so the floor + 1
 * returns 4.  Ensure that the input `n` is > 0 before calling log10.
 *
 * @param {number} n A positive integer.
 * @returns {number} The number of decimal digits in `n`.
 */
function digitCount(n) {
  return Math.floor(Math.log10(n)) + 1;
}

/**
 * Compute the integer part of the base‑2 logarithm.  Returns the largest
 * exponent `k` such that `2^k` is less than or equal to `n`.  This is
 * useful for understanding tree heights, binary search iterations, or
 * determining the number of bits required to represent `n`.
 *
 * @param {number} n A positive integer.
 * @returns {number} The floor of log₂ n.
 */
function log2Floor(n) {
  return Math.floor(Math.log2(n));
}

// -----------------------------------------------------------------------------
// 4. Power and square root examples
// -----------------------------------------------------------------------------

/**
 * Check whether an integer `n` is prime.  Uses trial division up to the
 * square root of `n` (rounded down).  This demonstrates the use of
 * Math.sqrt in limiting the loop.  Returns true for prime numbers and
 * false otherwise.
 *
 * @param {number} n A non‑negative integer.
 * @returns {boolean} True if `n` is prime, false otherwise.
 */
function isPrime(n) {
  if (n < 2) return false;
  const limit = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Compute `a` raised to the power `b` using the exponentiation operator.
 * In modern JavaScript the `**` operator is syntactic sugar for
 * Math.pow(a, b).  Both ways produce the same result.
 *
 * @param {number} a Base value.
 * @param {number} b Exponent value.
 * @returns {number} The result of a^b.
 */
function power(a, b) {
  return a ** b; // equivalent to Math.pow(a, b)
}

/**
 * Compute the circumference of a circle given its radius.  Uses the
 * constant Math.PI to approximate π.  This example illustrates how
 * built‑in constants can simplify geometric calculations.
 *
 * @param {number} radius The radius of the circle.
 * @returns {number} The circumference of the circle.
 */
function circumference(radius) {
  return 2 * Math.PI * radius;
}

// -----------------------------------------------------------------------------
// Complexity Notes
// -----------------------------------------------------------------------------
/*
 * Most Math functions (floor, ceil, trunc, abs, sqrt, log10, log2, pow) run
 * in constant time O(1).  When applied per element in an array of length
 * `n`, the total cost is O(n).  For example, using Math.floor in a loop
 * over `n` numbers to count digits results in O(n) time overall.  Because
 * numbers in typical coding challenges have a bounded number of digits (e.g.
 * ≤ 10⁵ has at most 6 digits), even loops with explicit digit removal are
 * effectively O(n).
 */
