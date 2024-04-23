import React from 'react';
import './CardTemp18.css';

const FooterTemp18 = ({ cities, about }) => {
  return (
    <>
      <div className="footer-card-temp18">
        <h2>{cities}</h2>
        <p>{about}</p>
      </div>
    </>
  );
};

export default FooterTemp18;
