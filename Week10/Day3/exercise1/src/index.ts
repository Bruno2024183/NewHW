// Define the Person type
type Person = {
    name: string;
    age: number;
  };
  
  // Define the Address type
  type Address = {
    street: string;
    city: string;
  };
  
  // Intersection type combining Person and Address
  type PersonWithAddress = Person & Address;
  
  // Create a variable of type PersonWithAddress
  const person: PersonWithAddress = {
    name: "John Doe",
    age: 30,
    street: "123 Main St",
    city: "New York"
  };
  
  // Log the person details
  console.log(person);