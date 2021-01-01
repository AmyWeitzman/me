import React from 'react';
import '../App.css';
import './Education.css';

function Education(props) {
  return (
    <div className="edu-container">
        <img src={props.details.logo} alt={props.details.name + " logo"} className="school-logo"></img>
        <div className="edu-info-container">
            <p className="school-name edu-info-item">{props.details.name}</p>
            <p className="degree-type edu-info-item">{props.details.degreeType} in {props.details.major}</p>
            <p className="grad-year edu-info-item">Expected Graduation: {props.details.graduation}</p>
        </div>
    </div>
  );
}

export default Education;
