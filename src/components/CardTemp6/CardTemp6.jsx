import './CardTemp6.css';
import DataTemp6 from './DataTemp6';

function CardTemp6() {
  const date = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const data = {
    nick: 'Devon Lane',
    skill: 'Web Development',
    aboutme: 'Lorem ipsum dolor sit amet consectetur.',
    newdate: date,
  };

  return (
    <div className="card temp6">
      <DataTemp6 infoDetails={data} newDate={date} />
    </div>
  );
}

export default CardTemp6;
