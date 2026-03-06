const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Math.random() will provide you a number between 0 and 1 for example 0.99 or 0.24
// Math.floor rounds down your number to the closest whole number. example: 3,63 -> 3

// The code generates a random number between 0 and 100

console.log(num);
