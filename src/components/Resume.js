import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@mui/material/Tooltip';
import '../App.css';
import './Resume.css';
import Education from "./Education";
import Experience from "./Experience";
import SkillLevel from "./SkillLevel";
import ResumeIconLink from "./ResumeIconLink";
import CustomTimeline from './CustomTimeline';

import { schoolInfo, experienceInfo, skillLevels, skillLevelsMobile, certifications, projects } from '../resumeContent';

import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import devpost_logo from '../images/devpost_logo.png';

function Resume() {
  return (
    <div className="resume-content">
        <h3 id="swe-tagline">Technology Enthusiast</h3>
        <h5 id="traits-tagline">Software Engineering | Data Science | Cybersecurity</h5>
        <Tooltip title="LinkedIn">
            <span>
                <ResumeIconLink 
                    id="linkedin-icon"
                    url="https://www.linkedin.com/in/amy-weitzman/"
                    image={linkedin} 
                    altText="LinkedIn"
                />
            </span>
        </Tooltip>
        <Tooltip title="GitHub">
            <span>
                <ResumeIconLink 
                    id="github-profile-icon"
                    url="https://github.com/AmyWeitzman"
                    image={github}
                    altText="GitHub"
                />
            </span>
        </Tooltip>
        <Tooltip title="Devpost">
            <span>
                <ResumeIconLink
                    id="devpost-profile-icon"
                    url="https://devpost.com/amyweitzman"
                    image={devpost_logo}
                    altText="Devpost"
                />
            </span>
        </Tooltip>
        <h2 className="resume-section-title page-section-title">EDUCATION</h2>
        <CustomTimeline elements={schoolInfo.map((el, idx) => (
            {
                startTime: el.startYear,
                endTime: el.graduationYear,
                content: <Education key={`edu-${idx}`} eduIdx={idx} details={el} />
            }
        ))} />
        <br></br>
        <h2 className="resume-section-title no-margin-b page-section-title">EXPERIENCE</h2>
        <CustomTimeline elements={experienceInfo.map((el, idx) => (
            {
                startTime: el.startDate,
                endTime: el.endDate,
                content: <Experience key={`exp-${idx}`} details={el} logoSize="lg" />
            }
        ))} />
        <h2 className="resume-section-title no-margin-b page-section-title">SKILLS</h2>
        <table id="skills-table">
            <tbody>
                {
                    skillLevels.map((el, idx) => {
                        return (
                            <tr key={idx}>
                                <td><SkillLevel key={idx+'-1'} skill={el.skill1} level={el.level1} /></td>
                                <td><SkillLevel key={idx+'-2'} skill={el.skill2} level={el.level2} /></td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
        <table id="skills-table-mobile">
            <tbody>
                {
                    skillLevelsMobile.map((el, idx) => {
                        return (
                            <tr key={idx}>
                                <td><SkillLevel key={idx} skill={el.skill} level={el.level} /></td>
                            </tr>
                        );
                    })  
                }
            </tbody>
        </table>
        <h2 className="resume-section-title no-margin-b page-section-title">CERTIFICATIONS</h2>
        <div className="certs-grid-container">
            {
                certifications.map((cert, idx) => {
                    return (
                        <div key={idx} className="certs-grid-item">
                            <img src={cert.logo} alt={cert.organization + " logo"} className="cert-logo"></img>
                            <h3 className='cert-name'>{cert.name}</h3>
                            <p className='cert-org'>{cert.organization}</p>
                            <p className='cert-years'>{cert.yearReceived} - {cert.yearExpires}</p>
                        </div>
                    );
                })
            }
        </div>
        <h2 className="resume-section-title no-margin-b page-section-title">PROJECTS</h2>
        <CustomTimeline elements={projects.map((el, idx) => (
            {
                startTime: el.startDate,
                endTime: el.endDate,
                content: <Experience key={`exp-${idx}`} details={el} logoSize="lg" />
            }
        ))} />
        <a id="download-btn" href="https://docs.google.com/document/d/1y0NEipN5VtPHLi9XaYeCIJUqzGe0XDAAofJnFoR8Enc/edit?usp=sharing" target="_blank">
            <FontAwesomeIcon id="download-icon" icon={faDownload} /> <span className='download-resume-text'>Download Resume</span>
        </a>
    </div>
  );
}

export default Resume;
