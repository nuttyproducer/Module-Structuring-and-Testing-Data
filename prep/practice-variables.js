// ============================================================
// EXERCISE 1 — const vs let
// ============================================================

// Fix the code below so it runs without errors.
// Hint: think about which variables change and which ones don't.

let city = "Amsterdam";
let country = "Netherlands";
let greeting = `I live in ${city}, ${country}`;

city = "Rotterdam"; // reassigning to a new city

console.log(greeting);

// QUESTION: Why should `country` be const instead of let?
// Write your answer here:
//


// ============================================================
// EXERCISE 2 — Variable naming rules
// ============================================================

// Some of these variable declarations are invalid. Fix the ones that are broken.

// const 1stPlace = "Gold";          // ❌ fix this
// const my-score = 100;             // ❌ fix this
const playerName = "Ben";            // ✅ already valid
// const $amount = 50;               // ✅ or ❌? — is this valid? Try it in Node!

// Write your fixed declarations here:


// ============================================================
// EXERCISE 3 — Template literals
// ============================================================

// Use template literals (backticks) to build the output below.
// Expected output: "My name is Ben and I am 33 years old."

const name = "Ben";
const age = 33;

// Fix this line — it currently uses string concatenation:
const sentence = "My name is " + name + " and I am " + age + " years old.";

// Rewrite sentence using a template literal:
const sentenceFixed = ``; // your answer here

console.log(sentenceFixed);


// ============================================================
// EXERCISE 4 — String methods
// ============================================================

// Given the card number below, extract the last 4 digits as a string.
// Hint: you'll need .toString() first!

const cardNumber = 1234567890123456;

const last4 = // your code here

console.log(last4); // expected: "3456"


// ============================================================
// EXERCISE 5 — Modulo operator
// ============================================================

// A movie is 8784 seconds long.
// Calculate:
// a) How many full minutes is that?
// b) How many leftover seconds remain after counting full minutes?

const movieSeconds = 8784;

const leftoverSeconds = // your code here
const fullMinutes = // your code here

console.log(`Full minutes: ${fullMinutes}`);
console.log(`Leftover seconds: ${leftoverSeconds}`);


// ============================================================
// EXERCISE 6 — Random numbers
// ============================================================

// Generate 5 random whole numbers between 1 and 50.
// Use a for loop — don't repeat the expression 5 times!

const minNum = 1;
const maxNum = 50;

// Write your for loop here:
