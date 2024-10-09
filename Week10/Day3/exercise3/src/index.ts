// Declaring a variable with 'any' type
let someValue: any = "This is a string";

// Type casting 'someValue' to a string using the 'as' keyword
let stringLength: number = (someValue as string).length;

// Logging the string and its length
console.log(`Value: ${someValue}`);
console.log(`String length: ${stringLength}`);