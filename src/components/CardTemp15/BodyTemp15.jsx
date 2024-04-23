import { useState } from 'react';
import './CardTemp15.css';
import vector from './files/vector.png';

const BodyTemp15 = (props) => {
  const [benefits, setBenefits] = useState([
    { titles: 'Secure your customer usage' },
    { titles: 'View basic analytics' },
    { titles: 'Up to 350 customer profiles' },
    { titles: 'Custom network name' },
  ]);

  return (
    <div className="card-body-temp15">
      <h2>{props.infoDetails.title}</h2>
      <p>{props.infoDetails.about}</p>
      <div className="space-body-temp15"></div>

      {benefits.map((benefit, index) => (
        <div key={index} className="advantage-body-temp15">
          <div className="tick-adv-temp15">
            <img src={vector} alt="" />
          </div>
          <h4>{benefit.titles}</h4>
        </div>
      ))}
    </div>
  );
};

export default BodyTemp15;
