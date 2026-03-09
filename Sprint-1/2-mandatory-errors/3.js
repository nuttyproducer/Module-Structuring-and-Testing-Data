// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// Fix: Convert the cardNumber to a string

const cardNumber = 4533787178994213; // Example card number
const last4Digits = cardNumber.toString().slice(-4); // Get the last 4 digits as a string
const masked = last4Digits.padStart(cardNumber.toString().length, "*"); // Pad with * to mask all but last 4 digits

let maskedWithDashes = ""; // Start with an empty string to build the dashed version
for (let i = 0; i < masked.length; i += 4) {
  // Loop through the masked string in groups of 4
  if (i > 0) maskedWithDashes += "-"; // Add a dash before each group except the first
  maskedWithDashes += masked.slice(i, i + 4); // Add the next group of 4 characters
}

console.log(maskedWithDashes); // Output: ****-****-****-4213
