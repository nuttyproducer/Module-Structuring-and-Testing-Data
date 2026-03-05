# JavaScript Methods Reference - Sprint 1

## String Methods

### `.substring(start, end)`

Extracts portion of string between two indices. End not included.

```javascript
"hello".substring(0, 3); // "hel"
"hello".substring(2); // "llo"
text.substring(0, text.length - 1); // removes last char
```

### `.slice(start, end)`

Like substring but supports negative indices (counts from end).

```javascript
"hello".slice(-2); // "lo" (last 2 chars)
"hello".slice(-3, -1); // "ll"
"hello".slice(1, -1); // "ell"
```

### `.charAt(index)` or `[index]`

Returns character at specific index.

```javascript
"hello".charAt(0); // "h"
"hello"[0]; // "h" (alternative)
```

### `.padStart(length, string)` / `.padEnd(length, string)`

Pads string to target length with specified string.

```javascript
"5".padStart(3, "0"); // "005"
"5".padEnd(2, "0"); // "50"
"9".padStart(2, "0"); // "09" (for time formatting)
```

### `.toUpperCase()` / `.toLowerCase()`

Converts case.

```javascript
"hello".toUpperCase(); // "HELLO"
"WORLD".toLowerCase(); // "world"
```

### `.replace(search, replace)` / `.replaceAll(search, replace)`

Replaces text. `replace()` only first match, `replaceAll()` all matches.

```javascript
"hello world".replace("o", "0"); // "hell0 world" (first only)
"hello world".replaceAll("o", "0"); // "hell0 w0rld" (all)
"10,000".replace(/,/g, ""); // "10000" (regex alternative)
```

### `.indexOf(search)` / `.lastIndexOf(search)`

Finds position of substring. Returns -1 if not found.

```javascript
"hello world".indexOf("o"); // 4 (first)
"hello world".lastIndexOf("o"); // 7 (last)
"/path/file.txt".lastIndexOf("/"); // 5
```

### `.split(separator)`

Splits string into array.

```javascript
"a,b,c".split(","); // ["a", "b", "c"]
"hello".split(""); // ["h", "e", "l", "l", "o"]
```

### `.includes(search)` / `.startsWith(search)` / `.endsWith(search)`

Checks if string contains/starts/ends with substring.

```javascript
"hello world".includes("world"); // true
"hello world".startsWith("hello"); // true
"399p".endsWith("p"); // true
```

### `.trim()` / `.trimStart()` / `.trimEnd()`

Removes whitespace.

```javascript
"  hello  ".trim(); // "hello"
```

### `.repeat(count)`

Repeats string.

```javascript
"*".repeat(5); // "*****"
```

### `.length`

Property (not method) returning string length.

```javascript
"hello".length; // 5
```

---

## Math Methods

### `Math.random()`

Returns random decimal between 0 (inclusive) and 1 (exclusive).

```javascript
Math.random(); // 0.7364... (example)
Math.floor(Math.random() * 10); // Random int 0-9
Math.floor(Math.random() * 6) + 1; // Random int 1-6 (dice)
```

### `Math.floor()` / `Math.ceil()` / `Math.round()` / `Math.trunc()`

Rounding functions.

```javascript
Math.floor(4.9); // 4 (down)
Math.ceil(4.1); // 5 (up)
Math.round(4.5); // 5 (nearest)
Math.trunc(4.9); // 4 (remove decimal)
```

---

## Type Conversion

### `Number(value)`

Converts to number.

```javascript
Number("123"); // 123
Number("3.14"); // 3.14
parseInt("123"); // 123
parseFloat("3.14") + // 3.14
  "123"; // 123 (unary plus)
```

---

## Operators

### Modulo `%`

Returns remainder after division.

```javascript
17 % 5; // 2
8784 % 60; // 24 (leftover seconds)
10 % 2; // 0 (even check)
```

### Arithmetic

```javascript
5 + 3; // 8
10 - 3; // 7
4 * 5; // 20
20 / 4; // 5
2 ** 3; // 8 (exponentiation)
```

---

## Template Literals

Backticks `` ` ` `` with `${}` for expressions.

```javascript
`Hello ${name}` // String interpolation
`${hours}:${minutes}:${seconds}` // "2:26:24"
`Initial: ${name[0].toUpperCase()}`; // Method calls inside
```

