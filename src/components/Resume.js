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

import { schoolInfo, experienceInfo } from '../resumeContent';

import rtc from '../images/rtc_outline.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import devpost_logo from '../images/devpost_logo.png';
import ec_council_logo from "../images/ec-council_logo.png";
import neo4j_logo from "../images/neo4j_logo.png";
import comptia_logo from "../images/comptia_logo.png";
import tableau_logo from "../images/tableau_logo.png";
import codepath_logo from "../images/codepath_logo.png";

const skillLevels = [
    {
        skill1: "Python",
        level1: 5,
        skill2: 'Java',
        level2: 5
    },
    {
        skill1: 'HTML',
        level1: 5,
        skill2: 'CSS',
        level2: 5
    },
    {
        skill1: 'JavaScript',
        level1: 5,
        skill2: 'React.js',
        level2: 5
    },

    {
        skill1: 'Git',
        level1: 5,
        skill2: 'Vue.js',
        level2: 4
    },
    {
        skill1: 'SQL',
        level1: 4,
        skill2: 'Firebase',
        level2: 4
    },
    {
        skill1: 'REST APIs',
        level1: 4,
        skill2: 'Node.js',
        level2: 4
    },
    {
        skill1: 'Redux',
        level1: 3,
        skill2: 'PostgreSQL',
        level2: 3
    },
    {
        skill1: 'C++',
        level1: 3,
        skill2: 'Figma',
        level2: 3
    },
    {
        skill1: 'TypeScript',
        level1: 3,
        skill2: 'Tableau',
        level2: 3
    },
    {
        skill1: 'GraphQL',
        level1: 3,
        skill2: 'MongoDB',
        level2: 1
    }
];

const skillLevelsMobile = [
    {
        skill: "Python",
        level: 5
    },
    {
        skill: 'Java',
        level: 5
    },
    {
        skill: 'HTML',
        level: 5
    },
    {
        skill: 'CSS',
        level: 5
    },
    {
        skill: 'JavaScript',
        level: 5
    },
    {
        skill: 'React.js',
        level: 5
    },
    {
        skill: 'Git',
        level: 5
    },
    {
        skill: 'Vue.js',
        level: 4
    }, 
    {
        skill: 'SQL',
        level: 4
    },
    {
        skill: 'Firebase',
        level: 4
    },
    {
        skill: 'REST APIs',
        level: 4
    },
    {
        skill: 'Node.js',
        level: 4
    },
    {
        skill: 'Redux',
        level: 3
    },
    {
        skill: 'PostgreSQL',
        level: 3
    },
    {
        skill: 'C++',
        level: 3
    },
    {
        skill: 'Figma',
        level: 3
    },
    {
        skill: 'TypeScript',
        level: 3
    },
    {
        skill: 'Tableau',
        level: 3
    },
    {
        skill: 'GraphQL',
        level: 3
    },
    {
        skill: 'MongoDB',
        level: 1
    }
];

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
