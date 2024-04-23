import React from 'react';
import './CardTemp11.css';
import avatar from './files/avatar.png';

const HeaderTemp11 = (props) => {
  return (
    <>
      <div className="media-header-temp11">
        <div className="avatar-header-temp11">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="content-header-temp11">
          <h1 className="name-header-temp11">{props.infoDetails.name}</h1>
          <h2 className="ocupation-header-temp11">
            {props.infoDetails.ocupation}
          </h2>
        </div>
      </div>
    </>
  );
};

export default HeaderTemp11;
