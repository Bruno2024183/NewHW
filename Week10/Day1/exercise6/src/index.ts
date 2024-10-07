// Define the structure of a Person object using a type annotation
type Person = {
    name: string;
    age: number;
  };
  
  // Function that creates and returns a Person object
  function createPerson(name: string, age: number): Person {
    return { name, age };
  }
  
  // Test the createPerson function
  const person = createPerson("John Doe", 30);
  console.log(person);  // Output: { name: 'John Doe', age: 30 }