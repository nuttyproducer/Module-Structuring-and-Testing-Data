function convertToPercentage(decimalNumber) {
  const percentage = decimalNumber * 100;
  return `${percentage}%`;
}

function greeting(name) {
  return `Hello ${name}.`;
}

let greetName = greeting("Benjamin");

console.log(`${greetName}.
    How are you today?
    Can i help you with anything?`);

const result = convertToPercentage(0.5);
console.log(result);

// NEXT TESTS

function getRandomName() {
  // Create an array (list) of 6 first names, stored at positions 0-5
  const firstNames = ["Alex", "Jordan", "Taylor", "Casey", "Morgan", "Sam"];

  // Create an array (list) of 6 last names, stored at positions 0-5
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
  ];

  // Math.random() generates a random decimal number between 0 and 0.999999...
  // For example: 0.7234
  // firstNames.length is 6 (the number of items in the array)
  // 0.7234 * 6 = 4.3404
  // Math.floor() rounds DOWN to the nearest whole number: 4.3404 becomes 4
  // So randomFirstIndex will be a whole number: 0, 1, 2, 3, 4, or 5
  const randomFirstIndex = Math.floor(Math.random() * firstNames.length);

  // Same process for last names - generates a random index from 0 to 5
  const randomLastIndex = Math.floor(Math.random() * lastNames.length);

  // Use the random index to pick a name from the array
  // If randomFirstIndex is 4, then firstNames[4] is "Morgan"
  // Array positions: ["Alex"=0, "Jordan"=1, "Taylor"=2, "Casey"=3, "Morgan"=4, "Sam"=5]
  const firstName = firstNames[randomFirstIndex];

  // Same for last name - use the random index to pick from lastNames array
  const lastName = lastNames[randomLastIndex];

  // Combine the two names with a space between them and return the result
  // Example: "Morgan Garcia"
  return `${firstName} ${lastName}`;
}

// Call the function - it runs all the code inside and returns a random name
console.log(getRandomName());
// Call it again - gets a DIFFERENT random name because Math.random() gives different numbers
console.log(getRandomName());
// Call it a third time - another different random name
console.log(getRandomName());
