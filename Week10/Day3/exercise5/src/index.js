"use strict";
// Define a generic function with a constraint on types that have a length property
function logLength(arg) {
    console.log(arg.length);
}
// Test the function with a string
logLength("Hello, world!"); // Output: 13
// Test the function with an array
logLength([1, 2, 3, 4, 5]); // Output: 5
// Test the function with an array of strings
logLength(["apple", "banana", "cherry"]); // Output: 3
// The following will cause an error because the number type doesn't have a length property
// logLength(123); // Uncommenting this line would cause a TypeScript error
