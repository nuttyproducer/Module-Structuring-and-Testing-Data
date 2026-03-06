// METHOD CHAINING PRACTICE
// Method chaining means connecting multiple methods together in one go!
// Like: array.split().map().join() — no need for intermediate variables.
//
// For each exercise, try to solve it in ONE return statement using method chaining.
// Use arrow functions inside .map()!
//
// EXAMPLE:
// function reverseWords(str) {
//   return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// }

// ============================================================
// Exercise 1: Shout every word (uppercase + "!")
// ============================================================
// "good morning" => "GOOD! MORNING!"
// Real world: notification banners, alerts

function shoutWords(str) {
  return; // Your code here
  // HINT: split by space, map each word to word.toUpperCase() + "!", join with space
}

console.log(shoutWords("good morning")); // "GOOD! MORNING!"
console.log(shoutWords("hello world")); // "HELLO! WORLD!"

// ============================================================
// Exercise 2: Price list formatter
// ============================================================
// Add a "$" before each price number in the array
// [5, 12, 99, 3] => ["$5", "$12", "$99", "$3"]
// Real world: e-commerce product listings

function formatPrices(prices) {
  return; // Your code here
  // HINT: map each price to `$${price}`
}

console.log(formatPrices([5, 12, 99, 3])); // ["$5", "$12", "$99", "$3"]

// ============================================================
// Exercise 3: Username generator
// ============================================================
// Convert full names to lowercase usernames with no spaces
// ["Alice Smith", "Bob Jones"] => ["alice_smith", "bob_jones"]
// Real world: creating usernames for a website

function generateUsernames(names) {
  return; // Your code here
  // HINT: map each name to name.toLowerCase().replace(' ', '_')
}

console.log(generateUsernames(["Alice Smith", "Bob Jones", "Charlie Brown"]));
// ["alice_smith", "bob_jones", "charlie_brown"]

// ============================================================
// Exercise 4: Star rating formatter
// ============================================================
// Convert numbers to star strings
// [3, 5, 1, 4] => ["***", "*****", "*", "****"]
// Real world: product review systems

function formatStars(ratings) {
  return; // Your code here
  // HINT: map each rating to "*".repeat(rating)
}

console.log(formatStars([3, 5, 1, 4])); // ["***", "*****", "*", "****"]

// ============================================================
// Exercise 5: Email domain extractor
// ============================================================
// Extract the domain from each email address
// ["alice@gmail.com", "bob@yahoo.com"] => ["gmail.com", "yahoo.com"]
// Real world: analytics, filtering users by email provider

function extractDomains(emails) {
  return; // Your code here
  // HINT: map each email, split by "@", and take the last part [1]
}

console.log(
  extractDomains(["alice@gmail.com", "bob@yahoo.com", "charlie@hotmail.com"])
);
// ["gmail.com", "yahoo.com", "hotmail.com"]

// ============================================================
// Exercise 6: Shopping cart total formatter
// ============================================================
// Multiply each price by quantity and format as "$X"
// [{price: 5, qty: 2}, {price: 10, qty: 3}] => ["$10", "$30"]
// Real world: e-commerce checkout

function formatCartTotals(items) {
  return; // Your code here
  // HINT: map each item to `$${item.price * item.qty}`
}

console.log(
  formatCartTotals([
    { price: 5, qty: 2 },
    { price: 10, qty: 3 },
    { price: 8, qty: 1 },
  ])
); // ["$10", "$30", "$8"]

// ============================================================
// Exercise 7: Hashtag generator
// ============================================================
// Convert words to hashtags (lowercase with # prefix)
// ["JavaScript", "coding", "Fun"] => ["#javascript", "#coding", "#fun"]
// Real world: social media auto-tagging

function generateHashtags(words) {
  return; // Your code here
  // HINT: map each word to "#" + word.toLowerCase()
}

console.log(generateHashtags(["JavaScript", "Coding", "Fun", "HYF"]));
// ["#javascript", "#coding", "#fun", "#hyf"]

// ============================================================
// Exercise 8: Initials extractor
// ============================================================
// Extract initials from full names
// ["Alice Smith", "Bob Jones"] => ["A.S.", "B.J."]
// Real world: user avatars, name badges

function extractInitials(names) {
  return; // Your code here
  // HINT: split each name by " ", map each word to word[0], join with ".", add "." at end
}

console.log(extractInitials(["Alice Smith", "Bob Jones", "Charlie Brown"]));
// ["A.S.", "B.J.", "C.B."]