---

## Console

### `console.log(...values)`

Prints to console. Can pass multiple values separated by commas.

```javascript
console.log("Hello", name, "Age:", 30);
console.log(`Result: ${result}`);
```

---

## Additional Useful String Methods

### `.split(separator)`

**What it does:** Splits a string into an array based on a separator

**Examples:**

```javascript
"hello world".split(" "); // ["hello", "world"]
"a,b,c".split(","); // ["a", "b", "c"]
"hello".split(""); // ["h", "e", "l", "l", "o"]
"2024-03-05".split("-"); // ["2024", "03", "05"]

// Can be used with .join() to replace text
"10,000".split(",").join(""); // "10000"
```

---

### `.trim()`, `.trimStart()`, `.trimEnd()`

**What they do:** Remove whitespace from strings

**Examples:**

```javascript
"  hello  ".trim(); // "hello"
"  hello  ".trimStart(); // "hello  "
"  hello  ".trimEnd(); // "  hello"
"   ".trim(); // ""
```

---

### `.includes(searchString)`

**What it does:** Checks if a string contains another string (returns true/false)

**Examples:**

```javascript
"hello world".includes("world"); // true
"hello world".includes("bye"); // false
"hello world".includes("Hello"); // false (case-sensitive)
"hello world".includes(""); // true (empty string always found)
```

---

### `.startsWith(searchString)` and `.endsWith(searchString)`

**What they do:** Check if a string starts or ends with a specific value

**Examples:**

```javascript
"hello world".startsWith("hello"); // true
"hello world".startsWith("world"); // false
"hello world".endsWith("world"); // true
"hello world".endsWith("hello"); // false
"399p".endsWith("p"); // true
```

---

### `.indexOf(searchString)`

**What it does:** Find the position of a substring (returns -1 if not found)

**Examples:**

```javascript
"hello world".indexOf("o"); // 4 (first occurrence)
"hello world".indexOf("z"); // -1 (not found)
"hello world".indexOf("world"); // 6

// Common pattern: check if string exists
if ("hello world".indexOf("world") !== -1) {
  console.log("Found!");
}
```

---

### `.repeat(count)`

**What it does:** Repeats a string a specified number of times

**Examples:**

```javascript
"ha".repeat(3); // "hahaha"
"*".repeat(5); // "*****"
"-".repeat(10); // "----------"
"abc".repeat(0); // ""
```

---

### `.toLowerCase()`

**What it does:** Converts all characters to lowercase

**Examples:**

```javascript
"HELLO".toLowerCase(); // "hello"
"HeLLo".toLowerCase(); // "hello"
```

---

## Method Comparison Chart

| Method                   | Purpose                          | Returns | Modifies Original? |
| ------------------------ | -------------------------------- | ------- | ------------------ |
| `.substring(start, end)` | Extract part of string           | String  | No                 |
| `.slice(start, end)`     | Extract part (supports negative) | String  | No                 |
| `.charAt(index)`         | Get character at position        | String  | No                 |
| `.padStart(len, str)`    | Add padding at start             | String  | No                 |
| `.padEnd(len, str)`      | Add padding at end               | String  | No                 |
| `.trim()`                | Remove whitespace                | String  | No                 |
| `.toUpperCase()`         | Convert to uppercase             | String  | No                 |
| `.toLowerCase()`         | Convert to lowercase             | String  | No                 |
| `.replace(old, new)`     | Replace first match              | String  | No                 |
| `.replaceAll(old, new)`  | Replace all matches              | String  | No                 |
| `.split(separator)`      | Split into array                 | Array   | No                 |
| `.includes(str)`         | Check if contains                | Boolean | No                 |
| `.startsWith(str)`       | Check if starts with             | Boolean | No                 |
| `.endsWith(str)`         | Check if ends with               | Boolean | No                 |
| `.indexOf(str)`          | Find first position              | Number  | No                 |
| `.lastIndexOf(str)`      | Find last position               | Number  | No                 |
| `.repeat(count)`         | Repeat string                    | String  | No                 |
| `.length`                | Get string length                | Number  | No                 |

**Important:** Strings in JavaScript are **immutable** - none of these methods modify the original string. They all return a new string.
