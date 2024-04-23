import React from 'react';
import './CardTemp20.css';
import Header from './HeaderTemp20';
import Body from './BodyTemp20';
import Footer from './FooterTemp20';

const CardTemp20 = () => {
  const data = {
    price: 60,
    period: 'month',
    title: 'Social License',
    about:
      'Unlimited analytics, plans, demographic insights. All you need to grow-up your business',
  };
  return (
    <div className="card temp20">
      <Header infoDetails={data} />
      <Body infoDetails={data} />
      <Footer />
    </div>
  );
};

export default CardTemp20;
