import './CardTemp15.css';
import Header from './HeaderTemp15';
import Body from './BodyTemp15';
import Footer from './FooterTemp15';

function CardTemp15() {
  const data = {
    price: 34,
    period: 'month',
    title: 'Basic License',
    about:
      'Our goverment backed plan designed to keep your business legaly and secure',
  };

  return (
    <div className="card temp15">
      <Header infoDetails={data} />
      <Body infoDetails={data} />
      <Footer />
    </div>
  );
}

export default CardTemp15;
