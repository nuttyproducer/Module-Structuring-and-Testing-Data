# JavaScript String Methods & Concepts Reference - Sprint 1

## Overview

This reference covers all the JavaScript methods and concepts encountered in Sprint-1 exercises.

## String Methods Used in Sprint-1

### `.substring(start, end)`

**What it does:** Extracts a portion of a string between two index positions

**Used in:** `3-to-pounds.js` - for extracting pounds and pence parts

**Syntax:**

- `string.substring(start)` - from start to end of string
- `string.substring(start, end)` - from start up to (but not including) end

**Parameters:**

- `start` - The index where extraction begins (0-based)
- `end` - The index where extraction ends (optional, not included in result)

**Examples:**

```javascript
"hello".substring(0, 3)     // "hel"
"hello".substring(2)        // "llo" (from index 2 to end)
"hello".substring(1, 4)     // "ell"
"399p".substring(0, 3)      // "399"

// Using with .length
const text = "hello";
text.substring(0, text.length - 1)  // "hell" (removes last char)
```

**Important Notes:**

- Index starts at 0
- End index is NOT included in the result
- If start > end, JavaScript swaps them
- Negative values are treated as 0

### `.padStart(targetLength, padString)`

**What it does:** Pads the current string with another string at the beginning until it reaches the target length

**Used in:** `3-to-pounds.js` - for ensuring at least 3 digits with leading zeros, `2-mandatory-errors/3.js` - for masking card numbers

**Syntax:**

- `string.padStart(targetLength, padString)`

**Parameters:**

- `targetLength` - The length the string should be after padding
- `padString` - The string to pad with (optional, default is space " ")

**Examples:**

```javascript
"5".padStart(3, "0")              // "005"
"50".padStart(3, "0")             // "050"
"500".padStart(3, "0")            // "500" (already 3, no change)
"5".padStart(5, "0")              // "00005"
"hi".padStart(5, "*")             // "***hi"
"abc".padStart(10, "123")         // "1231231abc"

// Real-world use case: time formatting
const hours = "9";
const minutes = "5";
const time = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
// Result: "09:05"

// Real-world use case: masking card numbers
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);  // "4213"
const masked = last4Digits.padStart(16, "*");         // "************4213"
```

**Important Notes:**

- If string is already >= targetLength, returns original string
- padString repeats if needed to fill the space
- If padString is too long, only the needed portion is used
- Commonly used for masking sensitive data (credit cards, SSN, etc.)

### `.padEnd(targetLength, padString)`

**What it does:** Pads the current string with another string at the end until it reaches the target length

**Used in:** `3-to-pounds.js` - for ensuring pence has 2 digits

**Syntax:**

- `string.padEnd(targetLength, padString)`

**Parameters:**

- `targetLength` - The length the string should be after padding
- `padString` - The string to pad with (optional, default is space " ")

**Examples:**

```javascript
"5".padEnd(2, "0")                // "50"
"50".padEnd(2, "0")               // "50" (already 2, no change)
"hi".padEnd(5, "*")               // "hi***"
"abc".padEnd(10, "123")           // "abc1231231"

// Real-world use case
const price = "5.5";
const formattedPrice = price.padEnd(4, "0");
// Result: "5.50"
```

**Important Notes:**

- Similar to padStart but adds characters to the end
- If string is already >= targetLength, returns original string
- padString repeats if needed to fill the space

### `.length`

**What it does:** Returns the number of characters in a string (property, not a method)

**Syntax:**

- `string.length`

**Examples:**

```javascript
"399p".length                     // 4
"hello".length                    // 5
"".length                         // 0
"a".length                        // 1
"hello world".length              // 11 (space counts!)

// Using in calculations
const text = "hello";
text.substring(0, text.length - 1)  // "hell"
text.substring(text.length - 2)     // "lo"
```

**Important Notes:**

- `.length` is a property, not a method (no parentheses)
- Counts all characters including spaces and special characters
- Zero-indexed: a string of length 5 has indices 0-4

### `.charAt(index)`

**What it does:** Returns the character at a specific index

**Used in:** `2-initials.js` - for getting first character of names

**Examples:**

```javascript
"hello".charAt(0)                 // "h"
"hello".charAt(4)                 // "o"
"hello".charAt(10)                // "" (empty string, not error)

// Alternative: bracket notation
"hello"[0]                        // "h"
"hello"[4]                        // "o"

// Real-world use case from Sprint-1
const firstName = "John";
const initial = firstName.charAt(0);  // "J"
// Or: firstName[0]
```

