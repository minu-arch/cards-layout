import './CardTemp1.css';
import Data from './Data';

function CardTemp1() {
  const data = {
    name: 'Frank Esteban',
    skill: 'Front-End Developer',
    about: 'This is a basic card',
    image: {
      avatar: './files/avatar.png',
      cardimage: './files/card-image.png',
    },
  };
  return (
    <div className="card temp1">
      <Data infoDetails={data} />
    </div>
  );
}

export default CardTemp1;
