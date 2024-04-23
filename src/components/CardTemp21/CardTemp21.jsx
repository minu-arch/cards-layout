import './CardTemp21.css';
import HeaderTemp21 from './HeaderTemp21';
import BodyTemp21 from './BodyTemp21';
import FooterTemp21 from './FooterTemp21';
import { useState } from 'react';

const CardTemp21 = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={`card temp21 ${isActive ? 'dark-mode' : ''}`}>
      <HeaderTemp21 isActive={isActive} />
      <BodyTemp21 isActive={isActive} />
      <FooterTemp21 isActive={isActive} handleClick={handleClick} />
    </div>
  );
};

export default CardTemp21;
