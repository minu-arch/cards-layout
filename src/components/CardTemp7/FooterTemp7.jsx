import React, { useState, useEffect } from 'react';
import './CardTemp7.css';
import heart from './files/heart.png';
import share from './files/share.png';
import comment from './files/comment.png';

const FooterTemp7 = () => {
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
      {/* Footer */}
      <div className="card-footer-temp7">
        <div className="card-likes-temp7">
          <div className="heart-temp7">
            <img src={heart} alt="heart" />
            <p className="footer-text-temp7">{socialData.likes} K</p>
          </div>
        </div>
        <div className="card-share-temp7">
          <div className="share-temp7">
            <img src={share} alt="share" />
            <p className="footer-text-temp7">{socialData.shares}</p>
          </div>
        </div>
        <div className="card-comment-temp7">
          <div className="comment-temp7">
            <img src={comment} alt="comment" />
            <p className="footer-text-temp7">{socialData.comments}</p>
          </div>
        </div>
      </div>
      {/* End Footer */}
    </>
  );
};

export default FooterTemp7;
