function repeat(str, count) {
  if (count < 0) {
    throw new Error("Count must be non-negative number"); // 'throw' creates and sends an error, stopping the function immediately
  }
  if (count === 0) {
    return "";
  }
  if (count === 1) {
    return str;
  }
  let result = ""; // Start with an empty string to build the result
  for (let i = 0; i < count; i++) {
    // Loop 'count' times (i starts at 0, goes up to count +1)
    result += str; // Used an addition assignment operator. instead of result = result + str
  }
  return result;
}

module.exports = repeat;
