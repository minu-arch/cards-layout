import React from 'react';
import './CardTemp10.css';
import unsplash from './files/unsplash.png';

const HeaderTemp10 = (props) => {
  const date = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <>
      <img src={unsplash} alt="cover" className="unsplash-header-temp10" />
      <div className="card-header-temp10">
        <h2 className="title-header-temp10">{props.infoDetails.title}</h2>
        <p className="date-temp10">{date}</p>
        <p className="aboutme-header-temp10">{props.infoDetails.aboutme}</p>
      </div>
    </>
  );
};

export default HeaderTemp10;
