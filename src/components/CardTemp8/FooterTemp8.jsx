import React from 'react';
import dateTemp8 from './dateTemp8.module.css';

const FooterTemp8 = () => {
  const date = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <div>
      <div className="card-footer-temp8">
        <p className={dateTemp8.datetemp8}>{date}</p>
      </div>
    </div>
  );
};

export default FooterTemp8;
