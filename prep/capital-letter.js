// Function 1: Capitalizes the first letter of a name
function capitaliseFirstLetter(name) {
  const whatsMyName = name[0].toUpperCase() + name.substring(1);

  return whatsMyName; // Send back the capitalized name
}

// name[0] gets the first character (index 0)
// .toUpperCase() makes it uppercase (b → B)
// name.substring(1) gets everything after the first character (arath)
// Combining them: "B" + "arath" = "Barath"

// Function 2: Creates a welcome greeting using the capitalized name
function createGreeting(name) {
  // Call capitaliseFirstLetter to capitalize the name first
  const result = capitaliseFirstLetter(name); // "barath" becomes "Barath"

  // Use template literal to create greeting message
  return `Welcome ${result}`; // Returns "Welcome Barath"
}

// Call createGreeting with "barath" and store the result
const greeting = createGreeting("barath"); // greeting = "Welcome Barath"

// Print the greeting to the console
console.log("------------------");
console.log(greeting);
console.log("------------------");

function capitalizeFirstLettername(name) {
  const myName = name[0].toUpperCase() + name.substring(1);

  return myName;
}

function createGreetingname(name) {
  const resultGreeting = capitalizeFirstLettername(name);

  return `Welcome ${resultGreeting}`;
}

const greetingname = createGreetingname("kakhol");

console.log(greetingname);
console.log("------------------");
