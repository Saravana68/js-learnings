/**
 * Lesson 6: Integer Ranges and Overflow in JavaScript
 *
 * Many algorithm problems refer to "N-bit signed" or "N-bit unsigned" integers, along with INT_MIN and INT_MAX.
 * This lesson explains what those terms mean, shows how to compute the range of values, and demonstrates how to detect overflow when constructing numbers digit-by-digit.
 *
 * Definitions:
 * - An N-bit unsigned integer uses all N bits for the magnitude. Its range is 0 to 2**N - 1.
 * - An N-bit signed integer uses one bit for the sign and the remaining (N-1) bits for the magnitude.
 *   Its range is -2**(N-1) to 2**(N-1) - 1.
 *
 * In competitive programming and interviews, problems often target 32-bit signed integers:
 *   const INT_MAX = 2**31 - 1;      //  2147483647
 *   const INT_MIN = -2**31;         // -2147483648
 *
 * Helper functions:
 */

function getUnsignedRange(bits) {
  // Returns [min, max] for an unsigned integer with 'bits' bits.
  // Example: getUnsignedRange(8) => [0n, 255n]
  const max = (2n ** BigInt(bits)) - 1n;
  return [0n, max];
}

function getSignedRange(bits) {
  // Returns [min, max] for a signed integer with 'bits' bits.
  // Example: getSignedRange(8) => [-128n, 127n]
  const max = (2n ** BigInt(bits - 1)) - 1n;
  const min = -1n * (2n ** BigInt(bits - 1));
  return [min, max];
}

// Examples:
const eightBitUnsigned = getUnsignedRange(8); // [0n, 255n]
const eightBitSigned   = getSignedRange(8);   // [-128n, 127n]
const sixteenBitSigned = getSignedRange(16);  // [-32768n, 32767n]
const thirtyTwoBitSigned = getSignedRange(32); // [-2147483648n, 2147483647n]

// Overflow detection pattern:
// When constructing a number digit-by-digit (e.g. reversing an integer), check before multiplying and adding.
// For 32-bit signed integers:
const INT_MAX = 2 ** 31 - 1;
const INT_MIN = -(2 ** 31);

/**
 * Reverse an integer with overflow check (LeetCode 7).
 * If the result would exceed the 32-bit signed range, return 0.
 */
function reverse32(x) {
  let result = 0;
  while (x !== 0) {
    const digit = x % 10;
    x = Math.trunc(x / 10);

    // Check if result * 10 + digit would overflow.
    if (result > INT_MAX / 10 || (result === INT_MAX / 10 && digit > 7)) return 0;
    if (result < INT_MIN / 10 || (result === INT_MIN / 10 && digit < -8)) return 0;

    result = result * 10 + digit;
  }
  return result;
}

// Mental shortcut: to derive ranges quickly:
//   unsigned N-bit → 0 to 2**N - 1
//   signed   N-bit → -2**(N-1) to 2**(N-1) - 1
