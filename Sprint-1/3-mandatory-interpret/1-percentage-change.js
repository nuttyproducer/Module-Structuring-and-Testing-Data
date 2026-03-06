let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//    - Line 4: 2
//    - Line 5: 2
//    - Line 9: 1

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//    Add a comma between "," and ""

// c) Identify all the lines that are variable reassignment statements
//    - carPrise = ...
//    - priceAfterOneYear = ....

// d) Identify all the lines that are variable declarations
//    - both let and const line 1,2,7,8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//    - The function call replaceAll removes all the commas from the number resulting in "10000"
//    - The function call Number(..) converts string to a real number.
