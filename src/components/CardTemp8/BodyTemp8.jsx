import React from 'react';
import bodyTemp8 from './bodyTemp8.module.css';

const BodyTemp8 = (props) => {
  return (
    <div>
      <div className="card-body-temp8">
        <p className={bodyTemp8.cardbodytemp8}>{props.infoDetails.aboutme}</p>
      </div>
    </div>
  );
};

export default BodyTemp8;
