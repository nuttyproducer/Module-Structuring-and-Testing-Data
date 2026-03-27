function getOrdinalNumber(inputNumber) {
  inputNumber = Number(inputNumber); // Convert input to a number (handles string inputs edge case)
  const absoluteNumber = Math.abs(inputNumber); // Use absolute value (handles negatives)
  const lastTwo = absoluteNumber % 100; // Get the last two digits (for 'teens' exception)
  let suffix = "th"; // Default suffix is 'th'

  if (lastTwo < 11 || lastTwo > 13) {
    // || is the "or" operator i learned by solving this function
    // If not 11, 12, or 13, use last digit rule
    const lastDigit = absoluteNumber % 10; // Get the last digit

    if (lastDigit === 1) {
      suffix = "st"; // 1st, 21st, etc.
    } else if (lastDigit === 2) {
      suffix = "nd"; // 2nd, 22nd, etc.
    } else if (lastDigit === 3) {
      suffix = "rd"; // 3rd, 23rd, etc.
    }
  }
  return inputNumber + suffix; // Return the number with the correct suffix
}

module.exports = getOrdinalNumber; // Export the function for use in other files
