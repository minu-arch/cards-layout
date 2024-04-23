import { useState } from 'react';
import './CardTemp18.css';
import HeaderTemp18 from './HeaderTemp18';
import CaptionTemp18 from './CaptionTemp18';
import FooterTemp18 from './FooterTemp18';
import cuba from './files/cuba.png';
import cuba2 from './files/cuba2.png';
import cuba3 from './files/cuba3.png';
import cuba4 from './files/cuba4.png';

const CardTemp18 = () => {
  const infoData = [
    {
      images: cuba,
      city: 'Havana, Cuba',
      about: '1 Havana dolor in amet nulla laboris enim dolore consequatt',
      distance: 18,
    },
    {
      images: cuba2,
      city: 'Trinidad, Cuba',
      about: '2 Trinidad ipsum dolor sit amet. ',
      distance: 15,
    },
    {
      images: cuba3,
      city: 'Santiago de Cuba',
      about: '3 Santiago ipsum dolor sit amet consectetur adipisicing.',
      distance: 25,
    },
    {
      images: cuba4,
      city: 'Varadero, Cuba',
      about:
        '4 Varadero ipsum dolor sit amet consectetur adipisicing elit. Accusantium.',
      distance: 5,
    },
  ];

  /*   const images = [cuba, cuba2, cuba3, cuba4];
  const cityState = [
    'Havana, Cuba',
    'Trinidad, Cuba',
    'Santiago de Cuba',
    'Varadero, Cuba',
  ];
  const about = [
    '1 Havana dolor in amet nulla laboris enim dolore consequatt',
    '2 Lorem ipsum dolor sit amet. ',
    '3 Lorem ipsum dolor sit amet consectetur adipisicing.',
    '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium.',
  ];
  
  const distance = ['18 km', '15 km', '25 km', '5 km']; */

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % infoData.length);
  };

  return (
    <div className="card temp18">
      <HeaderTemp18
        onClick={nextImage}
        currentImage={infoData[currentImageIndex].images}
      />
      <CaptionTemp18 distance={infoData[currentImageIndex].distance} />
      <FooterTemp18
        cities={infoData[currentImageIndex].city}
        about={infoData[currentImageIndex].about}
      />
    </div>
  );
};

export default CardTemp18;
