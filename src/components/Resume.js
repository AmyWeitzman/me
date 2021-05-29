import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import './Resume.css';
import Education from "./Education";
import Experience from "./Experience";
import SkillLevel from "./SkillLevel";

import uci_logo from '../images/uci_logo.png';
import behaivior_logo from '../images/behaivior_logo.png';
import hkp_logo from '../images/hkp_logo.png';
import propheto_logo from '../images/propheto_logo.png';
import dia_logo from '../images/dia_logo.png';
import siemens_logo from '../images/siemens_logo.png';
import awt from '../images/awt.png';
import smart from '../images/smart.png';
import chp from '../images/chp.PNG';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import devpost_logo from '../images/devpost_logo.png';

const schoolInfo = [
    {
        name: "University of California, Irvine",
        major: "Computer Science",
        degreeType: "B.S.",
        graduation: "2021",
        additionalInfo: [
            "Magna Cum Laude",
            "Campuswide Honors Collegium"
        ],
        logo: uci_logo
    }
];

const experienceInfo = [
    {
        jobTitle: "Software Development and Data Science Intern",
        companyName: "Behaivior",
        location: "Remote",
        years: "Winter 2020—Present",
        skills: ["React", "Redux", "TypeScript", "Firebase", "Figma", "Python", "ML", "Git", "Agile"],
        tasks: [
            "Streamline daily survey process by designing and implementing custom survey component using Figma, TypeScript, React.js, Redux, Firebase yielding 3x better response rate and improving data collection efficiency by 50%",
            "Compose event-driven Firebase Cloud Function to automatically send email alerts to care provider when person-in-recovery indicates need for assistance, saving company 10 man-hours per week",
            "Visualize real-time user health information collected from wearables using Victory charts library in React.js and Firebase to monitor potential onset of craving in 1 and 6 hour intervals",
            "Clean dataset of 1.2 million time-series data points to standardize format and aggregate 8 features by time intervals",
            "Streamline data aggregation process by performing incremental aggregation to improve performance by 360%",
            "Train gradient boosted decision trees (XGBoost) classification model in Python to predict whether a person-in-recovery will be craving in the next 6 hours with 100% accuracy",
            "Tune 7 model hyperparameters using 10-fold cross-validation to determine optimal parameters to maximize accuracy",
            "Analyze confusion matrix and logistic loss graph to iteratively adjust model and improve prediction accuracy by 20%",
            "Automate logging for model runs to keep track of model parameters and results for comparison and future replication",
            "Present about XGBoost models to Senior Data Scientist and 5 interns to teach about boosting techniques, hyperparameter tuning, and metric analysis as well as receive feedback from peers to improve my XGBoost model performance"
        ],
        logo: behaivior_logo
    },
    {
        jobTitle: "Front-End Developer Intern",
        companyName: "HKP Solutions",
        location: "Remote",
        years: "Winter 2020—Present",
        skills: ["HTML", "CSS", "React.js", "Redux", "Jest", "Git", "Agile"],
        tasks: [
            "Build 4 customer-oriented features to enhance company web application on team of 8 using React.js and Redux",
            "Collaborate with back-end team to integrate back-end API into front-end application",
            "Test Redux reducers and actions using Jest framework to ensure correctness of code and edge-case coverage"
        ],
        logo: hkp_logo
    },
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
        level1: 5,
        skill2: 'React.js',
        level2: 5
    },
    {
        skill1: 'Vue.js',
        level1: 4,
        skill2: 'Git',
        level2: 4
    },
    {
        skill1: 'SQL',
        level1: 4,
        skill2: 'Firebase',
        level2: 4
    },
    {
        skill1: 'Node.js',
        level1: 4,
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
        level1: 2,
        skill2: 'Tableau',
        level2: 1
    },
    {
        skill1: 'MongoDB',
        level1: 1,
        skill2: 'GraphQL',
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
        skill: 'Vue.js',
        level: 4
    }, 
    {
        skill: 'Git',
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
        skill: 'Node.js',
        level: 4
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
        level: 2
    },
    {
        skill: 'Tableau',
        level: 1
    },
    {
        skill: 'MongoDB',
        level: 1
    },
    {
        skill: 'GraphQL',
        level: 1
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
        <a href="https://devpost.com/amyweitzman" target="_blank">
            <img src={devpost_logo} alt={"Devpost"} width="35" id="devpost-profile-icon" className="hover-grow"></img>
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
        <table id="skills-table-mobile">
            <tbody>
                {
                    skillLevelsMobile.map((el, idx) => {
                        return (
                            <tr>
                                <td><SkillLevel key={idx} skill={el.skill} level={el.level} /></td>
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
