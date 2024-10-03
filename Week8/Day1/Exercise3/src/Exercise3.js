import React, { Component } from 'react';
import './Exercise.css'; // We will create this file later

class Exercise extends Component {
  render() {
    // PART II: Style object for the second <h1> tag
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        {/* PART I: Create an h1 tag with red text and light blue background */}
        <h1 style={{ color: 'red', backgroundColor: 'lightblue' }}>This is a Header</h1>

        {/* PART I: Create a paragraph */}
        <p className="para">This is a Paragraph</p>

        {/* PART I: Create a link */}
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">This is a Link</a>

        {/* PART I: Create a form */}
        <h3>This is a Form:</h3>
        <form>
          <label>Enter your name:</label><br/>
          <input type="text" /><br/>
          <input type="submit" value="Submit" />
        </form>

        {/* PART I: Create an image */}
        <h3>Here is an Image:</h3>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" style={{ width: '300px' }} />

        {/* PART I: Create a list */}
        <h3>This is a List:</h3>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>

        {/* PART II: Using the style object for another <h1> */}
        <h1 style={style_header}>Styled Header using an Object</h1>
      </div>
    );
  }
}

export default Exercise;