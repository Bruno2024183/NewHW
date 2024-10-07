import React, { useRef, useState } from "react";
import "./CharacterCounter.css";

function CharacterCounter() {
  const inputRef = useRef(null); // Creating the reference to track the input field
  const [charCount, setCharCount] = useState(0); // Setting up state for character count

  // Event handler to track input changes
  const handleInputChange = () => {
    const textLength = inputRef.current.value.length;
    setCharCount(textLength); // Update the state with the character count
  };

  return (
    <div className="counter-container">
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef} // Connecting the reference to the textarea
        onChange={handleInputChange} // Event listener for input changes
        placeholder="Type something..."
        rows="5"
        cols="30"
      ></textarea>
      <p>Character Count: {charCount}</p>
    </div>
  );
}

export default CharacterCounter;