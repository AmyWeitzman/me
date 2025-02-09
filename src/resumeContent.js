import { faChartDiagram, faLaptopCode, faBrain, faServer, faShield, faAtom } from '@fortawesome/free-solid-svg-icons';

import uci_logo from './images/uci_logo.png';
import dod_logo from './images/dod.png';
import awt from './images/awt.png';
import behaivior_logo from './images/behaivior_logo.png';
import hkp_logo from './images/hkp_logo.png';
import propheto_logo from './images/propheto_logo.png';
import siemens_logo from './images/siemens_logo.png';
import mella_logo from "./images/mella_logo.png";
import ec_council_logo from "./images/ec-council_logo.png";
import comptia_logo from "./images/comptia_logo.png";
import aws_logo from "./images/aws.png";

export const schoolInfo = [
    {
        name: "University of California, Irvine",
        major: "Computer Science",
        degreeType: "B.S.",
        startYear: "2017",
        graduationYear: "2021",
        additionalInfo: [
            "Magna Cum Laude",
            "Campuswide Honors Collegium"
        ],
        logo: uci_logo,
        courses: [
            {
                title: "Data Structures & Algorithms",
                icon: faChartDiagram,
                color: '#bab025'  /* yellow */
            },
            {
                title: "Operating Systems & Networks",
                icon: faServer,
                color: '#d67c15'  /* orange */
            }, 
            {
                title: "Cybersecurity",
                icon: faShield,
                color: '#2871de'  /* blue */
            }, 
            { 
                title: "Quantum Computing",
                icon: faAtom,
                color: '#5a22a8'  /* purple */
            },
            {
                title: "AI & Machine Learning",
                icon: faBrain,
                color: '#b8231d'  /* red */
            },
            {
                title: "Software Engineering",
                icon: faLaptopCode,
                color: '#1db83f'  /* green */
            }
        ],
        scholarships: [
            {
                title: "DoD Science, Mathematics, and Research for Transformation (SMART)",
                logo: dod_logo
            },
            {
                title: "Advancing Women in Technology",
                logo: awt
            }
        ]
    },
];