### `.slice(start, end)`

**What it does:** Extracts a section of a string and returns it as a new string

**Used in:** `2-mandatory-errors/3.js` - for extracting card number parts

**Syntax:**

- `string.slice(start, end)`

**Key Differences from substring:**

- Accepts negative indices (counts from the end)
- Doesn't swap parameters if start > end

**Examples:**

```javascript
"hello".slice(0, 3)               // "hel"
"hello".slice(2)                  // "llo"
"hello".slice(-2)                 // "lo" (last 2 chars)
"hello".slice(-3, -1)             // "ll"
"hello".slice(1, -1)              // "ell" (from index 1 to second-to-last)

// Card number example
const cardNumber = "1234567890123456";
const lastFour = cardNumber.slice(-4);  // "3456"
```

### `.lastIndexOf(searchString)`

**What it does:** Returns the last position where a substring is found (returns -1 if not found)

**Used in:** `3-paths.js` - for finding the last "/" in a file path

**Examples:**

```javascript
"hello world".lastIndexOf("o")      // 7 (last occurrence)
"hello world".lastIndexOf("l")      // 9
"hello world".lastIndexOf("z")      // -1 (not found)
"/user/docs/file.txt".lastIndexOf("/")  // 10

// Real-world use case from Sprint-1
const path = "/user/docs/file.txt";
const lastSlashIndex = path.lastIndexOf("/");
const directory = path.slice(0, lastSlashIndex);  // "/user/docs"
```

### `.toUpperCase()`

**What it does:** Converts all characters in a string to uppercase

**Used in:** `2-initials.js` - for capitalizing initials

**Examples:**

```javascript
"hello".toUpperCase(); // "HELLO"
"world".toUpperCase(); // "WORLD"
"HeLLo".toUpperCase(); // "HELLO"
"123".toUpperCase(); // "123" (no change)

// Real-world use case
const firstName = "john";
const initial = firstName[0].toUpperCase(); // "J"
```

### `.replaceAll(searchValue, replaceValue)`

**What it does:** Replaces all occurrences of a value (ES2021+)

**Used in:** `1-percentage-change.js` - for removing all commas from numbers

**Examples:**

```javascript
"hello world".replaceAll("o", "0")    // "hell0 w0rld"
"10,000".replaceAll(",", "")         // "10000"
"a-b-c".replaceAll("-", " ")         // "a b c"

// Same result as .replace() with /g flag
"10,000".replace(/,/g, "")           // "10000"
```

**Important Notes:**

- Requires Node.js v15.0.0+ or modern browsers
- Alternative: `.replace(/pattern/g, replacement)` for older environments

## Math Methods Used in Sprint-1

### `Math.random()`

**What it does:** Returns a random decimal number between 0 (inclusive) and 1 (exclusive)

**Used in:** `4-random.js` - for generating random numbers

**Examples:**

```javascript
Math.random()                     // 0.7364832947823947 (example)
Math.random()                     // 0.12847392837492 (different each time)

// Random number between 0 and 10
Math.random() * 10                // 7.364832947823947

// Random integer between 0 and 9
Math.floor(Math.random() * 10)    // 7
```

### `Math.floor(number)`

**What it does:** Rounds a number DOWN to the nearest integer

**Used in:** `4-random.js` - for converting random decimals to integers

**Examples:**

```javascript
Math.floor(4.9)                   // 4
Math.floor(4.1)                   // 4
Math.floor(4.0)                   // 4
Math.floor(-4.9)                  // -5 (rounds down, not towards zero!)

// Random integer from 1 to 6 (dice roll)
Math.floor(Math.random() * 6) + 1
```

**Related Methods:**

```javascript
Math.ceil(4.1)                    // 5 (rounds UP)
Math.round(4.5)                   // 5 (rounds to nearest)
Math.round(4.4)                   // 4
Math.trunc(4.9)                   // 4 (removes decimal, doesn't round)
```

## Type Conversion Used in Sprint-1

### `Number(value)`

**What it does:** Converts a value to a number

**Used in:** `1-percentage-change.js` - for converting strings to numbers

**Examples:**

```javascript
Number("123")                     // 123
Number("10000")                   // 10000
Number("3.14")                    // 3.14
Number("hello")                   // NaN (Not a Number)
Number("")                        // 0
Number(" 42 ")                    // 42 (trims whitespace)

// Real-world use case
const priceString = "10000";
const priceNumber = Number(priceString);  // 10000
const total = priceNumber * 1.2;          // 12000
```

