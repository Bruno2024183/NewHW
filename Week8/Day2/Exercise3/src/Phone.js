import React, { useState } from 'react';

const Phone = () => {
  // Parte I: Definir las variables de estado
  const [phone, setPhone] = useState({
    brand: 'Samsung',
    model: 'Galaxy S20',
    color: 'black',
    year: 2020,
  });

  // Parte II: Función para cambiar el color del teléfono
  const changeColor = () => {
    setPhone({ ...phone, color: 'blue' });
  };

  return (
    <div>
      <h1>My phone is a {phone.brand}</h1>
      <p>
        It is a {phone.color} {phone.model} from {phone.year}
      </p>

      {/* Parte II: Botón para cambiar el color */}
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default Phone;