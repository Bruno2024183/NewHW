import React from 'react';
import Greeting from './Greeting';  // Import the Greeting component

function App() {
  return (
    <div className="App">
      <Greeting name="Bruno" /> {/* Pass a name prop */}
    </div>
  );
}

export default App;