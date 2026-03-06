// MAP PRACTICE EXERCISES
// .map() always returns a NEW array with the same number of elements.
// For each exercise, use .map() to solve the problem.
// Use arrow functions where you can!

// Exercise 1: Double each number

// Use .map() to double each number in the array.
// Expected output: [4, 10, 16, 22]

const numbers = [2, 5, 8, 11];
const doubled = numbers.map((num) => num * 2);

console.log("Exercise 1:", doubled); // [4, 10, 16, 22]

// Exercise 2: Add a greeting to each name

// Use .map() to add "Hello, " before each name.
// Expected output: ["Hello, Alice", "Hello, Bob", "Hello, Charlie"]

const names = ["Alice", "Bob", "Charlie"];
const greeted = names.map((words) => `Hello, ${words}`);
console.log("Exercise 2:", greeted); // ["Hello, Alice", "Hello, Bob", "Hello, Charlie"]

// ============================================================
// Exercise 3: Convert temperatures from Celsius to Fahrenheit
// ============================================================
// Formula: (celsius * 9/5) + 32
// Expected output: [32, 68, 98.6, 212]

const celsius = [0, 20, 37, 100];
const fahrenheit = celsius.map((num) => (num * 9) / 5 + 32);

console.log("Exercise 3:", fahrenheit); // [32, 68, 98.6, 212]

// ============================================================
// Exercise 4: Get the first letter of each word
// ============================================================
// Use .map() to get only the first character of each word.
// TIP: "hello"[0] gives you "h"
// Expected output: ["J", "i", "a", "g"]

const words = ["JavaScript", "is", "absolutely", "great"];
const firstLetters = words.map((word) => word[0]);
console.log("Exercise 4:", firstLetters); // ["J", "i", "a", "g"]

// ============================================================
// Exercise 5: Make each number negative
// ============================================================
// Use .map() to turn all numbers into their negative value.
// TIP: use -num
// Expected output: [-3, -7, -1, -9]

const positives = [3, 7, 1, 9];
const negatives = positives.map((num) => -num);
console.log("Exercise 5:", negatives); // [-3, -7, -1, -9]

// ============================================================
// Exercise 6: Wrap each word in brackets
// ============================================================
// Use .map() to wrap each word in square brackets.
// Expected output: ["[apple]", "[banana]", "[cherry]"]

const fruits = ["apple", "banana", "cherry"];
const wrapped = fruits.map((fruit) => `[${fruit}]`);
console.log("Exercise 6:", wrapped); // ["[apple]", "[banana]", "[cherry]"]
