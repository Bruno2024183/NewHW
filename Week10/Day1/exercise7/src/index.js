"use strict";
// TypeScript code to manipulate DOM element using Type Assertion
// Get the input element from the DOM
const inputElement = document.getElementById('nameInput');
// Get the button element
const buttonElement = document.getElementById('setValueButton');
// Check if elements exist before proceeding
if (inputElement && buttonElement) {
    // Add an event listener to the button to set the input value when clicked
    buttonElement.addEventListener('click', () => {
        // Set the value of the input element
        inputElement.value = "Hello, TypeScript!";
        console.log("Input value set to:", inputElement.value);
    });
}
