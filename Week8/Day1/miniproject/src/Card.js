import React from 'react';

const Card = ({ icon, title, description }) => {
  return (
    <div className="col-md-4 text-center my-3">
      <i className={`fas ${icon} fa-4x mb-3`}></i>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Card;