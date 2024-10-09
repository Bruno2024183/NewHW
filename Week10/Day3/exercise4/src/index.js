"use strict";
// Function to get the first element as a string using type assertions
function getFirstElement(arr) {
    return arr[0];
}
// Test the function with mixed arrays
console.log(getFirstElement(["hello", 42])); // Output: "hello"
console.log(getFirstElement([100, "world"])); // Output: "100"
