import React from 'react';
import './CardTemp11.css';
import image from './files/image.png';

const BodyTemp11 = () => {
  return (
    <div>
      <div className="body-card-temp11">
        <button className="button-temp11">
          <p>view project</p>
        </button>
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default BodyTemp11;
