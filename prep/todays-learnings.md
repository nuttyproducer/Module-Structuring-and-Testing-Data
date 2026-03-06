# Today's Learnings 🎉

## 1. String Methods

### `.substring(start, end)`

Extracts part of a string. `end` is not included.

```javascript
"hello".substring(0, 4); // "hell"
"hello".substring(1); // "ello" (from index 1 to end)
"599c".substring(0, 3); // "599" (removes the "c")
```

### `.padStart(length, "char")`

Adds characters to the **beginning** of a string until it reaches the target length.

```javascript
"5".padStart(3, "0"); // "005"
"50".padStart(3, "0"); // "050"
"599".padStart(3, "0"); // "599" (already long enough, no change)
```

### `.padEnd(length, "char")`

Adds characters to the **end** of a string until it reaches the target length.

```javascript
"9".padEnd(2, "0"); // "90"
"99".padEnd(2, "0"); // "99" (already long enough, no change)
```

---

## 2. Template Literals

Use backticks `` ` `` and `${}` to insert variables into strings.

```javascript
const name = "Alice";
console.log(`Hello, ${name}!`); // "Hello, Alice!"

const dollars = "5";
const cents = "99";
console.log(`$${dollars}.${cents}`); // "$5.99"
```

Use `\n` anywhere in a string to create a new line:

```javascript
console.log(`First line\nSecond line`);
// First line
// Second line
```

---

## 3. Arrow Functions

A shorter way to write functions. If there's only one expression, `return` and `{}` are not needed.

```javascript
// Regular function
function double(num) {
  return num * 2;
}

// Arrow function (same thing!)
const double = (num) => num * 2;
```

---

## 4. `.split(separator)`

Splits a string into an array using a separator.

```javascript
"hello world".split(" "); // ["hello", "world"]
"hello".split(""); // ["h", "e", "l", "l", "o"]
"a,b,c".split(","); // ["a", "b", "c"]
```

---

## 5. `.map()`

Goes through every element in an array, applies a function to each one, and returns a **new array** with the results.

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2); // [2, 4, 6]

const words = ["hello", "world"];
const upper = words.map((word) => word.toUpperCase()); // ["HELLO", "WORLD"]
```

**Key rule:** The parameter name inside `.map()` should be different from the array name!

```javascript
const fruits = ["apple", "banana"];
const wrapped = fruits.map((fruit) => `[${fruit}]`); // ["[apple]", "[banana]"]
//                          ↑ singular name for each element
```

---

## 6. Method Chaining

You can chain multiple methods together in one statement — no intermediate variables needed!

```javascript
// Step by step (with variables):
const arr = str.split(" ");
const reversedArr = arr.map((word) => word.split("").reverse().join(""));
return reversedArr.join(" ");

// Method chaining (same result, one statement!):
return str
  .split(" ")
  .map((word) => word.split("").reverse().join(""))
  .join(" ");
```

Each method runs on the result of the previous one — like a pipeline! 🔗

---

## 7. `.reverse()`

Reverses the elements of an array.

```javascript
"hello"
  .split("") // ["h", "e", "l", "l", "o"]
  .reverse() // ["o", "l", "l", "e", "h"]
  .join(""); // "olleh"
```

---

## 8. Scope

Variables inside a function only exist inside that function. Different functions can use the same variable names without conflict!

```javascript
function one() {
  const result = "hello"; // only exists inside 'one'
}
function two() {
  const result = "world"; // only exists inside 'two', no conflict!
}
```

---

## Files We Created Today

| File                                    | What it practices                                         |
| --------------------------------------- | --------------------------------------------------------- |
| `padstart-padend-example.js`            | `padStart`, `padEnd`, `substring` for currency formatting |
| `reverse-words.js`                      | Reversing words with `.map()`, method chaining            |
| `arrow-function-conversion-exercise.js` | Converting regular functions to arrow functions           |
| `arrow-function-conversion-practice.js` | More arrow function conversion practice                   |
| `map-practice.js`                       | `.map()` with real-world examples                         |
| `method-chaining-practice.js`           | Method chaining with real-world examples                  |
