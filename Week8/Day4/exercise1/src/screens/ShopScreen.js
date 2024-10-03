import React, { useEffect } from 'react';

const ShopScreen = () => {
  useEffect(() => {
    throw new Error('Shop screen crashed!');
  }, []); // El efecto se ejecuta después de que el componente se haya montado

  return <h1>Shop Screen</h1>;
};

export default ShopScreen;