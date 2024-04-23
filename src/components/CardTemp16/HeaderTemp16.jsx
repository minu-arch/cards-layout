import React from 'react';
import './CardTemp16.css';

const HeaderTemp16 = () => {
  const now = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
  const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'short' });
  const date = now.toLocaleDateString('en-GB', { day: 'numeric' });
  // const formattedDate = `${dayOfWeek} ${date}`;
  const now2 = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000);
  const dayOfWeek2 = now2.toLocaleDateString('en-US', { weekday: 'short' });
  const date2 = now2.toLocaleDateString('en-GB', { day: 'numeric' });
  return (
    <div className="header-card-temp16">
      <div className="box1-header-temp16">
        <p>{dayOfWeek}</p>
        <p>{date}</p>
      </div>
      <div className="box2-header-temp16">
        <p>{dayOfWeek2}</p>
        <p>{date2}</p>
      </div>
    </div>
  );
};

export default HeaderTemp16;
