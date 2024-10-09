"use strict";
class Product {
    // Constructor to initialize the properties
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // Method to return product info
    getProductInfo() {
        return `Product Name: ${this.name}, Price: $${this.price}`;
    }
}
// Example usage:
const product1 = new Product(1, "Laptop", 1200);
// Calling the public method
console.log(product1.getProductInfo()); // Output: Product Name: Laptop, Price: $1200
// Attempt to modify the readonly property
// This will result in a TypeScript error
// product1.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
console.log(`Product ID: ${product1.id}`); // Output: Product ID: 1
