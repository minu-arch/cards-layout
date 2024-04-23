import './CardTemp8.css';
import BodyTemp8 from './BodyTemp8';
import FooterTemp8 from './FooterTemp8';
import HeaderTemp8 from './HeaderTemp8';

function CardTemp8() {
  const data = {
    name: 'Annette Black',
    skill: 'Web Development',
    aboutme: 'Lorem ipsum dolor sit amet consectetur.',
  };
  return (
    <div className="card temp8">
      <HeaderTemp8 infoDetails={data} />
      <BodyTemp8 infoDetails={data} />
      <FooterTemp8 />
    </div>
  );
}

export default CardTemp8;
