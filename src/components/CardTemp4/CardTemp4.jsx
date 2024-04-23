import './CardTemp4.css';
import DataTemp4 from './DataTemp4';

function CardTemp4() {
  const data = {
    name: 'Savannah Nguyen',
    skill: 'Web Development',
    about: 'Minim dolor in amet nulla laboris',
  };
  return (
    <div className="card temp4">
      <DataTemp4 infoDetails={data} />
    </div>
  );
}

export default CardTemp4;
