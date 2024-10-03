import React from 'react';
import './App.css';

function App() {
  // Exercise 1 - JSX
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  return (
    <div className="App">
      {/* Display “Hello World!” in a paragraph */}
      <p>Hello World!</p>
      
      {/* Render the JSX element */}
      {myelement}
      
      {/* Render the sum inside a sentence */}
      <p>React is {sum} times better with JSX</p>
    </div>
  );
}

export default App;