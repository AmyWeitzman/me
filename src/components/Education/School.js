import React from 'react';
import './School.css';

function School({ logo, name, degreeType, major, additionalInfo }) {
  return (
    <div className="education-school-section">
        <img src={logo} alt={name + " logo"} className="school-logo"></img>
        <div className="edu-info-container">
          <p className="school-name edu-info-item">{name}</p>
          <p className="degree-type edu-info-item">{degreeType} in {major}</p>
          { 
            additionalInfo.map(item => <p className="additional-info-item edu-info-item">{item}</p>)
          }
        </div>
    </div>
  );
}

export default School;
