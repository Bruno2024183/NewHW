"use strict";
// Base class Animal
class Animal {
    // Constructor to initialize name
    constructor(name) {
        this.name = name;
    }
    // Method to make sound, can be overridden by subclasses
    makeSound() {
        return "Some generic animal sound";
    }
}
// Subclass Dog that extends Animal
class Dog extends Animal {
    // Constructor to initialize the Dog name
    constructor(name) {
        super(name); // Call the base class constructor
    }
    // Override the makeSound method to return a dog's sound
    makeSound() {
        return "Bark";
    }
}
// Example usage:
const myDog = new Dog("Buddy");
// Call the makeSound method from the Dog class
console.log(`${myDog.name} says: ${myDog.makeSound()}`); // Output: Buddy says: Bark
