import React from 'react';

// Define the interface for props
interface GreetingProps {
  name: string;
}

// Functional component accepting props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default Greeting;