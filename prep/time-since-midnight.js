// Your task is to write a function which returns the time since midnight in milliseconds.
// Example: h = 0, m = 1, s = 1 => result = 61000
// Input constraints: 0 <= h <= 23, 0 <= m <= 59, 0 <= s <= 59

function past(h, m, s) {
  const hoursInMs = h * 60 * 60 * 1000;
  const minutesInMs = m * 60 * 1000;
  const secondsInMs = s * 1000;
  const totalMs = hoursInMs + minutesInMs + secondsInMs;
  return totalMs;
}

console.log(past(0, 1, 1));
console.log(past(1, 1, 1));
console.log(past(0, 0, 0));
console.log(past(1, 0, 1));
console.log(past(1, 0, 0));

// ----------- Here's an other way to do it -----------------
//  function past(h, m, s){
//      return ((h*3600)+(m*60)+s)*1000;
//  }
// ----------------------------------------------------------
//  const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);
// ----------------------------------------------------------
