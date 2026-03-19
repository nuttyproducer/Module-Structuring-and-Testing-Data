// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

// For the tests we need to think of different possible inputs like morning, afternoon, midnight, noon, single-digit hours, etc.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

console.log();
console.log("///////// Test 1 ////////");

console.assert(
  formatAs12HourClock("00:00") === "12:00 am",
  "Midnight should be 12:00 am"
);

console.log();
console.log("///////// Test 2 ////////");

console.log();
console.log("///////// Test 3 ////////");

console.log();
console.log("///////// Test 4 ////////");

console.log();
console.log("///////// Test 5 ////////");

console.log();
console.log("///////// Test 6 ////////");
