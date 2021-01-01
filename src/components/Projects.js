import { faAutoprefixer } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import '../App.css';

import Project from "./Project";

function Projects() {
  return (
    <div className="projects-content" style={{marginTop: 50, marginBottom: 50}}>
        <Project name="HouseHunt"></Project>
        <br></br>
        <Project name="CommunityService"></Project>
        <br></br>
        <Project name="Ivy"></Project>
        <br></br>
        <Project name="FitBuddy"></Project>
        <br></br>
        <Project name="VisFuncTest"></Project>
        <br></br>
        <Project name="RTCJobBoard"></Project>
        <br></br>
        <Project name="RealLife"></Project>
        <br></br>
        <Project name="WikiRaces"></Project>
        <br></br>
        <Project name="Jeopardy"></Project>
        <br></br>
        <Project name="MurderMysteries"></Project>
    </div>
  );
}

export default Projects;
