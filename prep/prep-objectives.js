function convertToPercentage(decimalNumber) {
  //                              ↑
  //                    This is a parameter
  //                    It's a placeholder that receives the value
  const percentage = decimalNumber * 100;
  return `${percentage}%`; // USE `` instead of ''!!
}

console.log("----PERCENTAGES----");
console.log(convertToPercentage(0.5));
console.log(convertToPercentage(0.35)); // USE . instead of ,
console.log("-------------------");

function convertToPercentage2(decimalNumber) {
  const percentage2 = decimalNumber * 100;
  return `${percentage2}%`; // gives back the value
}

const result = convertToPercentage2(0.5);

console.log(result);
console.log("------- +/- -------");

function example(num) {
  // Other example of a function
  if (num < 0) {
    return "negative"; // function stops here if num < 0
  }
  return "positive"; // only runs if num >= 0
}

console.log(example(-5)); // "negative"
console.log(example(10)); // "positive"

console.log("----- FIX NUM ------");

const fixNumber = 0.23;

function fixPerc() {
  // Empty parentheses - No parameter
  const perc2 = `${fixNumber * 100}%`;
  return perc2;
}

const result2 = fixPerc();

console.log(result2); // Call the function
