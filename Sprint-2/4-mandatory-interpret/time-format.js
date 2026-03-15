function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// It's been called 3 times : For totalHours, remainingMinutes and remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// The value is 0 but being padded to 00.

// c) What is the return value of pad is called for the first time?
// The value 0 will return padded to 00.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// The value 1 will return padded to 01.
