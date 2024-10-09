// Define a generic function with a constraint that ensures T has a toString method
function formatInput<T extends { toString(): string }>(input: T): string {
    // First, convert the input to a string using toString()
    const formattedInput = input.toString().toUpperCase();
    return `Formatted input: ${formattedInput}`;
  }
  
  // Test cases
  
  // Test with a number (which has a toString method)
  const numberInput = 42;
  console.log(formatInput(numberInput)); // Output: Formatted input: 42
  
  // Test with a string (already a string)
  const stringInput = "hello";
  console.log(formatInput(stringInput)); // Output: Formatted input: HELLO
  
  // Test with a Date object (Date has a toString method)
  const dateInput = new Date(2024, 9, 5);
  console.log(formatInput(dateInput)); // Output: Formatted input: SAT OCT 05 2024 00:00:00 GMT+0000 (COORDINATED UNIVERSAL TIME)
  
  // Test with a custom object that has a toString method
  class CustomObject {
    toString(): string {
      return "Custom Object";
    }
  }
  
  const customObjectInput = new CustomObject();
  console.log(formatInput(customObjectInput)); // Output: Formatted input: CUSTOM OBJECT