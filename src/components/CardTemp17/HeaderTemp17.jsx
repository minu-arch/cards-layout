import React from 'react';
import './CardTemp17.css';

const HeaderTemp17 = (props) => {
  return (
    <>
      <div className="header-card-temp17">
        <h1>{props.infoDetails.title}</h1>
        <h2>{props.infoDetails.about}</h2>
      </div>
    </>
  );
};

export default HeaderTemp17;
