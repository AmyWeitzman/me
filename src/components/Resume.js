import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import './Resume.css';
import Education from "./Education";
import Experience from "./Experience";
import SkillLevel from "./SkillLevel";
import ResumeIconLink from "./ResumeIconLink";
import CustomTimeline from './CustomTimeline';

import { schoolInfo } from '../resumeContent';

import behaivior_logo from '../images/behaivior_logo.png';
import hkp_logo from '../images/hkp_logo.png';
import propheto_logo from '../images/propheto_logo.png';
import dia_logo from '../images/dia_logo.png';
import siemens_logo from '../images/siemens_logo.png';
import awt from '../images/awt.png';
import rtc from '../images/rtc_outline.png';
import smart from '../images/smart.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import devpost_logo from '../images/devpost_logo.png';
import ec_council_logo from "../images/ec-council_logo.png";
import neo4j_logo from "../images/neo4j_logo.png";
import comptia_logo from "../images/comptia_logo.png";
import tableau_logo from "../images/tableau_logo.png";
import codepath_logo from "../images/codepath_logo.png";
import mella_logo from "../images/mella_logo.png";



const experienceInfo = [
    {
        jobTitle: "Data Scientist",
        companyName: "Mella",
        location: "Remote",
        startDate: "Apr 2023",
        endDate: "Jan 2025",
        skills: ["Python", "ML", "AWS", "Git"],
        tasks: [
            "Developed generative linear machine learning model in Python with 20K time-series data points and 10 features from 160+ pets to predict body temperature with 95% accuracy",
            "Evaluated implementation feasibility for 9 models, including LSTM and gradient boosting regressor, by analyzing accuracy, complexity, and efficiency requirements and tradeoffs to recommend final solution",
            "Performed exploratory data analysis to identify outliers, null values, and inaccurate measurements that may skew results, and applied techniques, including stratified group k-fold cross-validation and oversampling, to reduce bias from unbalanced feature distribution",
            "Achieved 50% increase in model efficiency and 20% increase in model accuracy by conducting hyperparamter tuning, applying feature engineering techniques, including scaling, binning, logistic and quadratic transformation, and categorical encoding, and feature selection techniques which reduced feature dimensionality by 75%",
            "Analyzed data with poor model performance to identify underlying issues, including improper thermometer calibration and thermometer detachment from pet during temperature reading, and designed data quality score metric based on this criteria to provide prediction confidence level",
            "Wrote modular, thoroughly commented code for maximum understandability and reuse",
            "Deployed serverless API in AWS using API Gateway and Lambda to run model on real-time temperature readings and report temperature prediction with data quality score"
        ],
        logo: mella_logo
    },
    {
        jobTitle: "Software Development and Data Science Intern",
        companyName: "Behaivior",
        location: "Remote",
        startDate: "Jan 2021",
        endDate: "May 2021",
        skills: ["React", "Redux", "TypeScript", "Firebase", "Figma", "Python", "ML", "Git", "Agile"],
        tasks: [
            "Streamlined daily survey process by designing and implementing custom survey component using Figma, TypeScript, React.js, Redux, Firebase yielding 3x better response rate and improving data collection efficiency by 50%",
            "Composed event-driven Firebase Cloud Function to automatically send email alerts to care provider when person-in-recovery indicates need for assistance, saving company 10 man-hours per week",
            "Visualized real-time user health information collected from wearables using Victory charts library in React.js and Firebase to monitor potential onset of craving in 1 and 6 hour intervals",
            "Cleaned dataset of 1.2 million time-series data points to standardize format and aggregate 8 features by time intervals",
            "Streamlined data aggregation process by performing incremental aggregation to improve performance by 360%",
            "Trained gradient boosted decision trees (XGBoost) classification model in Python to predict whether a person-in-recovery will be craving in the next 6 hours with > 90% accuracy",
            "Tuned 7 model hyperparameters using 10-fold cross-validation to determine optimal parameters to maximize accuracy"
        ],
        logo: behaivior_logo
    },
    {
        jobTitle: "Front-End Developer Intern",
        companyName: "HKP Solutions",
        location: "Remote",
        startDate: "Dec 2020",
        endDate: "May 2021",
        skills: ["HTML", "CSS", "React", "Redux", "Jest", "Git", "Agile"],
        tasks: [
            "Built 4 customer-oriented features to enhance company web application on team of 8 using React.js and Redux",
            "Collaborated with back-end team to integrate back-end API into front-end application",
            "Tested Redux reducers and actions using Jest framework to ensure correctness of code and edge-case coverage"
        ],
        logo: hkp_logo
    },
    {
        jobTitle: "Software Developer Intern",
        companyName: "Propheto",
        location: "Remote",
        startDate: "Sep 2020",
        endDate: "Nov 2020",
        skills: ["HTML", "CSS", "Vue", "Firebase", "Git", "Agile"],
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
        startDate: "Jun 2019",
        endDate: "Sep 2019",
        skills: ["Python", "AWS", "Jenkins", "Git"],
        tasks: [
            "Configured 2-node Amazon Web Services (AWS) ElasticMapReduce (EMR) cluster using Jenkins script to accelerate processing of 2 terabytes of data by 4x for 16 US defense intelligence organizations",
            "Briefed Chief Information Officer and department's senior leaders about potential utilization of clusters to optimize data handling efficiency for department’s 10 other big data projects and demoed cluster functionality",
            "Expedited team's onboarding process for 4 new hires by documenting development environment set-up, yielding a 20% reduction in mentor workloads and 50% reduction in new hire onboarding time"
        ],
        logo: dia_logo
    },
    {
        jobTitle: "Software Engineering Intern",
        companyName: "Siemens PLM Software",
        location: "Cypress, CA",
        startDate: "Sep 2017",
        endDate: "Jun 2019",
        skills: ["Java", "HTML", "CSS", "Vue", "Agile"],
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

const awards = [
    {
        jobTitle: "SMART Scholar",
        companyName: "Department of Defense",
        location: "",
        years: "2018—Present",
        skills: [],
        tasks: [],
        logo: smart
    },
    {
        jobTitle: "Rewriting the Code Fellow",
        companyName: "Rewriting the Code",
        location: "",
        years: "2018—Present",
        skills: [],
        tasks: [],
        logo: rtc
    },
    {
        jobTitle: "Advancing Women in Technology Scholar",
        companyName: "Advancing Women in Technology",
        location: "",
        years: "2020",
        skills: [],
        tasks: [],
        logo: awt
    }
];

function Resume() {
  return (
    <div className="resume-content">
        <h3 id="swe-tagline">Technology Enthusiast</h3>
        <h5 id="traits-tagline">Software Engineering | Data Science | Cybersecurity</h5>
        <ResumeIconLink 
            id="linkedin-icon"
            url="https://www.linkedin.com/in/amy-weitzman/"
            image={linkedin} 
            altText="LinkedIn"
        />
        <ResumeIconLink 
            id="github-profile-icon"
            url="https://github.com/AmyWeitzman"
            image={github}
            altText="GitHub"
        />
        <ResumeIconLink
            id="devpost-profile-icon"
            url="https://devpost.com/amyweitzman"
            image={devpost_logo}
            altText="Devpost"
        />
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
        {/* {
            experienceInfo.map((el, idx) => <Experience key={idx} details={el} />)
        } */}
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
        <h2 className="resume-section-title no-margin-b">AWARDS</h2>
        {
            awards.map((el, idx) => 
                <div style={{marginBottom: 50}} key={idx}>
                    <Experience key={idx} details={el} />
                </div>    
            )
        }
        <a id="download-btn" href="https://github.com/AmyWeitzman/resume/raw/master/Weitzman_Amy.pdf" download>
            <FontAwesomeIcon id="download-icon" icon={faDownload} /> <span className='download-resume-text'>Download</span>
        </a>
    </div>
  );
}

export default Resume;
