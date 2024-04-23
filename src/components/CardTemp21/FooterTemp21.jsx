import React from 'react';
import DarkTheme from './DarkTheme';

const FooterTemp21 = ({ isActive, handleClick }) => {
  return (
    <>
      <div className="footer-card-temp21">
        <h2>dark theme</h2>
        <DarkTheme isActive={isActive} handleClick={handleClick} />
      </div>
    </>
  );
};

export default FooterTemp21;
