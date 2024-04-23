import React from 'react';

const FooterTemp19 = ({ users }) => {
  return (
    <div className="footer-card-temp19">
      <h3>{users ? users.length : 0} freelancers</h3>
      {/*  <h3>VIEW ALL MEMBER</h3> */}
    </div>
  );
};

export default FooterTemp19;
