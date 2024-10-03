import React from 'react';

function App() {
  const postData = async () => {
    const url = '/webhook/1398aee8-6234-405d-bc88-39dbf48b2faf';  // URL con proxy

    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      // Verificar la respuesta
      console.log('Response:', response);

      // Leer y mostrar el cuerpo de la respuesta si es necesario
      const responseData = await response.text();
      console.log('Response Data:', responseData);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div className="App">
      <button onClick={postData}>Press me to post some data</button>
    </div>
  );
}

export default App;