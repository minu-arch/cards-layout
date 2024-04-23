import './CardTemp2.css';
import DataTemp2 from './DataTemp2';

function CardTemp2() {
  const data = {
    name: 'Leo Evgheni',
    skill: 'Web Development',
    about: 'Minim dolor in amet nulla laboris',
  };
  return (
    <div className="card temp2">
      <DataTemp2 infoDetails={data} />
    </div>
  );
}

export default CardTemp2;
