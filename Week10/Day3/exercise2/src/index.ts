// Function that accepts a number or string and returns a description
function describeValue(value: number | string): string {
    if (typeof value === "number") {
        return "This is a number";
    } else if (typeof value === "string") {
        return "This is a string";
    }
    // Add a return statement to handle any unexpected cases (shouldn't happen)
    return "Unknown type";
}

// Testing the function
console.log(describeValue(42));           // Output: "This is a number"
console.log(describeValue("Hello World")); // Output: "This is a string"