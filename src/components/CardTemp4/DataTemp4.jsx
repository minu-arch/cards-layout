import './CardTemp4.css';
import unsplash from './files/unsplash3.png';
import avatar from './files/avatar.png';

function DataTemp4(props) {
  return (
    <div className="card-wrapper-temp4">
      <div className="card-header-temp4">
        <div className="card-media-temp4">
          <div className="avatar-temp4">
            <img src={avatar} alt="" />
          </div>
          <div className="content-temp4">
            <h1 className="content-text-temp4">{props.infoDetails.name}</h1>
            <h2>{props.infoDetails.skill}</h2>
          </div>
        </div>
      </div>
      <div className="card-body-temp4">
        <p>{props.infoDetails.about}</p>
      </div>
      <img src={unsplash} alt="" />
      <div className="card-footer-temp4">
        <p className="date-temp2">
          {`${new Date().toLocaleDateString('en-GB', {
            month: 'long',
          })}, ${new Date().toLocaleDateString('en-GB', {
            day: 'numeric',
          })}`}
        </p>
      </div>
    </div>
  );
}

export default DataTemp4;
