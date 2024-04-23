import React from 'react';
import paragraphStyle from './paragraph.module.css';
import unsplash from './files/unsplash.png';
import avatar from './files/avatar.png';
import dateTemp6 from './dateTemp6.module.css';

const DataTemp6 = (props) => {
  return (
    <>
      <div className="temp6-wrapper">
        {/* header */}
        <div className="header-temp6">
          <div className="media-temp6">
            <div className="media-body-temp6">
              <div className="avatar-temp6">
                <img src={avatar} alt="" />
              </div>
              <div className="content-temp6">
                <h1>{props.infoDetails.nick}</h1>
                <h2>{props.infoDetails.skill}</h2>
              </div>
            </div>
            <div className="media-option-temp6">
              <button className="button-temp6">
                <p className="button-id-6">button</p>
              </button>
            </div>
          </div>
        </div>
        {/* end header */}
        <img src={unsplash} alt="body-image" />
        <div className="main-temp6">
          <p className={paragraphStyle.aboutmetemp6}>
            {props.infoDetails.aboutme}
          </p>
        </div>
        <div className="footer-temp6">
          <p className={`${dateTemp6.datetemp6}`}>{props.newDate}</p>
        </div>
      </div>
    </>
  );
};

export default DataTemp6;
