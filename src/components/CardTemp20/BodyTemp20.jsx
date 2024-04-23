import { useState } from 'react';
import vector from './files/vector.png';

const BodyTemp20 = (props) => {
  const [benefits, setBenefits] = useState([
    { titles: 'Add your own branding' },
    { titles: 'View popularity analytics' },
    { titles: 'Up to 1500 customer profiles' },
    { titles: 'View demographic insights' },
  ]);
  const benefitsTitle = benefits.map((benefit, index) => (
    <div key={index} className="advantage-body-temp15">
      <div className="tick-adv-temp15">
        <img src={vector} alt="" />
      </div>
      <h4>{benefit.titles}</h4>
    </div>
  ));
  return (
    <div className="card-body-temp20">
      <h2>{props.infoDetails.title}</h2>
      <p>{props.infoDetails.about}</p>
      <div className="space-body-temp20"></div>
      {benefitsTitle}
    </div>
  );
};

export default BodyTemp20;
