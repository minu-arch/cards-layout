import './CardTemp5.css';
import React from 'react';
import avatar from './files/avatar.png';

const HeaderTemp5 = (props) => {
  return (
    <div>
      {/* Header */}
      <div className="card-header-temp5">
        <div className="card-media-temp5">
          <div className="body-temp5">
            <div className="avatar-temp5">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="content-temp5">
              <h1>{props.infoDetails.person}</h1>
              <h2>W{props.infoDetails.skill}</h2>
            </div>
          </div>
          <div className="media-option-temp5">
            <button onClick={props.handleClick}>
              <p>SMALL</p>
            </button>
          </div>
        </div>
      </div>
      {/* End Header */}
    </div>
  );
};

export default HeaderTemp5;
