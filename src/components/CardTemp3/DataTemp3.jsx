import './CardTemp3.css';
import unsplash from './files/unsplash.png';
import avatar from './files/avatar.png';

function DataTemp3(props) {
  return (
    <div className="card-wrapper3">
      <img src={unsplash} alt="cover" />
      <div className="card-header-temp3">
        <div className="card-media-temp3">
          <div className="card-body-temp3">
            <div className="card-avatar-temp3">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="card-temp3-media">
              <h1>{props.infoDetails.name}</h1>
              <h2>{props.infoDetails.skill}</h2>
            </div>
          </div>
          <div className="card-option-temp3">
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
  );
}

export default DataTemp3;
