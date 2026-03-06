// More Arrow Function Conversion Practice
// For each example, rewrite the .map() callback as an arrow function.
// Fill in the code yourself, using the comments as guidance!

// Example 4: Square each number
function squareNumbers(arr) {
  // TODO: Convert the function below to an arrow function
  const squared = arr.map((num) => num * num);
  return squared;
}
console.log(squareNumbers([2, 3, 4])); // [4, 9, 16]

// Example 5: Add '!' to each word
function exclaimWords(str) {
  // TODO: Convert the function below to an arrow function
  const arr = str.split(" ");
  const exclaimedArr = arr.map((word) => word + "!");

  return exclaimedArr.join(" ");
}
console.log(exclaimWords("hello world")); // "hello! world!"

// Example 6: Get the length of each word
function wordLengths(str) {
  // TODO: Convert the function below to an arrow function
  const arr = str.split(" ");
  const lengths = arr.map((word) => word.length);

  return lengths;
}
console.log(wordLengths("how are you today")); // [3, 3, 3, 5]

// Example 7: Uppercase all words
function uppercaseWords(str) {
  // TODO: Convert the function below to an arrow function
  const arr = str.split(" ");
  const upperArr = arr.map((word) => word.toUpperCase());

  return upperArr.join(" ");
}
console.log(uppercaseWords("good morning")); // "GOOD MORNING"

// Example 8: Reverse numbers in an array
function reverseNumbers(arr) {
  // TODO: Convert the function below to an arrow function
  const reversedArr = arr.map((num) => -num);

  return reversedArr;
}
console.log(reverseNumbers([1, -2, 3, -4])); // [-1, 2, -3, 4]

// Try to fill in the code yourself by converting each function to use an arrow function in .map()!
// Use the comments to guide you. If you get stuck, ask for help!
