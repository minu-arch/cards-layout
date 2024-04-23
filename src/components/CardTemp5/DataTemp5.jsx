import './CardTemp5.css';
import imagefirst from './files/unsplash1.png';
import imagesecond from './files/unsplash2.png';
import imagethird from './files/unsplash3.png';
import unsplasha from './files/unsplash_a.png';
import unsplashb from './files/unsplash_b.png';
import bxl from './files/bxl.png';
import HeaderTemp5 from './HeaderTemp5';

function DataTemp5(props) {
  const randomNum = Math.floor(Math.random() * 1000);

  return (
    <div className="card-wrapped-temp5">
      {/* Header */}
      <HeaderTemp5
        infoDetails={props.infoDetails}
        handleClick={props.handleClick}
      />
      {/* End Header */}

      {/* Image Group */}
      {props.isVisible && (
        <>
          <div className="image-group-temp5">
            <div className="group-1">
              <img src={imagefirst} alt="image1" />
              <img src={imagesecond} alt="image2" />
              <img src={imagethird} alt="image3" />
            </div>
            <div className="group-2">
              <img src={unsplasha} alt="image4" />
              <img src={unsplashb} alt="image5" />
            </div>
          </div>
          {/* End Image Group */}

          {/* footer */}
          <div className="card-body-temp5">
            <img src={bxl} alt="bxl" />
            <p>{randomNum}</p>
          </div>
          <div className="card-footer-temp5">
            <p className="p-unique-temp5">{props.infoDetails.hobbie}</p>
            <h2 className="h2-unique-temp5">{props.infoDetails.title}</h2>
            <p>{props.infoDetails.aboutme}</p>
          </div>
          {/* End footer */}
        </>
      )}
    </div>
  );
}

export default DataTemp5;
