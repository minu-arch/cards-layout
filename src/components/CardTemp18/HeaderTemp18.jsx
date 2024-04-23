import './CardTemp18.css';
import left from './files/left.png';
import bookMark from './files/bookmark.png';

const HeaderTemp18 = ({ onClick, currentImage }) => {
  return (
    <>
      <div className="header-card-temp18">
        <button onClick={onClick} className="left-header-temp18">
          <img src={left} alt="next-pictures" />
        </button>
        <h1>Photo</h1>
        <div className="bookmark-header-temp18">
          <img src={bookMark} alt="save-page" />
        </div>
      </div>
      <img className="havana-temp18" src={currentImage} alt="carousel" />
    </>
  );
};

export default HeaderTemp18;
