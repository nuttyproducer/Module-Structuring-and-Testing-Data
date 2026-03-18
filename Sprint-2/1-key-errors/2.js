// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// First of all we won't get an error message because the function is never called.
// To get an error message we need to add something like console.log to call the function.
// =============> explain this error message here
// SyntaxError: Unexpected number
// Finally, correct the code to fix the problem

// =============> write your new code here
// function square(num) {
//   return num * num;
// }

function square(num) {
  return mathPow(num, 2);
}

console.log(square(5));

// Outcome: 25

// Why use Math.pow?
// It’s flexible: you can raise to any power, not just 2.
// It’s built-in and works with decimals, negatives, and roots.

// Examples:

// Square a number (raise to the power of 2):
// Math.pow(5, 2); // 25
// Math.pow(3, 2); // 9

// Cube a number (raise to the power of 3):
// Math.pow(2, 3); // 8
// Math.pow(4, 3); // 64

// Raise to any power:
// Math.pow(10, 0);   -> 1 (any number to the power of 0 is 1)
// Math.pow(2, 4);    -> 16
// Math.pow(9, 0.5);  -> 3 (square root of 9)
