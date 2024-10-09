class Employee {
    // Private properties
    private name: string;
    private salary: number;
  
    // Public property
    public position: string;
  
    // Protected property
    protected department: string;
  
    // Constructor to initialize the properties
    constructor(name: string, salary: number, position: string, department: string) {
      this.name = name;
      this.salary = salary;
      this.position = position;
      this.department = department;
    }
  
    // Public method to get employee information
    public getEmployeeInfo(): string {
      return `Name: ${this.name}, Position: ${this.position}`;
    }
  }
  
  // Example usage:
  const employee1 = new Employee("John Doe", 50000, "Developer", "IT");
  
  // Calling the public method
  console.log(employee1.getEmployeeInfo()); // Output: Name: John Doe, Position: Developer