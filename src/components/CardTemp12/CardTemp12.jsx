import './CardTemp12.css';
import BodyTemp12 from './BodyTemp12';
import FooterTemp12 from './FooterTemp12';

function CardTemp12() {
  const data = {
    name: 'Orianna',
    ocupation: 'Frontend developer',
    aboutme: '',
    socialMedia: {
      dribbble: 'https://dribbble.com/minuarch',
      codepen: 'https://codepen.io/Benji-the-styleful',
      github: 'https://github.com/minu-arch',
      twiter: 'https://twitter.com/MinuMezu',
    },
  };

  return (
    <div className="card temp12">
      <BodyTemp12 infoDetails={data} />
      <FooterTemp12 infoDetails={data} />
    </div>
  );
}

export default CardTemp12;
