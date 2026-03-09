const totalSecondsCoded = 203043; // total time spent coding in seconds

const remainingSeconds = totalSecondsCoded % 60; // Gives you the leftover seconds after calculating the minutes, this is a remainder
const totalMinutes = (totalSecondsCoded - remainingSeconds) / 60; // total full minutes
const remainingMinutes = totalMinutes % 60; // leftover minutes after counting full hours
const totalHours = (totalMinutes - remainingMinutes) / 60; // total full hours
const remainingHours = totalHours % 24; // leftover hours after counting full days
const totalDays = (totalHours - remainingHours) / 24; // total full days

if (totalHours >= 24) {
  console.log(
    `${totalDays}d ${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`
  );
} else {
  console.log(`${totalHours}h ${remainingMinutes}m ${remainingSeconds}s`);
}
// 6 declarations.

// 1
