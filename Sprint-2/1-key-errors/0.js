// Predict and explain first...
//  Does let str should have a different identifier?
//  Why are we using let here? Can't we use const?

// call the function capitalize with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`; // str.slice(1) = starts from the second letter.
//  return str;
// }

// =============> write your explanation here
// You can use either let or const for the new variable, but const is better here.
// The value never changes after assignment.

// =============> write your new code here
function capitalize(str) {
  const capitalized = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalized;
}

console.log(capitalize("benjamin")); // Benjamin
