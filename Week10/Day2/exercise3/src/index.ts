// Base class Animal
class Animal {
    // Public property
    public name: string;
  
    // Constructor to initialize name
    constructor(name: string) {
      this.name = name;
    }
  
    // Method to make sound, can be overridden by subclasses
    public makeSound(): string {
      return "Some generic animal sound";
    }
  }
  
  // Subclass Dog that extends Animal
  class Dog extends Animal {
    // Constructor to initialize the Dog name
    constructor(name: string) {
      super(name); // Call the base class constructor
    }
  
    // Override the makeSound method to return a dog's sound
    public makeSound(): string {
      return "Bark";
    }
  }
  
  // Example usage:
  const myDog = new Dog("Buddy");
  
  // Call the makeSound method from the Dog class
  console.log(`${myDog.name} says: ${myDog.makeSound()}`); // Output: Buddy says: Bark