// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

// We don't need the const num on the start. We can start our function directly, but we need to give it a parameter function getLastDigit(num).
// Even if you call getLastDigit(42), the function ignores the 42.
// I think our output in the terminal will always be 3.

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// =============> write your explanation here

// Exactly as i predicted, because we fixed the variable num with a const. The function uses it and the output will always be 3.

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
