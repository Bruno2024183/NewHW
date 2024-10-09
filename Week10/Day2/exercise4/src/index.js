"use strict";
// Create a Calculator class with static methods
class Calculator {
    // Static method for adding two numbers
    static add(a, b) {
        return a + b;
    }
    // Static method for subtracting two numbers
    static subtract(a, b) {
        return a - b;
    }
}
// Example usage:
// Call static methods directly on the class without creating an instance
console.log(Calculator.add(10, 5)); // Output: 15
console.log(Calculator.subtract(10, 5)); // Output: 5
