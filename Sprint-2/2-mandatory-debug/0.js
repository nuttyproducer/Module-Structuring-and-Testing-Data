// Predict and explain first...
// We can have multiple parameters in a function, divided by a comma.
// The code will not run because we have console.log inside the function instead of return.
// =============> write your prediction here

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// We need to use return in the function so we can correctly call the function.
// We will use console.log after the function to get the desired outcome.
// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Outcome: The result of multiplying 10 and 32 is 320
