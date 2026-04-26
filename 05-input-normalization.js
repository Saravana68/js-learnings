/**
 * Lesson 5: Input Normalization and Validation in JavaScript
 *
 * This file demonstrates how to separate input normalization and validation
 * from algorithmic logic. In competitive programming or DSA practice we
 * usually trust problem constraints and avoid over‑validation. However,
 * for utility functions or production scenarios, proper normalization is vital.
 *
 * Key ideas:
 * - Accept either an array of numbers or a string containing numbers.
 * - Normalize string inputs into an array of numbers.
 * - Validate that the resulting array only contains finite numbers.
 * - Keep normalization/validation separate from the core algorithm.
 */

// Normalize input into an array of numbers. Accepts arrays or strings.
// Returns null when input cannot be normalized.
function normalizeToNumberArray(input) {
  if (Array.isArray(input)) {
    return input;
  }
  if (typeof input === 'string') {
    const trimmed = input.trim();
    if (trimmed === '') {
      return [];
    }
    return trimmed.split(/[\,\s]+/).map(value => Number(value));
  }
  return null;
}

// Validate that an array contains only finite numbers.
function isValidNumberArray(arr) {
  return arr.every(num => Number.isFinite(num));
}

// Example wrapper that uses normalization and validation before running logic.
function solve(input) {
  const arr = normalizeToNumberArray(input);
  if (!arr) {
    return false;
  }
  if (!isValidNumberArray(arr)) {
    return false;
    // Alternatively, return arr.filter(Number.isFinite) to ignore invalid entries.
  }
  // Core algorithm: example calculates the sum of numbers.
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

// Example usage:
console.log(solve([1, 2, 3]));       // 6
console.log(solve('4, 5 6'));       // 15
console.log(solve('7 eight 9'));    // false

/*
Complexity:
- normalizeToNumberArray runs in O(n) time where n is number of tokens in the input string.
- isValidNumberArray runs in O(n) time over the array.
- solve uses O(n) additional time after validation.
Since n is input length, overall complexity is linear with minimal overhead.
*/
