import React from 'react';
import './CardTemp14.css';

const FooterTemp14 = ({
  count,
  totalPrice,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <>
      <div className="card-footer-temp14">
        <h2 className="price-footer-temp14">$ {totalPrice} </h2>

        <div className="frame-footer-temp14">
          <button className="btn-frame-temp14" onClick={handleDecrement}>
            -
          </button>
          <div className="count-frame-temp14">
            <p className="count-text-temp14">{count}</p>
          </div>
          <button className="btn2-frame-temp14" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default FooterTemp14;
