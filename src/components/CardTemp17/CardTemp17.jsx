import React from 'react';
import './CardTemp17.css';
import HeaderTemp17 from './HeaderTemp17';
import BodyTemp17 from './BodyTemp17';
import FooterTemp17 from './FooterTemp17';

const CardTemp17 = () => {
  const data = {
    title: 'Book now',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  };

  return (
    <div className="card temp17">
      <HeaderTemp17 infoDetails={data} />
      <BodyTemp17 />
      <FooterTemp17 />
    </div>
  );
};

export default CardTemp17;
