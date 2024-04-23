import React, { useState, useEffect } from 'react';
import './CardTemp9.css';
import heart from './files/heart.png';
import share from './files/share.png';
import comments from './files/comments.png';

const FooterTemp9 = () => {
  const [socialData, setSocialData] = useState({
    likes: 0,
    shares: 0,
    comments: 0,
  });
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) =>
        setSocialData({
          likes: Math.floor(Math.random() * 10000),
          shares: Math.floor(Math.random() * 1000),
          comments: data.length,
        })
      );
  }, []);
  return (
    <>
      <div className="footer-card-temp9">
        <div className="likes-card-temp9">
          <div className="vector-temp9">
            <img src={heart} alt="" />
            <p className="text-temp9">{socialData.likes} K</p>
          </div>
        </div>
        <div className="share-card-temp9">
          <div className="vector-temp9">
            <img src={share} alt="share" />
            <p className="text-temp9">{socialData.shares}</p>
          </div>
        </div>
        <div className="comment-card-temp9">
          <div className="vector-temp9">
            <img src={comments} alt="comment" />
            <p className="text-temp9">{socialData.comments}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTemp9;
