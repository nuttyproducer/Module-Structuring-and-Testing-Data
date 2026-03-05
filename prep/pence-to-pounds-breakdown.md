# Pence to Pounds Converter - Step-by-Step Breakdown

## The Problem

Convert a price from pence format (e.g., "399p") to pounds format (e.g., "£3.99")

**Key Fact:** 100 pence = 1 pound

---

## The Code

```javascript
const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);
```

---

## Step-by-Step Breakdown

### Step 1: Initialize the Input

```javascript
const penceString = "399p";
```

**Purpose:** Creates a string variable with the value "399p" representing 399 pence

---

### Step 2: Remove the "p" Suffix

```javascript
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
```

**What it does:**

- `penceString.length` = 4
- `penceString.length - 1` = 3
- `.substring(0, 3)` extracts characters from index 0 up to (but not including) index 3
- Effectively removes the last character

**Result:** `"399"`

**Visual:**

```
"399p"
 0123  ← indices

Extract from 0 to 3:
"399" ✓
```

---

### Step 3: Pad with Leading Zeros

```javascript
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
```

**What it does:**

- `.padStart(3, "0")` ensures the string is at least 3 characters long
- If shorter than 3, it adds "0"s at the beginning
- If already 3 or longer, no change

**Result with "399":** `"399"` (no change, already 3 chars)

**Why this matters:**

- Ensures we can always split the last 2 digits as pence
- Handles small values correctly

**Examples:**

```
"5"   → "005"  (added two 0s)
"50"  → "050"  (added one 0)
"399" → "399"  (no change)
"1234" → "1234" (no change, already > 3)
```

---

### Step 4: Extract Pounds

```javascript
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
```

**What it does:**

- `paddedPenceNumberString.length - 2` = 3 - 2 = 1
- `.substring(0, 1)` extracts everything from the start up to (but not including) the last 2 digits
- The last 2 digits represent pence, so everything before is pounds

**Result:** `"3"`

**Visual:**

```
"399"
 ↑ ↑↑
 │ └─ Last 2 digits (pence)
 └─── Everything before (pounds)

pounds = "3"
```

---

### Step 5: Extract Pence

```javascript
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
```

**What it does:**

- `.substring(3 - 2)` = `.substring(1)` extracts from index 1 to the end (last 2 digits)
- `.padEnd(2, "0")` ensures the pence has 2 digits by adding trailing zeros if needed

**Result after substring:** `"99"`
**Result after padEnd:** `"99"` (already 2 digits, no change)

**Visual:**

```
"399"
  ↑↑
  └─ Extract from index 1 to end

pence = "99"
```

**Why padEnd?** Handles edge cases:

```
"9" → "90"  (adds one 0 at the end)
"99" → "99" (no change)
```

---

### Step 6: Format and Display

```javascript
console.log(`£${pounds}.${pence}`);
```

**What it does:**

- Uses template literal to combine pounds and pence with formatting
- Adds pound symbol (£) and decimal point

**Output:** `£3.99`

---

## Complete Visual Trace

### Example 1: "399p" (399 pence = £3.99)

```
Step 1: "399p"              (input)
         ↓
Step 2: "399"               (remove "p")
         ↓
Step 3: "399"               (pad to 3 chars - no change)
         ↓
Step 4: Split into pounds and pence
        "3" + "99"
         ↓
Step 5: Format
        "£3.99"
```

### Example 2: "5p" (5 pence = £0.05)

```
Step 1: "5p"                (input)
         ↓
Step 2: "5"                 (remove "p")
         ↓
Step 3: "005"               (pad to 3 chars - added "00")
         ↓
Step 4: Split into pounds and pence
        "0" + "05"
         ↓
Step 5: Format
        "£0.05"
```

### Example 3: "1234p" (1234 pence = £12.34)

```
Step 1: "1234p"             (input)
         ↓
Step 2: "1234"              (remove "p")
         ↓
Step 3: "1234"              (pad to 3 chars - no change, already > 3)
         ↓
Step 4: Split into pounds and pence
        "12" + "34"
         ↓
Step 5: Format
        "£12.34"
```

### Example 4: "50p" (50 pence = £0.50)

```
Step 1: "50p"               (input)
         ↓
Step 2: "50"                (remove "p")
         ↓
Step 3: "050"               (pad to 3 chars - added "0")
         ↓
Step 4: Split into pounds and pence
        "0" + "50"
         ↓
Step 5: Format
        "£0.50"
```

---

## Key String Methods Used in This Code

### `.substring(start, end)`

**What it does:** Extracts a portion of a string between two index positions

**Syntax:**

- `string.substring(start)` - from start to end of string
- `string.substring(start, end)` - from start up to (but not including) end

**Parameters:**

- `start` - The index where extraction begins (0-based)
- `end` - The index where extraction ends (optional, not included in result)

**Examples:**

```javascript
"hello".substring(0, 3); // "hel"
"hello".substring(2); // "llo" (from index 2 to end)
"hello".substring(1, 4); // "ell"
"399p".substring(0, 3); // "399"

// Using with .length
const text = "hello";
text.substring(0, text.length - 1); // "hell" (removes last char)
```

**Important Notes:**

