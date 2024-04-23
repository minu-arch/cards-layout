import React from 'react';
import './CardTemp15.css';

const HeaderTemp15 = (props) => {
  return (
    <div className="card-header-temp15">
      <h1>$ {props.infoDetails.price}</h1>
      <h2>/{props.infoDetails.period}</h2>
    </div>
  );
};

export default HeaderTemp15;
