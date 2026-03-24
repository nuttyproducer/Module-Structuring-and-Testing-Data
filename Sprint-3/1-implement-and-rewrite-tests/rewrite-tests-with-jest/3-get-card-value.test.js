// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

test("should return correct value for number cards 2-10", () => {
  expect(getCardValue("2♣")).toEqual(2);
  expect(getCardValue("10♥")).toEqual(10);
});

test("should return 10 for face cards J, Q, K", () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♥")).toEqual(10);
});

test("should throw an error for invalid cards", () => {
  expect(() => getCardValue("1♠")).toThrow("Invalid card");
  expect(() => getCardValue("Z♣")).toThrow("Invalid card");
  expect(() => getCardValue(" ")).toThrow("Invalid card");
  expect(() => getCardValue("11♠")).toThrow("Invalid card");
});
