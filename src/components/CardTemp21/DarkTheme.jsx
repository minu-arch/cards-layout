import React from 'react';

const DarkTheme = ({ isActive, handleClick }) => {
  return (
    <div className="dark-theme-toggle">
      <div className="main-container">
        <div
          className={`toggle-button ${isActive ? 'active' : ''}`}
          onClick={handleClick}
        >
          <div className="inner-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default DarkTheme;
