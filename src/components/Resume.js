import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import './Resume.css';
import Education from "./Education";
import Experience from "./Experience";
import SkillLevel from "./SkillLevel";

import uci_logo from '../images/uci_logo.png';
import propheto_logo from '../images/propheto_logo.png';
import dia_logo from '../images/dia_logo.png';
import siemens_logo from '../images/siemens_logo.png';
import awt from '../images/awt.png';
import smart from '../images/smart.png';
import chp from '../images/chp.PNG';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

const schoolInfo = [
    {
        name: "University of California, Irvine",
        major: "Computer Science",
        degreeType: "B.S.",
        graduation: "Spring 2021",
        logo: uci_logo
    }
];

const experienceInfo = [
    {
        jobTitle: "Software Developer Intern",
        companyName: "Propheto",
        location: "Remote",
        years: "Fall 2020",
        skills: ["HTML", "CSS", "Vue.js", "Firebase", "Git", "Agile"],
        tasks: [
            "Enhanced website on team of 4 using Vue.js, Quasar, Firebase to advance data science talent platform for startup",
            "Spearheaded features such as talent search, skill ranking, profile bookmarks, password reset, profile anonymization",
            "Collaborated with UI designer to draft and incorporate clean, intuitive, responsive website layout to improve usability",
            "Successfully adapted to changing requirements by iteratively producing viable products following Agile principles"
        ],
        logo: propheto_logo
    },
    {
        jobTitle: "Data Intern",
        companyName: "Defense Intelligence Agency",
        location: "Washington, DC",
        years: "Summer 2019",
        skills: ["Python", "AWS", "Jenkins", "Git"],
        tasks: [
            "Configured 2-node Amazon Web Services (AWS) ElasticMapReduce (EMR) cluster using Jenkins script to accelerate processing of 2 terabytes of data by 4x for 16 US defense intelligence organizations",
            "Briefed Chief Information Officer and department’s senior leaders about potential utilization of clusters to optimize data handling efficiency for department’s 10 other big data projects and demoed cluster functionality",
            "Expedited team’s onboarding process for 4 new hires by documenting development environment set-up, yielding a 20% reduction in mentor workloads and 50% reduction in new hire onboarding time"
        ],
        logo: dia_logo
    },
    {
        jobTitle: "Software Engineering Intern",
        companyName: "Siemens PLM Software",
        location: "Cypress, CA",
        years: "Fall 2017—Spring 2019",
        skills: ["Java", "HTML", "CSS", "Vue.js", "Agile"],
        tasks: [
            "Developed software bug tracking application on team of 10 using Java, HTML, CSS, Vue.js following Agile practices to maximize product lifecycle management capability of 1000+ manufacturing companies across 4 continents",
            "Troubleshooted 100+ technical issues on support team of 6 spanning 3 time zones to assist millions of customers",
            "Trained 6 interns over 3 months on customer support duties to reduce individual support workloads by 50%"    
        ],
        logo: siemens_logo
    }
];

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
        level1: 4,
        skill2: 'Vue.js',
        level2: 4
    },
    {
        skill1: 'React.js',
        level1: 4,
        skill2: 'Git',
        level2: 4
    },
    {
        skill1: 'SQL',
        level1: 4,
        skill2: 'Node.js',
        level2: 3
    },
    {
        skill1: 'Firebase',
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
        skill1: 'MongoDB',
        level1: 1,
        skill2: 'GraphQL',
        level2: 1
    }
];

const awards = [
    {
        jobTitle: "Advancing Women in Technology Scholar",
        companyName: "Advancing Women in Technology",
        location: "",
        years: "2020",
        skills: [],
        tasks: [],
        logo: awt
    },
    {
        jobTitle: "SMART Scholarship",
        companyName: "Department of Defense",
        location: "",
        years: "2018—Present",
        skills: [],
        tasks: [],
        logo: smart
    },
    {
        jobTitle: "Campuswide Honors Collegium",
        companyName: "UC Irvine",
        location: "",
        years: "2017—Present",
        skills: [],
        tasks: [],
        logo: chp
    }
];

function Resume() {
  return (
    <div className="resume-content">
        <h3 id="swe-tagline">Aspiring Software Engineer</h3>
        <h5 id="traits-tagline">Passionate | Creative | Curious</h5>
        <a href="https://www.linkedin.com/in/amy-weitzman/" target="_blank">
            <img src={linkedin} alt={"LinkedIn"} width="35" id="linkedin-icon" className="hover-grow"></img>
        </a>
        <a href="https://github.com/AmyWeitzman" target="_blank">
            <img src={github} alt={"GitHub"} width="35" id="github-profile-icon" className="hover-grow"></img>
        </a>
        <h2 className="resume-section-title">EDUCATION</h2>
        {
            schoolInfo.map((el, idx) => <Education key={idx} details={el} />)
        }
        <br></br>
        <h2 className="resume-section-title no-margin-b">EXPERIENCE</h2>
        {
            experienceInfo.map((el, idx) => <Experience key={idx} details={el} />)
        }
        <h2 className="resume-section-title no-margin-b">SKILLS</h2>
        <table id="skills-table">
            <tbody>
                {
                    skillLevels.map((el, idx) => {
                        return (
                            <tr>
                                <td><SkillLevel key={idx+'-1'} skill={el.skill1} level={el.level1} /></td>
                                <td><SkillLevel key={idx+'-2'} skill={el.skill2} level={el.level2} /></td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
        <h2 className="resume-section-title no-margin-b">AWARDS</h2>
        {
            awards.map((el, idx) => 
                <div style={{marginBottom: 50}}>
                    <Experience key={idx} details={el} />
                </div>    
            )
        }
        <a id="download-btn" href="https://github.com/AmyWeitzman/resume/raw/master/Weitzman_Amy.pdf" download>
            <FontAwesomeIcon id="download-icon" icon={faDownload} />
        </a>
    </div>
  );
}

export default Resume;