export const experienceInfo = [
    {
        jobTitle: "IT Specialist",
        companyName: "Department of Defense",
        location: "Washington, DC",
        startDate: "Aug 2021",
        endDate: "Present",
        skills: ["Python", "React", "Redux", "HTML", "CSS", "JavaScript", "TypeScript", "SQL", "AWS", "PostgreSQL", "Oracle", "Bash", "Linux", "Git", "Jira", "Jenkins", "Agile"],
        tasks: [
            "Developed analyst training portal on Agile team of 5 using React, TypeScript, HTML, CSS, Python, and Postgres to enable 2K analysts to do small training modules on various intel and data topics to quickly pivot to support emerging global crises",
            "Built app using React/Redux following Agile to enable 10K+ intel analysts to centrally discover data from 20+ sources to reduce analysis time from days to mins to deliver timely, integrated intel to decision-makers",
            "Designed Agile sprint board in Jira to track 100+ tasks for 3 high-priority app deployments to increase accountability of underperforming personnel, provide real-time status updates, & address blockers 2x faster",
            "Automated bulk ticket creation using Jira automation feature to reduce repetitive manual effort from 1hr to 10s per project",
            "Conducted testing for machine learning capability to verify entity extraction & Elasticsearch indexing functionality, leading to successful production deployment to support 3 dependent intel analysis apps",
            "Led Dev team for enterprise data storage solution by following Agile methodology, prioritizing tasks wkly w/Product Manager (PM) & Tech Advisor based on feasibility & release timelines, & training 3 Jr developers, advancing team towards goal to deploy to Production to facilitate efficient enterprise-wide data discovery for 10K+ users",
            "Engineered API by creating SQL script to automate API endpoint & documentation creation process & incorporating role-based access control (RBAC), enabling users to efficiently & securely access enterprise-wide data",
            "Streamlined dataset request form by building personnel directory w/HTML/CSS/JS, SQL, & Active Directory, enabling users to simply search & auto-fill contact info, ensuring data accuracy while saving 5 mins per form",
            "Integrated department classification tool & expanded functionality using HTML/CSS/JS to meet additional requirements, enabling users to easily & accurately mark data requests to ensure proper data protection",
            "Implemented multi-file upload feature by evaluating 4 approaches & deciding to use open-source plugin to overcome complex challenges posed by low-code platform, enabling users to upload data handling policies",
            "Automated 5 manual app changes by adding global variables to pull from Oracle database tables in each env, accelerating deployment process by 30 mins to release new versions of app to customers biwkly vs qtrly",
            "Created app to more effectively track bugs & enhancement requests by analyzing feasibility of 3 solutions, designing UI/UX, and implementing responsive, user-friendly front and back end including standard reporting form based on industry best practices & real-time status updates, enabling Dev team to address feedback 3x faster & eliminate duplicate effort",
           "Built web scraper using Python & cron job to automate wkly job board review by parsing positions based on filters & automatically sending email to notify user of new jobs, saving user 10 mins/wk on manual effort",
           "Resolved 80+ issues identified from user testing by prioritizing feedback based on criticality & feasibility, debugging & researching solutions, & implementing fixes following Agile, improving user satisfaction 50%",
            "Authored app testing guide & researched automated testing solutions, such as Selenium & Cypress, to standardize testing procedures across 3 application environments & accelerate testing process 4x",
            "Maintained 16 Linux cloud servers in AWS by creating Bash scripts to automate routine tasks, deploying patches & upgrading software, & monitoring system performance, saving 4 hrs/wk of manual labor while ensuring security compliance & timely discovery of potential issues to enable proactive mitigation", 
           "Accomplished 2 major enterprise data catalog upgrades by conducting cloud architecture review & analyzing 4 approaches & tradeoffs given system requirements & limited funding to implement solution to scale 16x within current budget while adapting to unforeseen tech & personnel issues & minimizing downtime to <1 hr",
            "Devised & executed plan to address major zero-day vulnerability for 16 cloud servers by evaluating 3 remediation strategies, conducting risk management assessment, & applying patches while minimizing downtime for users to < 1 hr to maintain maximum discoverability of 1K mission-critical datasets for analysis",
            "Composed 4 Bash scripts to automate routine maintenance tasks for 16 AWS Linux servers, saving 4 hrs/wk of manual labor & ensuring timely notifications of potential issues to enable proactive mitigation",
            "Performed user testing & provided recommendations to Sr Dev to address 60 concerns, resulting in deployment of 20 validation rules, which reduced support tickets by 80% & boosted user retention 5x",
            "Established open-source data marketplace by defining requirements & building user interface w/HTML/CSS, enabling the purchase & cataloging of 11 high-priority open-source datasets for broad use, saving agency $100K/yr by avoiding duplicate purchases & accelerating data acquisition from wks to days",
            "Spearheaded creation of on-demand, role-based catalog training resources & FAQ page to easily onboard new users & offer self-service customer support, saving team 5+ hrs/wk on user inquiries",
            "Took initiative to create dashboard with 15 metrics to track agency-wide cataloging progress in real-time as replacement for weekly email reports, enabling leadership to more effectively present updates to Director",
            "Co-led DIA Commercial Data Quality working group to develop agency-wide data evaluation standards by managing group membership & meetings, briefing various data topics, & compiling data quality resources",
            "Organized IC Data Lifecycle Management Community of Practice (DLM CoP) composed of 25 reps from 8 IC elements by identifying topics of interest for the group & coordinating w/speakers, leading monthly meetings to discuss data governance best practices, & briefing various data management topics",
            "Authored 20-pg guide recommending 32 system changes & best practices for implementing data provenance & lineage tracking in 1K+ agency systems to improve data credibility & security to boost confidence in data-driven decisions",
            "Developed data cataloging policy recommending 13 guidelines to enhance agency's data management capabilities & trained 12 officers on how to use enterprise data catalog, resulting in cataloging of 2K datasets"
        ],
        logo: dod_logo
    },
    {
        jobTitle: "Data Scientist",
        companyName: "Mella",
        location: "Remote",
        startDate: "Apr 2023",
        endDate: "Jan 2025",
        skills: ["Python", "ML", "AWS", "Git"],
        tasks: [
            "Developed generative linear machine learning model in Python with 20K time-series data points and 10 features from 160+ pets",
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
            "Implemented data science talent search platform on team of 4 following Agile using Vue, Quasar, CSS, & Firebase while adhering to best practices for website responsiveness & usability to achieve MVP & secure $100K in funding",
            "Spearheaded features such as talent search, skill ranking, profile bookmarks, password reset, profile anonymization",
            "Collaborated with UI designer to draft and incorporate clean, intuitive, responsive website layout to improve usability",
            "Successfully adapted to changing requirements by iteratively producing viable products following Agile principles"
        ],
        logo: propheto_logo
    },
    {
        jobTitle: "IT Data Specialist Intern",
        companyName: "Department of Defense",
        location: "Washington, DC",
        startDate: "Jun 2019",
        endDate: "Sep 2019",
        skills: ["Python", "AWS", "Jenkins", "Git"],
        tasks: [
            "Configured 2-node Amazon Web Services (AWS) ElasticMapReduce (EMR) cluster using Jenkins script to accelerate processing of 2 terabytes of data by 4x for 16 US defense intelligence organizations",
            "Briefed Chief Information Officer and department's senior leaders about potential utilization of clusters to optimize data handling efficiency for department's 10 other big data projects and demoed cluster functionality",
            "Expedited team's onboarding process for 4 new hires by documenting development environment set-up, yielding a 20% reduction in mentor workloads and 50% reduction in new hire onboarding time"
        ],
        logo: dod_logo
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

export const skillLevels = [
    {
        skill1: "Python",
        level1: 5,
        skill2: 'HTML',
        level2: 5
    },
    {
        skill1: 'CSS',
        level1: 5,
        skill2: 'JavaScript',
        level2: 5
    },
    {
        skill1: 'React.js',
        level1: 5,
        skill2: 'Git',
        level2: 5
    },

    {
        skill1: 'Jira',
        level1: 5,
        skill2: 'Agile',
        level2: 5
    },
    {
        skill1: 'TypeScript',
        level1: 4,
        skill2: 'AWS',
        level2: 4
    },
    {
        skill1: 'Vue.js',
        level1: 4,
        skill2: 'SQL',
        level2: 4
    },
    {
        skill1: 'PostgreSQL',
        level1: 4,
        skill2: 'Firebase',
        level2: 4
    },
    {
        skill1: 'REST APIs',
        level1: 4,
        skill2: 'Node.js',
        level2: 3
    },
    {
        skill1: 'Java',
        level1: 3,
        skill2: 'Redux',
        level2: 3
    },
    {
        skill1: 'Jenkins',
        level1: 3,
        skill2: 'C++',
        level2: 3
    },
    {
        skill1: 'Postman',
        level1: 3,
        skill2: 'Figma',
        level2: 3
    },
    {
        skill1: 'Tableau',
        level1: 3,
        skill2: 'GraphQL',
        level2: 3
    },
    {
        skill1: 'Machine Learning',
        level1: 3,
        skill2: 'Google Cloud',
        level2: 3
    },
    {
        skill1: 'Azure',
        level1: 3,
        skill2: 'Linux',
        level2: 3
    },
    {
        skill1: 'Docker',
        level1: 2,
        skill2: 'Cypress',
        level2: 2
    },
    {
        skill1: 'Jest',
        level1: 2,
        skill2: 'JUnit',
        level2: 2
    },
    {
        skill1: 'Bash',
        level1: 2,
        skill2: 'MongoDB',
        level2: 2
    },
    {
        skill1: 'Next.js',
        level1: 1,
        skill2: 'Tailwind CSS',
        level2: 1
    },
    {
        skill1: 'Go',
        level1: 1,
        skill2: 'Rust',
        level2: 1
    },
];

export const skillLevelsMobile = [
    {
        skill: "Python",
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
        skill: 'Jira',
        level: 5
    },
    {
        skill: "Agile",
        level: 5
    },
    {
        skill: 'TypeScript',
        level: 4
    },
    {
        skill: 'AWS',
        level: 4
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
        skill: 'PostgreSQL',
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
        level: 3
    },
    {
        skill: 'Java',
        level: 3
    },
    {
        skill: 'Redux',
        level: 3
    },
    {
        skill: 'Jenkins',
        level: 3
    },
    {
        skill: 'C++',
        level: 3
    },
    {
        skill: 'Postman',
        level: 3
    },
    {
        skill: 'Figma',
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
        skill: 'Machine Learning',
        level: 3
    },
    {
        skill: 'Google Cloud',
        level: 3
    },
    {
        skill: 'Azure',
        level: 3
    },
    {
        skill: 'Linux',
        level: 3
    },
    {
        skill: 'Docker',
        level: 2
    },
    {
        skill: 'Cypress',
        level: 2
    },
    {
        skill: 'Jest',
        level: 2
    },
    {
        skill: 'JUnit',
        level: 2
    },
    {
        skill: 'Bash',
        level: 2
    },
    {
        skill: 'MongoDB',
        level: 1
    },
    {
        skill: 'Next.js',
        level: 1
    },
    {
        skill: 'Tailwind CSS',
        level: 1
    },
    {
        skill: 'Go',
        level: 1
    },
    {
        skill: 'Rust',
        level: 1
    },
];

export const certifications = [
    {
        name: "AWS Certified Developer - Associate",
        organization: "Amazon Web Services (AWS)",
        yearReceived: "Sep 2024",
        yearExpires: "2027",
        logo: aws_logo
    },
    {
        name: "AWS Certified Solutions Architect - Associate",
        organization: "Amazon Web Services (AWS)",
        yearReceived: "Sep 2024",
        yearExpires: "2027",
        logo: aws_logo
    },
    {
        name: "AWS Certified Cloud Practitioner",
        organization: "Amazon Web Services (AWS)",
        yearReceived: "Jul 2023",
        yearExpires: "2027",
        logo: aws_logo
    },
    {
        name: "Security+",
        organization: "CompTIA",
        yearReceived: "Nov 2021",
        yearExpires: "2027",
        logo: comptia_logo
    },
    {
        name: "Ethical Hacking Essentials",
        organization: "EC-Council",
        yearReceived: "Oct 2022",
        yearExpires: "2025",
        logo: ec_council_logo
    },
];
