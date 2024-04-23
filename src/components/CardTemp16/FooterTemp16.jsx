import React from 'react';
import './CardTemp16.css';

const FooterTemp16 = () => {
  const now = new Date(Date.now() + 6 * 24 * 60 * 60 * 1000);
  const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'short' });
  const date = now.toLocaleDateString('en-GB', { day: 'numeric' });
  // const formattedDate = `${dayOfWeek} ${date}`;
  const now2 = new Date(Date.now() + 8 * 24 * 60 * 60 * 1000);
  const dayOfWeek2 = now2.toLocaleDateString('en-US', { weekday: 'short' });
  const date2 = now2.toLocaleDateString('en-GB', { day: 'numeric' });
  return (
    <div className="footer-card-temp16">
      <div className="box1-footer-temp16">
        <p>{dayOfWeek}</p>
        <p>{date}</p>
      </div>
      <div className="box2-footer-temp16">
        <p>{dayOfWeek2}</p>
        <p>{date2}</p>
      </div>
    </div>
  );
};

export default FooterTemp16;
