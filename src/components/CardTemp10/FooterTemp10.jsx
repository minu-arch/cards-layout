import React from 'react';
import './CardTemp10.css';
import avatar from './files/avatar.png';

const FooterTemp10 = (props) => {
  return (
    <>
      <div className="card-footer-temp10">
        <div className="media-footer-temp10">
          <div className="avatar-footer-temp10">
            <img src={avatar} alt="" />
          </div>
          <div className="content-footer-temp10">
            <h2 className="name-footer-temp10">{props.infoDetails.name}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTemp10;
