const height = 20; // Expression is the value
const width = 30;

// 5 + 3                    expression that produces 8
// height * width           expression that produces 300 (if height=10, width=30)
// 10.3                     expression that produces 10.3
// "Hello"                  expression that produces "Hello"
// 2 * height + 2 * width   expression that produces 80

const area = height * width;
const perimeter = 2 * height + 2 * width;

// Let's create some console logs
console.log("----    Total Area   ----");
console.log(area);
console.log();
console.log("---- Total perimeter ----");
console.log(perimeter);
console.log();

// With the template literal version
console.log("----    Total Area   ----");
console.log(`Area: ${area}`);
console.log();
console.log("---- Total perimeter ----");
console.log(`Perimeter: ${perimeter}`);
