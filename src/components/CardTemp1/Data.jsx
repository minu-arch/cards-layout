import './CardTemp1.css';
import avatar from './files/avatar.png';
import cardimage from './files/card-image.png';

function Data(props) {
  return (
    <>
      <div className="card-header-temp1">
        <div className="media-temp1">
          <div className="media-body">
            <div className="avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="content-temp1">
              <h1>{props.infoDetails.name}</h1>
              <h2>{props.infoDetails.skill}</h2>
            </div>
          </div>
          <div className="media-option">
            <div className="icon">
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
      </div>
      <div className="card-image">
        <img src={cardimage} alt="cardimage" />
      </div>
      <div className="card-footer">
        <h2>{props.infoDetails.about} </h2>
      </div>
    </>
  );
}

export default Data;
