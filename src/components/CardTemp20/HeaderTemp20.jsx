import React from 'react';

function HeaderTemp20(props) {
  return (
    <div className="card-header-temp20">
      <h1>$ {props.infoDetails.price}</h1>
      <h2>/{props.infoDetails.period}</h2>
    </div>
  );
}

export default HeaderTemp20;
