"use strict";
// Function that creates and returns a Person object
function createPerson(name, age) {
    return { name, age };
}
// Test the createPerson function
const person = createPerson("John Doe", 30);
console.log(person); // Output: { name: 'John Doe', age: 30 }
