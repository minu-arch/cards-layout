import React from 'react';
import './CardTemp7.css';
import avatar from './files/avatar.png';

const DataTemp7 = (props) => {
  return (
    <>
      <div className="wrapper-temp7">
        {/* Header */}
        <div className="card-header-temp7">
          <div className="media-temp7">
            <div className="media-body-temp7">
              <div className="avatar-temp7">
                <img src={avatar} alt="" />
              </div>
              <div className="content-temp7">
                <h1>{props.infoDetails.name}</h1>
                <h2>{props.infoDetails.skill}</h2>
              </div>
            </div>
          </div>
        </div>
        {/*End Header */}

        {/* Maine */}

        {/* End Maine */}

        {/* Footer */}

        {/* End Footer */}
      </div>
    </>
  );
};

export default DataTemp7;
