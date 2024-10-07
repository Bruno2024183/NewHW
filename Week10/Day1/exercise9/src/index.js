"use strict";
// Function implementation with default parameter
function greet(name) {
    if (name) {
        return `Hello, ${name}!`;
    }
    else {
        return "Hello, stranger!";
    }
}
// Test the function with different inputs
console.log(greet()); // Output: Hello, stranger!
console.log(greet("Alice")); // Output: Hello, Alice!
