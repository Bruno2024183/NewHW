import React, { useState } from 'react';
import Garage from './Garage';

const Car = ({ carInfo }) => {
  // Parte II: Usamos el hook useState para agregar una variable de color
  const [color, setColor] = useState("red");

  return (
    <div>
      {/* Parte I: Mostrar el modelo del coche */}
      <h2>This car is a {color} {carInfo.model}</h2>

      {/* Parte III: Mostrar el componente Garage */}
      <Garage size="small" />
    </div>
  );
};

export default Car;