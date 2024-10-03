import React, { useState } from 'react';

const ColumnRight = () => {
  const [text, setText] = useState('{"function":"I live to crash"}');

  const replaceStringWithObject = () => {
    // Lanzamos un error de renderizado al intentar asignar un objeto que no puede ser renderizado
    setText({ function: 'I live to crash' }); // Esto causará un error de renderización
  };

  const invokeEventHandler = () => {
    // Lanzamos un error directamente en el manejador de eventos
    throw new Error('An error occurred in the event handler');
  };

  return (
    <div>
      <h2>Right column</h2>
      <p>
        There are two types of errors we can trigger inside this component: A rendering error and a regular javascript error.
      </p>
      <button className="btn btn-danger" onClick={replaceStringWithObject}>
        Replace string with object
      </button>
      <p>{typeof text === 'string' ? text : 'Error: Cannot render objects!'}</p>
      <button className="btn btn-danger" onClick={invokeEventHandler}>
        Invoke event handler
      </button>
    </div>
  );
};

export default ColumnRight;