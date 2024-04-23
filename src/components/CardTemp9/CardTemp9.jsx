import './CardTemp9.css';
import FooterTemp9 from './FooterTemp9';

function CardTemp9() {
  const data = {
    titleOne: 'New card',
    titleSec: 'Designs',
    aboutOne: 'Lorem ipsum dolor sit amet',
    aboutSec: 'consectetur, adipisicing elit.',
  };
  return (
    <div className="card temp9">
      <div className="card-header-temp9">
        <h1 className="design-card-temp9">
          {data.titleOne} <br />
          {data.titleSec}
        </h1>
        <p className="about-card-temp9">
          {data.aboutOne} <br />
          {data.aboutSec}
        </p>
      </div>
      {/* Footer */}
      <FooterTemp9 />
    </div>
  );
}

export default CardTemp9;
