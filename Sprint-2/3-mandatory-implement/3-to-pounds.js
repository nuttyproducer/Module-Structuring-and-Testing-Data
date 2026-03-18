// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// const penceString = "399p";

// const penceStringWithoutTrailingP = penceString.substring(
//   0, penceString.length - 1);

// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// const pounds = paddedPenceNumberString.substring(
//   0,
//   paddedPenceNumberString.length - 2
// );

// const pence = paddedPenceNumberString
//   .substring(paddedPenceNumberString.length - 2)
//   .padEnd(2, "0");

// console.log(`£${pounds}.${pence}`);

function toPounds(penceMarkup) {
  let penceString = penceMarkup.toString();
  if (penceString.endsWith("p")) {
    // used something new we did not learn called .endsWith
    penceString = penceString.slice(0, -1);
  }
  let pounds = (parseFloat(penceString) / 100).toFixed(2);

  return `£${pounds}`;
}

console.log(toPounds("4520p")); // £45.20
console.log(toPounds("25p")); // £0.25
console.log(toPounds("1p")); // £0.01
console.log(toPounds("49229p")); // £492.29

// When toPounds doesn't have a p in the end. ERROR!

console.log(toPounds("49229")); // £49.22 => Totally incorrect value!

// When the value of toPounds is a number instead of a string

console.log(toPounds(50)); // £0.50
console.log(toPounds(123)); // £1.23

// Some errors VS code isn't catching correctly:
// TypeError: penceStringWithoutTrailingP.padStart is not a function => codesteps.dev
// I will add the correct if function to our already existing function + .toString so we always work with a string.

// Wow! What en eyeopening exercise this was! It learned me to think
// about what's the most easy solution for the problem...
// We have Pence and indeed when you want pounds you just divide it by 100.
// Take the .toFixed(2) to only get 2 decimals after the comma.
// PERFECT!
