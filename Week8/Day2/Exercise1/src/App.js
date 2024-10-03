import React from 'react';
import './App.css';
import Car from './Components/Car';

function App() {
  // Parte I: Creamos el objeto con la información del coche
  const carInfo = { name: "Ford", model: "Mustang" };

  return (
    <div className="App">
      {/* Importamos y usamos el componente Car */}
      <Car carInfo={carInfo} />
    </div>
  );
}

export default App;