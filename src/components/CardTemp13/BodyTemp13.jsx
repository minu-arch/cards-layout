import React, { useState } from 'react';
import './CardTemp13.css';
import EstherAvatar from './files/EstherAvatar.png';
import JacobAvatar from './files/JacobAvatar.png';
import JaneAvatar from './files/JaneAvatar.png';
import RobertAvatar from './files/RobertAvatar.png';

const BodyTemp13 = () => {
  const [users, setUsers] = useState([
    { name: 'Jane Cooper', bank: 'National Bank', avatar: EstherAvatar },
    { name: 'Esther Howard', bank: 'Credit Card', avatar: JacobAvatar },
    { name: 'Robert Fox', bank: 'National Bank', avatar: JaneAvatar },
    { name: 'Jacob Jones', bank: 'Credit Card', avatar: RobertAvatar },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredUsers = users.filter((user) =>
    user.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <>
      <div className="card-body-temp13">
        <div className="form-controls-temp13">
          <input
            className="input-form-temp13"
            type="text"
            placeholder="Search user"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
        <div className="user-list-temp13">
          <div className="media">
            {filteredUsers.map((user, index) => (
              <div key={index} className="index-temp13">
                <div className="media-body">
                  <div className="avatar-temp13">
                    <img src={user.avatar} alt="avatar" />
                  </div>
                  <div className="content-temp13">
                    <h1 className="name-user-content-temp13">{user.name}</h1>
                    <h2 className="typeoff-content-temp13">{user.bank}</h2>
                  </div>
                </div>
                <button className="btn-user-temp13">
                  <p>SEND</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyTemp13;
