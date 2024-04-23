import React, { useState } from 'react';
import './CardTemp17.css';
import minus from './files/minus.png';
import plus from './files/plus.png';

const SelectBody = () => {
  const [plus1, setPlus1] = useState(0);
  const [plus2, setPlus2] = useState(0);

  const incrementPlus1 = () => {
    setPlus1(plus1 + 1);
  };

  const decrementMinus1 = () => {
    if (plus1 > 0) {
      setPlus1(plus1 - 1);
    }
  };

  const incrementPlus2 = () => {
    setPlus2(plus2 + 1);
  };

  const decrementMinus2 = () => {
    if (plus2 > 0) {
      setPlus2(plus2 - 1);
    }
  };

  return (
    <div className="select-body-card-temp17">
      <div className="star-form-card-temp17">
        <h3>star</h3>
        <div className="group1-star-temp17">
          <button onClick={decrementMinus1} className="btn1-star-temp17">
            <img src={minus} alt="decrement" />
          </button>
          <input
            type="text"
            placeholder="0"
            value={plus1.toString()}
            onChange={(event) => setPlus1(Number(event.target.value))}
            className="star-inp-temp17"
          />
          <button onClick={incrementPlus1} className="btn2-star-temp17">
            <img src={plus} alt="increment" />
          </button>
        </div>
      </div>
      <div className="room-form-temp17">
        <h3>room</h3>
        <div className="group2-room-temp17">
          <button onClick={decrementMinus2} className="btn1-room-temp17">
            <img src={minus} alt="decrement" />
          </button>
          <input
            type="text"
            placeholder="0"
            value={plus2.toString()}
            onChange={(event) => setPlus2(Number(event.target.value))}
            className="room-inp-temp17"
          />
          <button onClick={incrementPlus2} className="btn2-room-temp17">
            <img src={plus} alt="increment" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectBody;
