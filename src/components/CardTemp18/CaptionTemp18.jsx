import React from 'react';
import './CardTemp18.css';
import location from './files/location.png';
const CaptionTemp18 = ({ distance }) => {
  return (
    <>
      <div className="caption-card-temp18">
        <div className="testez-fram18">
          <div className="frame1-caption-temp18">
            <img src={location} alt="Your Location" />
          </div>
          <h4>Distance</h4>
        </div>
        <h4>{distance} km</h4>
      </div>
    </>
  );
};

export default CaptionTemp18;
