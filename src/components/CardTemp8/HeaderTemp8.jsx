import React from 'react';
import './CardTemp8.css';
import avatar from './files/avatar.png';
import unsplash from './files/unsplash.png';

const HeaderTemp8 = (props) => {
  return (
    <>
      {/* Header */}
      <div className="card-header-temp8">
        <div className="media-temp8">
          <div className="media-body-temp8">
            <div className="avatar-temp8">
              <img src={avatar} alt="" />
            </div>
            <div className="content-temp8">
              <h1>{props.infoDetails.name}</h1>
              <h2>{props.infoDetails.skill}</h2>
            </div>
          </div>
          <div className="media-option-temp8">
            <svg
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                fill="black"
              />
            </svg>
            <svg
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                fill="black"
              />
            </svg>
            <svg
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
      <img src={unsplash} alt="" />
    </>
  );
};

export default HeaderTemp8;
