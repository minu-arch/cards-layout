import './CardTemp10.css';
import FooterTemp10 from './FooterTemp10';
import HeaderTemp10 from './HeaderTemp10';

function CardTemp10() {
  const data = {
    name: 'Cameron Williamson',
    title: 'Consequat',
    aboutme:
      'Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod.',
  };

  return (
    <div className="card temp10">
      <HeaderTemp10 infoDetails={data} />

      <FooterTemp10 infoDetails={data} />
    </div>
  );
}

export default CardTemp10;
