/**
 * Lesson 4: Top K Pattern (Tracking Largest Values)
 *
 * This pattern is used to find:
 * - 2nd largest
 * - 3rd largest
 * - Top K elements
 *
 * Works in O(N) time and O(1) space for small K.
 */

// -----------------------------------------------------------------------------
// 1. Second Largest (Top 2)
// -----------------------------------------------------------------------------

function secondHighest(s) {
  let first = -1;
  let second = -1;

  for (let ch of s) {
    if (ch < '0' || ch > '9') continue;

    const num = Number(ch);

    if (num > first) {
      second = first;
      first = num;
    } else if (num < first && num > second) {
      second = num;
    }
  }

  return second;
}

// -----------------------------------------------------------------------------
// 2. Third Largest (Top 3)
// -----------------------------------------------------------------------------

function thirdHighest(s) {
  let first = -1;
  let second = -1;
  let third = -1;

  for (let ch of s) {
    if (ch < '0' || ch > '9') continue;

    const num = Number(ch);

    // skip duplicates
    if (num === first || num === second || num === third) continue;

    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second) {
      third = second;
      second = num;
    } else if (num > third) {
      third = num;
    }
  }

  return third;
}

// -----------------------------------------------------------------------------
// 3. Core Pattern
// -----------------------------------------------------------------------------

/*
For Top 2:
if (num > first) {
    second = first;
    first = num;
} else if (num < first && num > second) {
    second = num;
}

For Top 3:
if (num > first) {
    third = second;
    second = first;
    first = num;
} else if (num > second) {
    third = second;
    second = num;
} else if (num > third) {
    third = num;
}
*/

// -----------------------------------------------------------------------------
// 4. Handling Duplicates
// -----------------------------------------------------------------------------

/*
Important when problem asks for DISTINCT values:

if (num === first || num === second || num === third) continue;
*/

// -----------------------------------------------------------------------------
// 5. Complexity
// -----------------------------------------------------------------------------

/*
Time: O(N)
Space: O(1)
*/

// -----------------------------------------------------------------------------
// 6. When this pattern is NOT enough
// -----------------------------------------------------------------------------

/*
- When K is large → use Min Heap (Priority Queue)
- When data is streaming → maintain heap dynamically
*/