- Index starts at 0
- End index is NOT included in the result
- If start > end, JavaScript swaps them
- Negative values are treated as 0

---

### `.padStart(targetLength, padString)`

**What it does:** Pads the current string with another string at the beginning until it reaches the target length

**Syntax:**

- `string.padStart(targetLength, padString)`

**Parameters:**

- `targetLength` - The length the string should be after padding
- `padString` - The string to pad with (optional, default is space " ")

**Examples:**

```javascript
"5".padStart(3, "0"); // "005"
"50".padStart(3, "0"); // "050"
"500".padStart(3, "0"); // "500" (already 3, no change)
"5".padStart(5, "0"); // "00005"
"hi".padStart(5, "*"); // "***hi"
"abc".padStart(10, "123"); // "1231231abc"

// Real-world use case
const hours = "9";
const minutes = "5";
const time = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
// Result: "09:05"
```

**Important Notes:**

- If string is already >= targetLength, returns original string
- padString repeats if needed to fill the space
- If padString is too long, only the needed portion is used

---

### `.padEnd(targetLength, padString)`

**What it does:** Pads the current string with another string at the end until it reaches the target length

**Syntax:**

- `string.padEnd(targetLength, padString)`

**Parameters:**

- `targetLength` - The length the string should be after padding
- `padString` - The string to pad with (optional, default is space " ")

**Examples:**

```javascript
"5".padEnd(2, "0"); // "50"
"50".padEnd(2, "0"); // "50" (already 2, no change)
"hi".padEnd(5, "*"); // "hi***"
"abc".padEnd(10, "123"); // "abc1231231"

// Real-world use case
const price = "5.5";
const formattedPrice = price.padEnd(4, "0");
// Result: "5.50"
```

**Important Notes:**

- Similar to padStart but adds characters to the end
- If string is already >= targetLength, returns original string
- padString repeats if needed to fill the space

---

### `.length`

**What it does:** Returns the number of characters in a string (property, not a method)

**Syntax:**

- `string.length`

**Examples:**

```javascript
"399p".length; // 4
"hello".length; // 5
"".length; // 0
"a".length; // 1
"hello world".length; // 11 (space counts!)

// Using in calculations
const text = "hello";
text.substring(0, text.length - 1); // "hell"
text.substring(text.length - 2); // "lo"
```

**Important Notes:**

- `.length` is a property, not a method (no parentheses)
- Counts all characters including spaces and special characters
- Zero-indexed: a string of length 5 has indices 0-4

---

## Additional Useful String Methods

Even though these methods aren't used in the pence-to-pounds code, they're commonly used for string manipulation:

### `.slice(start, end)`

**What it does:** Similar to `.substring()` but with more features

**Key Differences from substring:**

- Accepts negative indices (counts from the end)
- Doesn't swap parameters if start > end

**Examples:**

```javascript
"hello".slice(0, 3); // "hel"
"hello".slice(2); // "llo"
"hello".slice(-2); // "lo" (last 2 chars)
"hello".slice(-3, -1); // "ll"
"hello".slice(1, -1); // "ell" (from index 1 to second-to-last)
```

---

### `.charAt(index)`

**What it does:** Returns the character at a specific index

**Examples:**

```javascript
"hello".charAt(0); // "h"
"hello".charAt(4); // "o"
"hello".charAt(10); // "" (empty string, not error)

// Alternative: bracket notation
"hello"[0]; // "h"
"hello"[4]; // "o"
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

### `.toUpperCase()` and `.toLowerCase()`

**What they do:** Convert string case

**Examples:**

```javascript
"hello".toUpperCase(); // "HELLO"
"WORLD".toLowerCase(); // "world"
"HeLLo".toLowerCase(); // "hello"
```

---

### `.replace(searchValue, replaceValue)`

**What it does:** Replaces the first occurrence of a value

**Examples:**

```javascript
"hello world".replace("o", "0"); // "hell0 world" (only first "o")
"hello world".replace("l", "L"); // "heLlo world" (only first "l")

// To replace ALL occurrences, use replaceAll or regex
"hello world".replaceAll("o", "0"); // "hell0 w0rld"
"hello world".replace(/o/g, "0"); // "hell0 w0rld" (regex with g flag)
```

---

### `.replaceAll(searchValue, replaceValue)`

**What it does:** Replaces all occurrences of a value

**Examples:**

```javascript
"hello world".replaceAll("o", "0"); // "hell0 w0rld"
"10,000".replaceAll(",", ""); // "10000"
"a-b-c".replaceAll("-", " "); // "a b c"
```

---

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

### `.indexOf(searchString)` and `.lastIndexOf(searchString)`

**What they do:** Find the position of a substring (returns -1 if not found)

**Examples:**

```javascript
"hello world".indexOf("o"); // 4 (first occurrence)
"hello world".lastIndexOf("o"); // 7 (last occurrence)
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

---

## The Logic in Plain English

1. **Remove the "p"** from the end of the string
2. **Ensure at least 3 digits** by adding zeros at the front if needed
3. **Split the number:** Last 2 digits = pence, everything else = pounds
4. **Format** as currency with £ symbol and decimal point

This works because in British currency, 100 pence = 1 pound, so the last 2 digits always represent the pence portion!
