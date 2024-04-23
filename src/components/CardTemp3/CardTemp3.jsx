import './CardTemp3.css';
import DataTemp3 from '../CardTemp3/DataTemp3';

function CardTemp3() {
  const data = {
    name: 'Wade Waren',
    skill: 'Software Tester',
  };
  return (
    <div className="card temp3">
      <DataTemp3 infoDetails={data} />
    </div>
  );
}

export default CardTemp3;
