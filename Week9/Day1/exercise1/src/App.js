import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./App.css"; // Add this for custom styles

// Theme switcher component
function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <button onClick={toggleTheme} className="theme-button">
        Toggle Theme
      </button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;