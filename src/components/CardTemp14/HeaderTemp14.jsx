import React from 'react';
import ArrowLeft from './files/left.png';
import Menu from './files/menu.png';

const HeaderTemp14 = ({ onClick }) => {
  return (
    <>
      <div className="header-card-temp14">
        <button onClick={onClick} className="arrow-left">
          <img src={ArrowLeft} alt="" />
        </button>
        <button className="menu-btn">
          <img src={Menu} alt="" />
        </button>
      </div>
    </>
  );
};

export default HeaderTemp14;
