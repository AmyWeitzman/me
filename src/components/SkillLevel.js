import React from 'react';
import ReactStars from "react-rating-stars-component";
import '../App.css';
import './SkillLevel.css';

function SkillLevel(props) {
    return (
        <div className="skill-content">
            <p className="skill-name">{props.skill}</p>
            <ReactStars 
                className="stars"
                count={5}
                value={props.level}
                color="#d3d2d4"
                activeColor="#9034c7"
                edit={false}
                size={36}
            />
        </div>  
    );
}

export default SkillLevel;