// --- Declarations vs Statements ---

let versionNumber = "2.0.0"; // declaration
versionNumber = "2.0.1"; // statement (reassignment)

console.log(versionNumber); // 2.0.1

// --- let vs const ---

let currentYear = 2023; // can reassign
currentYear++; // now 2024

const yearOfBirth = 1990; // cannot reassign
const age = currentYear - yearOfBirth;
console.log(`I am ${age} years old`); // I am 34 years old

// --- Functions ---

console.log(Math.round(10.3)); // 10
console.log(Math.round(10.6)); // 11

// --- Errors ---

// const volunteer = "Shadi";
// const volunteer = "Abdi";      // You're declaring volunteer twice with const.

// ---

// const volunteer = "Shadi";     // Should be let to change volunteer.
// volunteer = "Hinde";           // You can't change the const!

// ---

// console.log(Math.round(10.3);  // Missing closing parenthesis ).

// ---

// const result = console.log("hello world");
// console.log(result); // undefined

// Should be...

function greet() {
  return "hello world"; // returns a value
}

const result = greet();
console.log(result); // "hello world"
