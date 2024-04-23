import './CardTemp14.css';
import HeaderTemp14 from './HeaderTemp14';
import BodyTemp14 from './BodyTemp14';
import MainTemp14 from './MainTemp14';
import FooterTemp14 from './FooterTemp14';
import wine from './files/wine.png';
import wine2 from './files/wine2.png';
import wine3 from './files/wine3.png';
import { useState } from 'react';

const CardTemp14 = () => {
  const products = [
    {
      image: wine,
      type: 'pinot noir',
      price: 8.35,
      about: 'Lorem ipsum dolor sit amet.',
    },
    {
      image: wine2,
      type: 'petrus',
      price: 11.5,
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      image: wine3,
      type: 'Jff',
      price: 15.7,
      about:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium.',
    },
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [count, setCount] = useState(0);

  const nextProduct = () => {
    setCurrentProductIndex((currentProductIndex + 1) % products.length);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const totalPrice = (products[currentProductIndex].price * count).toFixed(2);

  return (
    <div className="card temp14">
      <HeaderTemp14 onClick={nextProduct} />
      <BodyTemp14 product={products[currentProductIndex]} />
      <MainTemp14
        title={products[currentProductIndex].type}
        about={products[currentProductIndex].about}
        prices={products[currentProductIndex].price}
      />
      <FooterTemp14
        count={count}
        totalPrice={totalPrice}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};

export default CardTemp14;
