## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?

Console is an object that stores functions for logging and debugging (like log, assert, warn, etc.).

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

The . is called “dot notation.” It means you’re accessing a property or method of an object.

console.log means “the log function inside the console object.”

console.assert means “the assert function inside the console object.”

Example:console.assert(2 + 2 === 5, "Math is broken!");
If the condition is true, nothing happens.
If it’s false, you see the message.
