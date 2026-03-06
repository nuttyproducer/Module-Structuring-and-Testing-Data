// Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.

function reverseWords(str) {
  const arr = str.split(" "); // Split the string into an array of words (and empty strings for spaces)
  const reversedArr = arr.map((word) => word.split("").reverse().join("")); // Using arrow function.
  return reversedArr.join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog.")); // "ehT kciuq nworb xof spmuj revo eht yzal .god"
console.log(reverseWords("apple")); // "elppa"
console.log(reverseWords("a b c d")); // "a b c d"
console.log(reverseWords("  double  spaced  words  ")); // "  elbuod  decaps  sdrow  "

// SECOND METHOD: Method chaining
function reverseWordsTwo(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWordsTwo("The quick brown fox jumps over the lazy dog.")); // "ehT kciuq nworb xof spmuj revo eht yzal .god"
console.log(reverseWordsTwo("apple")); // "elppa"
console.log(reverseWordsTwo("a b c d")); // "a b c d"
console.log(reverseWordsTwo("  double  spaced  words  ")); // "  elbuod  decaps  sdrow  "