**Alternative conversion methods:**

```javascript
parseInt("123")                   // 123 (only integers)
parseFloat("3.14")                // 3.14 (allows decimals)
+"123"                            // 123 (unary plus operator)
```

## Operators Used in Sprint-1

### Modulo Operator `%`

**What it does:** Returns the remainder after division

**Used in:** `2-time-format.js` - for extracting seconds and minutes, `coding-marathon-tracker.js` - for time breakdown

**Examples:**

```javascript
10 % 3                            // 1 (10 = 3×3 + 1)
17 % 5                            // 2 (17 = 5×3 + 2)
8784 % 60                         // 24 (leftover seconds)
146 % 60                          // 26 (leftover minutes)

// Check if number is even
10 % 2                            // 0 (even)
11 % 2                            // 1 (odd)

// Cycle through values (0-6 for days of week)
const day = dayNumber % 7;
```

**Real-world use case from Sprint-1:**

```javascript
const totalSeconds = 8784;
const remainingSeconds = totalSeconds % 60;  // 24
const totalMinutes = (totalSeconds - remainingSeconds) / 60;  // 146

// Breaking down time into days, hours, minutes, seconds
const totalSecondsCoded = 203043;
const remainingSeconds = totalSecondsCoded % 60;  // leftover seconds
const totalMinutes = (totalSecondsCoded - remainingSeconds) / 60;
const remainingMinutes = totalMinutes % 60;  // leftover minutes
const totalHours = (totalMinutes - remainingMinutes) / 60;
const remainingHours = totalHours % 24;  // leftover hours
const totalDays = (totalHours - remainingHours) / 24;  // full days
```

### Arithmetic Operators

**Used throughout Sprint-1 exercises**

```javascript
// Addition
5 + 3                             // 8
"Hello" + " " + "World"           // "Hello World"

// Subtraction
10 - 3                            // 7

// Multiplication
4 * 5                             // 20

// Division
20 / 4                            // 5
20 / 6                            // 3.3333...

// Exponentiation
2 ** 3                            // 8 (2 to the power of 3)
```

## Template Literals Used in Sprint-1

// Exponentiation
2 \*\* 3 // 8 (2 to the power of 3)

## Template Literals Used in Sprint-1

### Backticks `` ` ` `` for String Interpolation

**What it does:** Creates strings with embedded expressions

**Used in:** Multiple exercises - for formatting output

**Syntax:**

`string text ${expression} string text`

**Examples:**

```javascript
const name = "John";
const age = 30;

// Template literal (with backticks)
`My name is ${name} and I'm ${age} years old.`
// "My name is John and I'm 30 years old."

// With calculations
const hours = 2;
const minutes = 26;
const seconds = 24;
`${hours}:${minutes}:${seconds}` // "2:26:24"

// With method calls
const firstName = "john";
`Initial: ${firstName[0].toUpperCase()}` // "Initial: J"
```

**Important:**

- Use backticks `` ` ` `` NOT single quotes `'` or double quotes `"`
- Expressions inside `${}` are evaluated

## Console Methods Used in Sprint-1

### `console.log()`

**What it does:** Prints output to the console

**Examples:**

```javascript
console.log("Hello World");
console.log(42);
console.log("Result:", 42);

const name = "John";
console.log(`Hello ${name}`);

// Multiple values
console.log("Name:", name, "Age:", 30);
```

## Additional Useful String Methods

### `.split(separator)`

**What it does:** Splits a string into an array based on a separator

**Examples:**

```javascript
"hello world".split(" ") // ["hello", "world"]
"a,b,c".split(",") // ["a", "b", "c"]
"hello".split("") // ["h", "e", "l", "l", "o"]
"2024-03-05".split("-") // ["2024", "03", "05"]

// Can be used with .join() to replace text
"10,000".split(",").join("") // "10000"
```

### `.trim()`, `.trimStart()`, `.trimEnd()`

**What they do:** Remove whitespace from strings

**Examples:**

```javascript
" hello ".trim() // "hello"
" hello ".trimStart() // "hello "
" hello ".trimEnd() // " hello"
" ".trim() // ""
```

### `.includes(searchString)`

**What it does:** Checks if a string contains another string (returns true/false)

**Examples:**

```javascript
"hello world".includes("world") // true
"hello world".includes("bye") // false
"hello world".includes("Hello") // false (case-sensitive)
"hello world".includes("") // true (empty string always found)
```

