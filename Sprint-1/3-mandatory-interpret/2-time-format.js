const movieLength = 3661; // length of movie in seconds

const remainingSeconds = movieLength % 60; // Gives you the leftover seconds after calculating the minutes, this is a remainder
const totalMinutes = (movieLength - remainingSeconds) / 60; // total full minutes

const remainingMinutes = totalMinutes % 60; // leftover minutes after counting full hours
const totalHours = (totalMinutes - remainingMinutes) / 60; // total full hours

const remainingHours = totalHours % 24; // leftover hours after counting full days
const totalDays = (totalHours - remainingHours) / 24; // total full days

if (totalHours < 24) {
  console.log(
    `Time remaining: ${totalHours}:${remainingMinutes}:${remainingSeconds}`
  );
} else {
  console.log(
    `Time remaining: ${totalDays} Days, ${remainingHours}:${remainingMinutes}:${remainingSeconds}`
  );
}

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//    - 6

// b) How many function calls are there?
//    - 1
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//
// We are talking about the modulo operator "%" It's will add 60 to the movieLength -> 43 minutes with 23 seconds left.
// Those remaining seconds are the remainingSeconds.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//    - Takes total movie length and subtracts remaining movie length and divides it by 60 to get minutes from the seconds.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//    - I would change it to totalTime or timeLeft

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//    - All round numbers work, decimal numbers too but gives strange outcome. Zero works too but outputs 0:0:0.
