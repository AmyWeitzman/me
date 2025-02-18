import React from 'react';
import './Scholarship.css';

function Scholarship({ idx, logo, title }) {
  return (
    <div className='scholarship-item'>
        <img className="scholarship-logo" src={logo} alt={`${title}-logo`}></img>
        <p key={idx} className="scholarship-title">{title}</p>
    </div>
  );
}

export default Scholarship;
