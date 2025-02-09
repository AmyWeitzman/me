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

import { schoolInfo, experienceInfo, skillLevels, skillLevelsMobile } from '../resumeContent';

import rtc from '../images/rtc_outline.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import devpost_logo from '../images/devpost_logo.png';
import ec_council_logo from "../images/ec-council_logo.png";
import neo4j_logo from "../images/neo4j_logo.png";
import comptia_logo from "../images/comptia_logo.png";
import tableau_logo from "../images/tableau_logo.png";
import codepath_logo from "../images/codepath_logo.png";

const certificates = [
    {
        jobTitle: "Ethical Hacking Essentials",
        companyName: "EC-Council",
        location: "",
        years: "Nov 2022",
        skills: [],
        tasks: [],
        logo: ec_council_logo
    },
    {
        jobTitle: "Neo4j",
        companyName: "Neo4j",
        location: "",
        years: "Aug 2022",
        skills: [],
        tasks: [],
        logo: neo4j_logo
    },
    {
        jobTitle: "Security+",
        companyName: "CompTIA",
        location: "",
        years: "Nov 2021",
        skills: [],
        tasks: [],
        logo: comptia_logo
    },
    {
        jobTitle: "Tableau",
        companyName: "Tableau",
        location: "",
        years: "Mar 2021",
        skills: [],
        tasks: [],
        logo: tableau_logo
    },
    {
        jobTitle: "CodePath Cybersecurity",
        companyName: "CodePath",
        location: "",
        years: "Mar 2021",
        skills: [],
        tasks: [],
        logo: codepath_logo
    },
];

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
        <h2 className="resume-section-title">EDUCATION</h2>
        <CustomTimeline elements={schoolInfo.map((el, idx) => (
            {
                startTime: el.startYear,
                endTime: el.graduationYear,
                content: <Education key={`edu-${idx}`} eduIdx={idx} details={el} />
            }
        ))} />
        <br></br>
        <h2 className="resume-section-title no-margin-b">EXPERIENCE</h2>
        <CustomTimeline elements={experienceInfo.map((el, idx) => (
            {
                startTime: el.startDate,
                endTime: el.endDate,
                content: <Experience key={`exp-${idx}`} details={el} />
            }
        ))} />
        <h2 className="resume-section-title no-margin-b">SKILLS</h2>
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
        <h2 className="resume-section-title no-margin-b">CERTIFICATES</h2>
        {
            certificates.map((el, idx) => 
                <div style={{marginBottom: 50}} key={idx}>
                    <Experience key={idx} details={el} />
                </div>    
            )
        }
        {/* <h2 className="resume-section-title no-margin-b">AWARDS</h2>
        {
            awards.map((el, idx) => 
                <div style={{marginBottom: 50}} key={idx}>
                    <Experience key={idx} details={el} />
                </div>    
            )
        } */}
        <a id="download-btn" href="https://github.com/AmyWeitzman/resume/raw/master/Weitzman_Amy.pdf" download>
            <FontAwesomeIcon id="download-icon" icon={faDownload} /> <span className='download-resume-text'>Download</span>
        </a>
    </div>
  );
}

export default Resume;
