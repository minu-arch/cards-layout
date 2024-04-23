import React from 'react';
import './CardTemp14.css';

const BodyTemp14 = ({ product }) => {
  return (
    <>
      <div className="card-body-temp14">
        <div className="frame-14">
          <div className="group-14">
            <div className="mask-group">
              <img src={product.image} alt={product.image} />
            </div>
            <div className="empty-frame"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyTemp14;
