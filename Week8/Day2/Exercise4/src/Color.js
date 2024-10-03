import React, { useState, useEffect } from 'react';

const Color = () => {
  // Parte I: Definir la variable de estado favoriteColor
  const [favoriteColor, setFavoriteColor] = useState('red');

  // Parte II: useEffect que alerta cuando se renderiza el componente
  useEffect(() => {
    alert('useEffect reached');
  }, [favoriteColor]);

  // Función para cambiar el color a "blue"
  const changeColor = () => {
    setFavoriteColor('blue');
  };

  return (
    <div>
      {/* Mostrar el color favorito en un header */}
      <h1>{favoriteColor}</h1>

      {/* Botón para cambiar el color */}
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default Color;