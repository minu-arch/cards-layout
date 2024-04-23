import React, { useState } from 'react';
import avatar1 from './files/avatar1.png';
import avatar2 from './files/avatar2.png';
import avatar3 from './files/avatar3.png';
import avatar4 from './files/avatar4.png';
import avatar5 from './files/avatar5.png';
import avatar6 from './files/avatar6.png';
import avatar7 from './files/avatar7.png';
import avatar8 from './files/avatar8.png';
import show from './files/show.png';
import searchIcon from './files/searchicon.png';
import FooterTemp19 from './FooterTemp19';

const BodyTemp19 = () => {
  const [users, setUsers] = useState([
    { name: 'Wade Warren', proffesion: 'Dog Trainer', avatar: avatar1 },
    { name: 'Robert Fox', proffesion: 'President of Sales', avatar: avatar2 },
    { name: 'Jane Cooper', proffesion: 'Nursing Assistant', avatar: avatar3 },
    { name: 'Natalia', proffesion: 'Web Designer', avatar: avatar4 },
    { name: 'Jhon Osten', proffesion: 'Software Tester', avatar: avatar5 },
    { name: 'Jenny Wilson', proffesion: 'Frontend developer', avatar: avatar6 },
    { name: 'Fermin vargas', proffesion: 'BackEnd developer', avatar: avatar7 },
    {
      name: 'Guy Hawkins',
      proffesion: 'Marketing Coordinator',
      avatar: avatar8,
    },
  ]);

  const [searchMembers, setSearchMembers] = useState('');

  const handleChange = (event) => {
    setSearchMembers(event.target.value);
  };

  const filterUsers = users.filter((user) =>
    user.name.toLocaleLowerCase().includes(searchMembers.toLocaleLowerCase())
  );

  const [displayCount, setDisplayCount] = useState(3);

  const displayedUsers = filterUsers.slice(0, displayCount);

  const handleShowMore = () => {
    if (displayCount >= filterUsers.length) {
      setDisplayCount(3);
    } else {
      setDisplayCount(displayCount + 5);
    }
  };

  return (
    <>
      <div className="search-content-card-temp19">
        <div className="frame1-search-temp19">
          <h2>search now</h2>
          <img onClick={handleShowMore} src={show} alt="" />
        </div>
        <div className="inputs-search-temp19">
          <div className="input-icon-container">
            <input
              type="text"
              placeholder="Placeholder"
              value={searchMembers}
              onChange={handleChange}
            />
            <div className="testez-icoana">
              <img src={searchIcon} className="input-icon" alt="search" />
            </div>
          </div>
        </div>
      </div>
      <div className="body-card-temp19">
        <div className="media-all-card-temp19">
          {displayedUsers.map((user, index) => (
            <div key={index} className="index-temp19">
              <div className="media-body-temp19">
                <div className="media-body-avatar-temp19">
                  <img src={user.avatar} alt="Avatar Memmber" />
                </div>
                <div className="contend-media-temp19">
                  <h3>{user.name}</h3>
                  <h2>{user.proffesion}</h2>
                </div>
              </div>
              <div className="media-option-temp19">
                <button className="btn-media-temp19">
                  <p>small</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterTemp19 users={users} />
    </>
  );
};

export default BodyTemp19;
