import './CardTemp5.css';
import React, { useState } from 'react';
import DataTemp5 from './DataTemp5';

function CardTemp5() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const data = {
    person: 'Yoan Lee',
    skill: 'Web Development',
    hobbie: 'Photographs',
    title: 'Lorem Ipsun',
    aboutme: 'Minim dolor in amet nulla laboris enim dolore consequatt',
  };

  return (
    <div className="card temp5">
      <>
        <DataTemp5
          isVisible={isVisible}
          handleClick={handleClick}
          infoDetails={data}
        />
      </>
    </div>
  );
}

export default CardTemp5;
