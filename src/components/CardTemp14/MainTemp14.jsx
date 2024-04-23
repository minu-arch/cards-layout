import React from 'react';

const MainTemp14 = ({ title, about, prices }) => {
  return (
    <>
      <div className="main-card-temp14">
        <h1 className="text-main-card-temp14">{title}</h1>
        <h6>$ {prices}</h6>
        <p className="content-main-card-temp14">{about}</p>
      </div>
    </>
  );
};

export default MainTemp14;
