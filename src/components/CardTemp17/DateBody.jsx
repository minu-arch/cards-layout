import React from 'react';
import './CardTemp17.css';

const DateBody = () => {
  const arrivalDate = new Date().toLocaleDateString('en-gb', {
    month: 'long',
    day: 'numeric',
  });

  const now = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
  const dayOfWeek = now.toLocaleDateString('en-US', { month: 'long' });
  const date = now.toLocaleDateString('en-GB', { day: 'numeric' });
  const departureDate = `${dayOfWeek} ${date}`;

  return (
    <div className="date-body-card-temp17">
      <div className="arrival-temp17">
        <h3>arival</h3>
        <input
          type="text"
          placeholder={arrivalDate}
          className="input-arrival-temp17"
        />
      </div>
      <div className="departure-temp17">
        <h3>departure</h3>
        <input
          type="text"
          placeholder={departureDate}
          className="input-departure-temp17"
        />
      </div>
    </div>
  );
};

export default DateBody;
