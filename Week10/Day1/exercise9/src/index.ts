// Function overloading declarations
function greet(): string;
function greet(name: string): string;

// Function implementation with default parameter
function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return "Hello, stranger!";
    }
}

// Test the function with different inputs
console.log(greet());          // Output: Hello, stranger!
console.log(greet("Alice"));   // Output: Hello, Alice!