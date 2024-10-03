import React from 'react';
import './App.css';
import Color from './Color';

function App() {
  return (
    <div className="App">
      <h1>Favorite Color</h1>
      {/* Importar y mostrar el componente Color */}
      <Color />
    </div>
  );
}

export default App;