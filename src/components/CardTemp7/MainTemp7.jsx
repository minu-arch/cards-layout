import React from 'react';
import './CardTemp7.css';

const MainTemp7 = (props) => {
  const date = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <div className="card-body-temp7">
        <h3>{props.infoDetails.title}</h3>
        <h3>{date}</h3>
        <p>{props.infoDetails.aboutme}</p>
      </div>
      {/* Main */}
      <div className="card-main-temp7">
        <button className="badge-react-temp7">
          <p className="react-temp7">{props.infoDetails.techskills.react}</p>
        </button>
        <button className="badge-javascript-temp7">
          <p className="javascript-temp7">{props.infoDetails.techskills.js}</p>
        </button>
        <button className="badge-angular-temp7">
          <p className="angular-temp7">
            {props.infoDetails.techskills.angular}
          </p>
        </button>
      </div>
    </>
  );
};

export default MainTemp7;
