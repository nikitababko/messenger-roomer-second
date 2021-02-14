import React from 'react';

import closeIcon from 'assets/icons/closeIcon.png';
import onlineIcon from 'assets/icons/onlineIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => {
  return (
    <div className="info-bar">
      <div className="left-inner-container">
        <img className="online-icon" src={onlineIcon} alt="online image" />
        <h3>{room}</h3>
      </div>
      <div className="right-inner-container">
        <a href="/">
          <img src={closeIcon} alt="close image" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
