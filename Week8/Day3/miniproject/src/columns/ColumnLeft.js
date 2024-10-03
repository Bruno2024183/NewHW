import React, { useState } from 'react';

const ColumnLeft = () => {
  const [images, setImages] = useState([]);

  const getImages = () => {
    // Aquí puedes agregar una llamada a una API para obtener imágenes
    setImages([
      { id: 1, url: 'https://placekitten.com/200/200' },
      { id: 2, url: 'https://placekitten.com/300/300' },
    ]);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={getImages}>
        Get images
      </button>
      <div>
        {images.map((image) => (
          <img key={image.id} src={image.url} alt="Placeholder" style={{ width: '100%', marginTop: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default ColumnLeft;