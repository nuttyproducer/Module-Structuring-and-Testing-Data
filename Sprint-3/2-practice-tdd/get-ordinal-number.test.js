const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

// While i was doing my research I stumbled upon .toBe for exact equality.
// .toBe() checks for exact equality using === (strict equality).
// You can use it for primitive values: strings, numbers, booleans, null, or undefined.

// Basics
test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toBe("2nd");
});

test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toBe("3rd");
});

test("should return '4th' for 4", () => {
  expect(getOrdinalNumber(4)).toBe("4th");
});

// Teens ordinal numbers
test("should return '11th' for 11", () => {
  expect(getOrdinalNumber(11)).toBe("11th");
});

test("should return '12th' for 12", () => {
  expect(getOrdinalNumber(12)).toBe("12th");
});

test("should return '13th' for 13", () => {
  expect(getOrdinalNumber(13)).toBe("13th");
});

// Last-digit rule
test("should return '21st' for 21", () => {
  expect(getOrdinalNumber(21)).toBe("21st");
});

test("should return '22nd' for 22", () => {
  expect(getOrdinalNumber(22)).toBe("22nd");
});

test("should return '23rd' for 23", () => {
  expect(getOrdinalNumber(23)).toBe("23rd");
});

test("should return '24th' for 24", () => {
  expect(getOrdinalNumber(24)).toBe("24th");
});

// Edge cases
test("should return '0th' for 0", () => {
  expect(getOrdinalNumber(0)).toBe("0th");
});

test("should return '-1st' for -1", () => {
  expect(getOrdinalNumber(-1)).toBe("-1st");
});
