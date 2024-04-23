import './CardTemp11.css';
import BodyTemp11 from './BodyTemp11';
import FooterTemp11 from './FooterTemp11';
import HeaderTemp11 from './HeaderTemp11';

function CardTemp11() {
  const data = {
    name: 'Elenor Pena',
    ocupation: 'Team Leader',
    oldPrice: '$15.99',
    newPrice: '$9.99',
    about: 'Minim dolor in amet nulla laboris enimt.',
  };

  return (
    <div className="card temp11">
      <HeaderTemp11 infoDetails={data} />

      <BodyTemp11 />

      <FooterTemp11 infoDetails={data} />
    </div>
  );
}

export default CardTemp11;
