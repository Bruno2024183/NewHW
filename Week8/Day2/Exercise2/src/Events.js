import React, { useState } from 'react';

const Events = () => {
  // Parte I: Función clickMe
  const clickMe = () => {
    alert('I was clicked');
  };

  // Parte II: Función handleKeyDown
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`The Enter key was pressed, your input is: ${event.target.value}`);
    }
  };

  // Parte III: Hook de estado para toggle
  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleButton = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      {/* Parte I: Botón con evento onClick */}
      <button onClick={clickMe}>Click Me</button>

      {/* Parte II: Input con evento onKeyDown */}
      <br />
      <input type="text" placeholder="Press the ENTER key!" onKeyDown={handleKeyDown} />

      {/* Parte III: Botón con toggle de estado */}
      <br />
      <h3>Exercise 9:</h3>
      <button onClick={toggleButton}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default Events;