import dateTemp2 from './dateTemp2.module.css';
import avatar from './files/avatar.png';

function DataTemp2(props) {
  return (
    <>
      <div className="card-header-temp2">
        <div className="card-media-temp2">
          <div className="avatar-temp2">
            <img src={avatar} alt="" />
          </div>
          <div className="media-content-temp2">
            <h1>{props.infoDetails.name}</h1>
            <h2>{props.infoDetails.skill}</h2>
          </div>
        </div>
      </div>
      <div className="card-body-temp2">
        <p>{props.infoDetails.about}</p>
      </div>
      <div className="card-footer-temp2">
        <p className={`${dateTemp2.datetemp2}`}>
          {new Date().toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
      </div>
    </>
  );
}

export default DataTemp2;