### `.startsWith(searchString)` and `.endsWith(searchString)`

**What they do:** Check if a string starts or ends with a specific value

**Examples:**

```javascript
"hello world".startsWith("hello") // true
"hello world".startsWith("world") // false
"hello world".endsWith("world") // true
"hello world".endsWith("hello") // false
"399p".endsWith("p") // true
```

### `.indexOf(searchString)`

**What it does:** Find the position of a substring (returns -1 if not found)

**Examples:**

```javascript
"hello world".indexOf("o") // 4 (first occurrence)
"hello world".indexOf("z") // -1 (not found)
"hello world".indexOf("world") // 6

// Common pattern: check if string exists
if ("hello world".indexOf("world") !== -1) {
    console.log("Found!");
}
```

### `.repeat(count)`

**What it does:** Repeats a string a specified number of times

**Examples:**

```javascript
"ha".repeat(3) // "hahaha"
"*".repeat(5) // "*****"
"-".repeat(10) // "----------"
"abc".repeat(0) // ""
```

### `.toLowerCase()`

**What it does:** Converts all characters to lowercase

**Examples:**

```javascript
"HELLO".toLowerCase() // "hello"
"HeLLo".toLowerCase() // "hello"
```

## Advanced Patterns Learned

### Card Number Masking with Dashes

**Pattern:** Mask all but the last 4 digits and add dashes every 4 characters

**Used in:** `2-mandatory-errors/3.js`

**Complete Example:**

```javascript
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);  // "4213"
const masked = last4Digits.padStart(cardNumber.toString().length, "*");  // "************4213"

// Add dashes every 4 characters
let maskedWithDashes = "";
for (let i = 0; i < masked.length; i += 4) {
  if (i > 0) maskedWithDashes += "-";
  maskedWithDashes += masked.slice(i, i + 4);
}
console.log(maskedWithDashes);  // "****-****-****-4213"
```

**Key Concepts:**

- Convert number to string with `.toString()`
- Extract last N characters with `.slice(-N)`
- Pad with characters using `.padStart()`
- Loop through string in chunks with `for (let i = 0; i < str.length; i += chunkSize)`
- Build string incrementally with `+=`
- Conditional formatting with `if (i > 0)` to avoid leading separator

### Time Breakdown Pattern (Seconds → Days/Hours/Minutes/Seconds)

**Pattern:** Convert total seconds into formatted time units

**Complete Example:**

```javascript
const totalSecondsCoded = 203043;  // total time spent coding in seconds

const remainingSeconds = totalSecondsCoded % 60;  // leftover seconds after counting full minutes
const totalMinutes = (totalSecondsCoded - remainingSeconds) / 60;  // total full minutes

const remainingMinutes = totalMinutes % 60;  // leftover minutes after counting full hours
const totalHours = (totalMinutes - remainingMinutes) / 60;  // total full hours

const remainingHours = totalHours % 24;  // leftover hours after counting full days
const totalDays = (totalHours - remainingHours) / 24;  // total full days

if (totalHours >= 24) {
  console.log(`${totalDays}d ${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`);
} else {
  console.log(`${totalHours}h ${remainingMinutes}m ${remainingSeconds}s`);
}
```

**Key Concepts:**

- Use modulo `%` to get remainders (leftover units)
- Subtract remainder before dividing to get whole units
- Pattern repeats at each level: seconds→minutes→hours→days
- Use conditional `if/else` to show appropriate format
- Each step: `remaining = total % divisor`, then `nextTotal = (total - remaining) / divisor`

### For Loop with Custom Step

**Pattern:** Loop through a string or array in chunks

**Used in:** Card masking example

**Syntax:**

```javascript
for (let i = 0; i < length; i += stepSize) {
  // process chunk starting at i
}
```

**Examples:**

```javascript
// Process every 4 characters
for (let i = 0; i < str.length; i += 4) {
  console.log(str.slice(i, i + 4));
}

// Generate 5 random numbers
for (let i = 0; i < 5; i++) {
  console.log(Math.floor(Math.random() * 100));
}

// Count by 10s
for (let i = 0; i <= 100; i += 10) {
  console.log(i);  // 0, 10, 20, 30...
}
```

**Key Concepts:**

- `i += 4` moves forward by 4 each iteration (not just 1)
- Use `.slice(i, i + chunkSize)` to extract each chunk
- Common for formatting strings in groups
