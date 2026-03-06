// Real-life example: Converting cents to dollars
// Similar to pence-to-pounds, but with US currency
// Goal: Convert "599c" (599 cents) to "$5.99"

const centsString = "5c";

// Step 1: Remove the "c" at the end

const centsStringWithoutC = centsString.substring(0, centsString.length - 1);

console.log("After removing 'c':", centsStringWithoutC); // Should be "599"

// Step 2: Pad with zeros to ensure at least 3 digits

// TIP: .padStart(length, string) adds characters to the BEGINNING of a string
// It only adds if the string is shorter than the target length
//
// EXAMPLES:
// "5".padStart(3, "0")    → "005"  (adds 2 zeros at start)
// "50".padStart(3, "0")   → "050"  (adds 1 zero at start)
// "599".padStart(3, "0")  → "599"  (already 3 digits, no change)

const paddedCentsString = centsStringWithoutC.padStart(3, "0");

console.log("After padding:", paddedCentsString); // Should be "599"

// Step 3: Extract dollars (everything except last 2 digits)

// TIP: .substring(0, length - 2) gets everything EXCEPT the last 2 characters

const dollars = paddedCentsString.substring(0, paddedCentsString.length - 2);

console.log("Dollars:", dollars); // Should be "5"

// Step 4: Extract cents (last 2 digits) and pad if needed

// TIP: .substring(length - 2) starts 2 characters from the end and goes to the end
// This ALWAYS gets the last 2 characters
//
// EXAMPLES:
// "599".substring(3 - 2)  → "599".substring(1)  → "99"
// "005".substring(3 - 2)  → "005".substring(1)  → "05"
//
// TIP: .padEnd(length, string) adds characters to the END of a string
// This ensures cents always has 2 digits
//
// EXAMPLES:
// "9".padEnd(2, "0")  → "90"
// "99".padEnd(2, "0") → "99"  (already 2 digits, no change)

const cents = paddedCentsString
  .substring(paddedCentsString.length - 2)
  .padEnd(2, "0");

console.log("Cents:", cents); // Should be "99"

// ============================================================
// Step 5: Format as $X.XX
// ============================================================

console.log(`\nFinal result: $${dollars}.${cents}`);

// ============================================================
// Now try it yourself with a function!
// ============================================================
// TIP for function names: Use verbs that describe what the function DOES
// Good: convertCentsToDollars, formatPrice, calculateTotal
// Bad: cents, money, process
//
// TIP for parameters: Use clear names that tell you what input is expected
// Good: centsStr, centsString, inputString
// Bad: str, x, input

// console.log("\n--- Your Turn: Complete this function ---");

// function convertCentsToDollars(centsStr) {
// Step 1: Remove the "c"
//   const withoutC = // Your code here

// Step 2: Pad to 3 digits
//   const padded = // Your code here

// Step 3: Extract dollars
//   const dollars = // Your code here

// Step 4: Extract and pad cents
//   const cents = // Your code here

// Step 5: Return formatted string
//   return // Your code here
// }

// Test your function (uncomment when ready):
// console.log(convertCentsToDollars("5c"));      // Should be $0.05
// console.log(convertCentsToDollars("50c"));     // Should be $0.50
// console.log(convertCentsToDollars("599c"));    // Should be $5.99
// console.log(convertCentsToDollars("1234c"));   // Should be $12.34
