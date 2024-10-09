"use strict";
// Type guard for checking if the employee is a Manager
function isManager(employee) {
    return employee.position === "Manager";
}
// Type guard for checking if the employee is a Developer
function isDeveloper(employee) {
    return employee.position === "Developer";
}
// Function to describe the employee based on their job
function describeEmployee(employee) {
    if (isManager(employee)) {
        return `${employee.name} is a Manager in the ${employee.department} department.`;
    }
    else if (isDeveloper(employee)) {
        return `${employee.name} is a Developer in the ${employee.department} department.`;
    }
    else {
        return `${employee.name} works in the ${employee.department} department as a ${employee.position}.`;
    }
}
// Test the function with different employees
const manager = { name: "Alice", age: 40, position: "Manager", department: "HR" };
const developer = { name: "Bob", age: 30, position: "Developer", department: "Engineering" };
const designer = { name: "Eve", age: 28, position: "Designer", department: "Marketing" };
console.log(describeEmployee(manager)); // Output: Alice is a Manager in the HR department.
console.log(describeEmployee(developer)); // Output: Bob is a Developer in the Engineering department.
console.log(describeEmployee(designer)); // Output: Eve works in the Marketing department as a Designer.
