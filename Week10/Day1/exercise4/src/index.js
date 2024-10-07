"use strict";
// Function to check if a number is positive, negative, or zero
function checkNumberStatus(num) {
    if (num > 0) {
        return "The number is positive.";
    }
    else if (num < 0) {
        return "The number is negative.";
    }
    else {
        return "The number is zero.";
    }
}
// Test the function with different values
console.log(checkNumberStatus(10)); // Positive
console.log(checkNumberStatus(-5)); // Negative
console.log(checkNumberStatus(0)); // Zero
