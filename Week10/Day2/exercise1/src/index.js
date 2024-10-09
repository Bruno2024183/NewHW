"use strict";
class Employee {
    // Constructor to initialize the properties
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    // Public method to get employee information
    getEmployeeInfo() {
        return `Name: ${this.name}, Position: ${this.position}`;
    }
}
// Example usage:
const employee1 = new Employee("John Doe", 50000, "Developer", "IT");
// Calling the public method
console.log(employee1.getEmployeeInfo()); // Output: Name: John Doe, Position: Developer
