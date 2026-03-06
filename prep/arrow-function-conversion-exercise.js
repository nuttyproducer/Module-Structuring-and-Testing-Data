// Exercise: Convert regular functions to arrow functions in .map()
// For each example below, rewrite the .map() callback as an arrow function.
// After converting, run the code and check the console output.

// Example 1
function reverseWords1(str) {
  const arr = str.split(" ");
  const reversedArr = arr.map((word) => word.split("").reverse().join(""));
  return reversedArr.join(" ");
}
console.log(reverseWords1("hello world")); // "olleh dlrow"

// Example 2
function doubleNumbers(arr) {
  const doubled = arr.map((num) => num * 2);

  return doubled;
}
console.log(doubleNumbers([1, 2, 3, 4])); // [2, 4, 6, 8]

// Example 3
function capitalizeWords(str) {
  const arr = str.split(" ");
  const capitalizedArr = arr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return capitalizedArr.join(" ");
}
console.log(capitalizeWords("the quick brown fox")); // "The Quick Brown Fox"

// Your task:
// 1. For each function above, rewrite the .map() callback as an arrow function (one line if possible).
// 2. Run the code and check the output.
// 3. (Optional) Add your own example using .map() and convert it to an arrow function!
