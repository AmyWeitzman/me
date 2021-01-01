import React from 'react';
import '../App.css';
import './Experience.css';

import Badge from "./Badge";

// const skill_colors = {
//     'Python': 'dark-purple',
//     'Java': 'dark-orange',
//     'C++': 'dark-yellow',
//     'SQL': 'dark-green',
//     'HTML': 'light-orange',
//     'CSS': 'light-yellow',
//     'JavaScript': 'dark-blue',
//     'Vue.js': 'light-green',
//     'React.js': 'light-red',
//     'Node.js': 'dark-red',
//     'Git': 'light-turquoise',
//     'Agile': 'light-gray',
//     'Figma': 'light-blue',
//     'Linux': 'dark-gray',
//     'Firebase': 'light-pink',
//     'PostgreSQL': 'light-purple'
// };

function Experience(props) {
  return (
    <div className="experience-container">
        <img src={props.details.logo} alt={props.details.companyName + " logo"} className="company-logo"></img>
        <div className="experience-info-container">
            <div className="title-years-row">
                <p className="job-title experience-info-item">{props.details.jobTitle}</p>
                <p className="years experience-info-item">{props.details.years}</p>
            </div>
            <p className="company-info experience-info-item">{props.details.companyName}
                { props.details.location && <span className="location">, {props.details.location}</span>}
            </p>
            <div className="skill-list experience-info-item">
                {
                    props.details.skills.map((skill, idx) => 
                        <Badge key={idx} text={skill} color="purple" bg="bg-light-purple" />
                    )
                }
            </div>
            <ul className="task-list">
                {
                    props.details.tasks.map((task, idx) => 
                        <li key={idx} className="task experience-info-item">{task}</li>
                    )
                }
            </ul>
        </div>
    </div>
  );
}

export default Experience;
