import React from 'react';
import './CardTemp11.css';

const FooterTemp11 = (props) => {
  return (
    <>
      <div className="footer-card-temp11">
        <div className="price-footer-temp11">
          <p className="old-price">{props.infoDetails.oldPrice}</p>
          <p className="new-price">{props.infoDetails.newPrice}</p>
        </div>
        <p className="about-footer-temp11">{props.infoDetails.about}</p>
      </div>
    </>
  );
};

export default FooterTemp11;
