// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");
// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.

test("should return 0 for no occurrences of the character", () => {
  const str = "hello world";
  const char = "z";
  const count = countChar(str, char); // Calls countChar with the test inputs and saves the returned value
  expect(count).toEqual(0); // checks that your function returns 0 for that test case.
});

// Scenario: Single Occurrence
// Given the input string str,
// And a character char that appears exactly once in the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 1, indicating a single occurrence of the char was found in the str.

test("Should count the ocurrences of the character", () => {
  const str = "hello world";
  const char = "h";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

// Scenario: Case Sensitivity
// Given the input string str containing both uppercase and lowercase versions of a character,
// And a character char that matches only one case,
// When the function is called with these inputs,
// Then it should count only the exact case matches, not both.

test("Should count the uppercase ocurrences of the character", () => {
  const str = "heLLo world";
  const char = "L";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});
