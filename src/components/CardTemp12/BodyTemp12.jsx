import React from 'react';
import './CardTemp12.css';
import avatar from './files/avatar.png';
import dribbble from './files/dribbble.png';
import codepen from './files/codepen.png';
import github from './files/github.png';
import twiter from './files/twiter.png';

const FooterTemp12 = (props) => {
  return (
    <>
      <div className="card-body-temp12">
        <div className="media-temp12">
          <div className="avatar-temp12">
            <img src={avatar} alt="" />
          </div>
          <h1>{props.infoDetails.name}</h1>
          <h2>{props.infoDetails.ocupation}</h2>
        </div>
        <div className="social-content-temp12">
          <div className="dribbble-temp12">
            <a href={props.infoDetails.socialMedia.dribbble}>
              <img src={dribbble} alt="dribbble" />
            </a>
          </div>
          <div className="codepen-temp12">
            <a href={props.infoDetails.socialMedia.codepen}>
              <img src={codepen} alt="codepen" />
            </a>
          </div>
          <div className="github-temp12">
            <a href={props.infoDetails.socialMedia.github}>
              <img src={github} alt="github" />
            </a>
          </div>
          <div className="twiter-temp12">
            <a href={props.infoDetails.socialMedia.twiter}>
              <img src={twiter} alt="twiter" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTemp12;
