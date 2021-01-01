import React from 'react';
import '../App.css';
import './Badge.css';

function Badge(props) {
  return (
    <div className={`badge ${props.color} ${props.bg} border-${props.color}`}>
        {props.text}
    </div>  
  );
}

export default Badge;
