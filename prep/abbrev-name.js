function abbrevName(name) {
  const [firstName, lastName] = name.split(" "); // Split the name into two words

  const initialFirst = firstName[0].toUpperCase(); // Get the first letter of each and capitalize
  const initialLast = lastName[0].toUpperCase();

  return `${initialFirst}.${initialLast}`; // Return initials with a dot
}

// Log multiple names by calling the function with different arguments
console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("Evan Cole"));
console.log(abbrevName("P Favuzzi"));
console.log(abbrevName("David Mendieta"));

// ------- Here's an other way to do it -------------
// function abbrevName(name) {
//   const words = name.split(" ");
//   const initialFirst = words[0][0].toUpperCase();
//   const initialLast = words[1][0].toUpperCase();
//   return `${initialFirst}.${initialLast}`;
//   }
// --------------------------------------------------
