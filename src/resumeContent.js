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
        companyName: "Federal Government",
        location: "Washington, DC",
        startDate: "Aug 2021",
        endDate: "Present",
        skills: ["Python", "React", "Redux", "HTML", "CSS", "JavaScript", "TypeScript", "SQL", "AWS", "PostgreSQL", "Oracle", "Bash", "Linux", "Git", "Jira", "Jenkins", "Agile"],
        tasks: [
            "Developed training portal on Agile team of 5 using React, TypeScript, HTML, CSS, Python, and Postgres to enable 2K users to do upskill on various topics and support cross-organizational efforts",
            "Built app using React/Redux following Agile to enable 10K+ users to centrally discover data from 20+ services to reduce data analysis time from days to mins",
            "Designed Agile sprint board in Jira to track 100+ tasks for 3 high-priority app deployments to increase accountability of underperforming personnel, provide real-time status updates, & address blockers 2x faster",
            "Automated bulk ticket creation using Jira automation feature to reduce repetitive manual effort from 1hr to 10s per project",
            "Conducted testing for machine learning capability to verify entity extraction & Elasticsearch indexing functionality, leading to successful production deployment to support 3 dependent apps",
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
            "Devised & executed plan to address major zero-day vulnerability for 16 cloud servers by evaluating 3 remediation strategies, conducting risk management assessment, & applying patches while minimizing downtime for users to < 1 hr to maintain maximum discoverability of 1K key datasets",
            "Composed 4 Bash scripts to automate routine maintenance tasks for 16 AWS Linux servers, saving 4 hrs/wk of manual labor & ensuring timely notifications of potential issues to enable proactive mitigation",
            "Performed user testing & provided recommendations to Sr Dev to address 60 concerns, resulting in deployment of 20 validation rules, which reduced support tickets by 80% & boosted user retention 5x",
            "Established open-source data marketplace by defining requirements & building user interface w/HTML/CSS, enabling the purchase & cataloging of 11 high-priority open-source datasets for broad use, saving agency $100K/yr by avoiding duplicate purchases & accelerating data acquisition from wks to days",
            "Spearheaded creation of on-demand, role-based catalog training resources & FAQ page to easily onboard new users & offer self-service customer support, saving team 5+ hrs/wk on user inquiries",
            "Took initiative to create dashboard with 15 metrics to track agency-wide cataloging progress in real-time as replacement for weekly email reports, enabling leadership to more effectively present updates to ledaership",
            "Co-led enterprise-wide Commercial Data Quality working group to develop agency-wide data evaluation standards by managing group membership & meetings, briefing various data topics, & compiling data quality resources",
            "Organized Data Lifecycle Management Community of Practice (DLM CoP) composed of 25 reps from 8 agencies by identifying topics of interest for the group & coordinating w/speakers, leading monthly meetings to discuss data governance best practices, & briefing various data management topics",
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
        companyName: "Federal Government",
        location: "Washington, DC",
        startDate: "Jun 2019",
        endDate: "Sep 2019",
        skills: ["Python", "AWS", "Jenkins", "Git"],
        tasks: [
            "Configured 2-node Amazon Web Services (AWS) ElasticMapReduce (EMR) cluster using Jenkins script to accelerate processing of 2 terabytes of data by 4x for 16 federal agencies",
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

export const projects = [
    {
        jobTitle: "TryHackMe",
        companyName: "",
        location: "",
        startDate: "Oct 2022",
        endDate: "Dec 2022",
        skills: ["Cybersecurity", "Linux"],
        tasks: [
            "Reviewed 70 hours of cybersecurity training covering red and blue team topics such as network exploitation, privilege escalation, web exploitation, & network defense",
            "Completed 22 labs for Linux using Burp, Metasploit, Nmap, Wireshark, password cracking tools, & web exploitation techniques, such as cross-site scripting, command & SQL injection, indirect object reference (IDOR), & file inclusion attacks, to exploit 50+ vulnerabilities"
        ],
        logo: null
    },
    {
        jobTitle: "Cybersecurity Virtual Experience Program",
        companyName: "JPMorgan Chase & Co.",
        location: "",
        startDate: "Jul 2022",
        endDate: "",
        skills: ["Cybersecurity", "Python"],
        tasks: [
            "Analyzed 200K financial transactions using Python script to detect fraud based on transaction source, destination, type, and frequency & developed proof-of-concept for role-based access control (RBAC) system to more securely manage access to sensitive company information"
        ],
        logo: null
    },
    {
        jobTitle: "Cybersecurity Virtual Experience Program",
        companyName: "SAP",
        location: "",
        startDate: "Jul 2022",
        endDate: "",
        skills: ["Cybersecurity"],
        tasks: [
            "Enhanced security of 10K critical passwords by identifying 5 weaknesses in password requirements & implementing more secure rules while increasing compliance by 40%, & wrote impact analysis report"
        ],
        logo: null
    },
    {
        jobTitle: "Ally",
        companyName: "https://devpost.com/software/ally-6dc8ge",
        location: "ShellHacks",
        startDate: "Sep 2021",
        endDate: "",
        skills: ["React", "HTML", "CSS", "JavaScript", "Firebase", "REST APIs"],
        tasks: [
            "ShellHacks 2021: Did you know that 3.8 million U.S. adults aged 21-64 are blind or have trouble seeing, even with glasses? Or that more than 466 million people worldwide have a hearing disability? Unfortunately, 98% of the world's top one million websites don't offer full accessibility and 71% of website visitors with disabilities will leave a website that is not accessible. With technology being a prominent feature of everyday life, it is crucial that people develop websites that adhere to accessibility standards and guidelines so that everyone has an opportunity to access content on the web. However, much of the tools and information that is available to help developers ensure that their sites contain the necessary accessibility features is not well known and requires people to use multiple tools. Thus, it is easy for developers to skip this crucial development step. But, since the internet is necessary for everyone's lives, developers should be an ally for the A11Y community. I created a website that eases this process and provides centralized tools and resources for developers to check the accessibility of their site and receive guidance on how to fix the issues. Ally is a web application that helps developers find the accessibility issues in their site and fix them using provided guidance and resources. Ally allows users to create an account and run a scan on their website URL to check against Web Content Accessibility Guideline (WCAG) errors. After the scan, the user will be provided with a report of accessibility errors, categorized by type, along with brief explanations of the specific issues. The categories are color-coded based on how many issues were found in that category to alert the user to areas that need more work than others. The user can also view a breakdown the errors by category to see which categories they are doing better or worse in to guide their future website updates. When the report is generated, the user can also receive an email sent via Courier. If I had more time, I would also include a way for users to view past reports and see metrics about how their site accessibility is improving. Finally, there is a page with a list of resources to help developers fix accessibility issues. Overall, the website includes many accessibility features itself, including contrasting colors, symbols along with text and color, and patterns on the report chart for those who are colorblind. The web app was built using React, Bootstrap, Chart.js, Firebase, the WAVE Web Accessibility API, and the Courier API."
        ],
        logo: null
    },
    {
        jobTitle: "Cybersecurity Virtual Experience Program",
        companyName: "Genius Armoury",
        location: "",
        startDate: "May 2021",
        endDate: "",
        skills: ["Cybersecurity", "Linux"],
        tasks: [
            "Completed 6-hr intro cyber training covering threats and exploits, networks, forensics, and cyber tools",
            "Analyzed 4 network traffic logs using Wireshark to identify suspicious activity and potential attacks"
        ],
        logo: null
    },
    {
        jobTitle: "Beach Cleanup",
        companyName: "https://devpost.com/software/beach-cleanup",
        location: "BeachHacks",
        startDate: "Apr 2021",
        endDate: "",
        skills: ["Python"],
        tasks: [
            "BeachHacks 2021: I wanted to create a game to encourage people to care about the environment and participate in beach cleanups. I developed a game where a player can move around the beach to pick up pieces of trash, such as water bottles, soda cans, and cigarettes. But, the player must avoid obstacles, such as crabs, seagulls, and seaweed. If the player runs into an obstacle, it's game over. The player can also collect seashells, which are worth extra points. Since the images for the trash, obstacles, and seashells aren't exactly rectangular, the default collision function from PyGame wasn't working well for detecting collisions between objects in the game. So I created my own object detection algorithm that takes into account that the boundaries of the object aren't exactly the corners of the image but rather somewhere inside the image. I learned how to use PyGame to create games. I also learned how to add sound effects when the player collects objects."
        ],
        logo: null
    },
    {
        jobTitle: "Daily Water Intake Calculator",
        companyName: "https://devpost.com/software/daily-water-intake-calculator",
        location: "HackDartmouth",
        startDate: "Apr 2021",
        endDate: "",
        skills: ["HTML", "CSS", "JavaScript"],
        tasks: [
            "HackDartmouth 2021: Often, people aren't drinking enough water throughout the day, which can cause them to become dehydrated and lead to health issues. I decided to make a website that helps people learn how much water they should drink per day to help them stay healthy. I built a website that allows the user to input their weight and the amount of exercise they do per day to calculate how many cups of water they should be drinking per day."
        ],
        logo: null
    },
    {
        jobTitle: "Yoda Mad Libs",
        companyName: "https://devpost.com/software/yoda-mad-libs",
        location: "DragonHacks",
        startDate: "Apr 2021",
        endDate: "",
        skills: ["HTML", "CSS", "JavaScript"],
        tasks: [
            "DragonHacks 2021: I love doing Mad Libs with people and I wanted to create one with a twist. The stories are translated into Yodish (Yoda Speak). I built a website that allows the user to select 1 of 3 story options and then fill in the requested fields, such as noun, adjective, etc... Then the user can generate the Mad Lib, which displays the final story with the user's words inserted. But, the story is translated into Yodish, which is the way Yoda from Star Wars speaks. I built the website using HTML, CSS, and JavaScript. I also used the FunTranslations Yoda API for the translations."
        ],
        logo: null
    },
    {
        jobTitle: "English-to-Minion Translator",
        companyName: "https://devpost.com/software/english-to-minion-translator",
        location: "hello:world",
        startDate: "Apr 2021",
        endDate: "",
        skills: ["HTML", "CSS", "JavaScript", "REST APIs"],
        tasks: [
            "hello:world hackathon 2021: I wanted to create a funny hack and I found an API that translated English phrases to the language of the Minions from Despicable Me. I built the website using HTML, CSS, and JavaScript. I also used the FunTranslations Minion API to perform the translation from English to Minion."
        ],
        logo: null
    },
    {
        jobTitle: "My Carbon Footprint",
        companyName: "https://devpost.com/software/my-carbon-footprint",
        location: "SD Hacks",
        startDate: "Feb 2021",
        endDate: "",
        skills: ["Python", "Flask", "HTML", "CSS", "CockroachDB"],
        tasks: [
            "SD Hacks 2021: My project was inspired by this hackathon's sustainability track and emphasis on fighting climate change. The first step to raising awareness about climate change is helping people understand what impact they are having on the environment and how they are individually contributing to climate change. Once people are aware of their impact on the environment, they can take steps to reduce their carbon footprint. Often, people don't know where to start when it comes to fighting climate change. Additionally, many people probably think that fighting climate change takes a massive campaign and requires a lot of time and effort. However, that's not true. There are many simple actions people can take every day to reduce their negative environmental impact. By providing people with suggestions on the little things they can do to make the world a better place, they'll be more likely to do their part. I built a web application that allows a user to input their transportation habits and calculate their carbon footprint. The app displays the user's carbon footprint based on their input and then lists suggestions of simple actions they can take to reduce their carbon footprint."
        ],
        logo: null
    },
    {
        jobTitle: "Emergency Contact Search",
        companyName: "https://devpost.com/software/emergency-contact-search",
        location: "FemmeHacks",
        startDate: "Feb 2021",
        endDate: "",
        skills: ["HTML", "CSS", "JavaScript"],
        tasks: [
            "FemmeHacks 2021: I wanted to do a hack for social good and with all the global emergencies over the last year, from the pandemic to wildfires, I decided to make a website that would easily provide the contact information of emergency services in your local area. I built the website using HTML, CSS, Bootstrap, and JavaScript. I also got the emergency contact information from the Precisely PSAP API. I am proud of myself for completing a hack that helps benefit the community and make people feel safer and more at ease during these troubling times.I learned how to integrate and API and use authentication. I also learned how to incorporate Bootstrap to make my UI cleaner."
        ],
        logo: null
    },
    {
        jobTitle: "ZotDiet",
        companyName: "",
        location: "",
        startDate: "Jan 2021",
        endDate: "Mar 2021",
        skills: ["React", "HTML", "CSS", "Firebase", "REST APIs", "ML"],
        tasks: [
            "Designed & implemented personalized meal recommendation web app on team of 4 using React & Firebase",
            "Performed natural language processing to standardize data, accelerating meal ranking algorithm 20%"
        ],
        logo: null
    },
    {
        jobTitle: "Wikipedia Races Solver",
        companyName: "https://github.com/AmyWeitzman/Wikipedia-Races-Solver",
        location: "",
        startDate: "Aug 2020",
        endDate: "",
        skills: ["Python", "Web Scraping"],
        tasks: [
            "When I first found out about Wikipedia Races, they seemed awesome! But, it was tough to find which links to click to get to the end. I wondered, can I build a web scraper to do this? Using Python and Beautiful Soup, I developed a web scraper to parse Wikipedia pages and follow the links to find the destination. NOTE: it is not fast, I tried to honor polite web scraping protocol and added a 3-10 second delay between requests"
        ],
        logo: null
    },
    {
        jobTitle: "Job Board",
        companyName: "Rewriting the Code (RTC)",
        location: "",
        startDate: "Jun 2020",
        endDate: "Aug 2020",
        skills: ["Figma"],
        tasks: [
            "When my internship for summer 2020 was cancelled at the last minute, I had trouble finding something meaningful to do over the summer to continue building my skills. Fortunately, an organization I am a part of called Rewriting the Code, which supports college women in tech, decided to develop a mini-internship program for those members whose internships were cancelled due to the pandemic. I was placed on the Job Board Data Collection team along with 5 other students. Our task was to design a job board for RTC members to more easily find and track internship and job opportunities from RTC's partner companies and then collect data to give RTC leadership actionable insight into how RTC members are using the job board and how it could be improved. Over the course of the 8 week project, our team developed a Figma prototype of the Job Board Analytics Dashboard that included in-depth, customizable analysis for RTC to review. This project was fun to work on because I learned how to use Figma and got to work with a group of amazing women from all over the country."
        ],
        logo: null
    },
    {
        jobTitle: "Real Life",
        companyName: "https://github.com/AmyWeitzman/RealLife",
        location: "",
        startDate: "May 2020",
        endDate: "Aug 2020",
        skills: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
        tasks: [
            "I grew up playing the Game of Life, but now that I'm older, I realize how unrealistic much of that game is so I decided to make a more realistic verison called Real Life. Complete with job, house, cars, families, and yearly expenses, the game encompasses much of the different paths, decisions, hardships, and opportunities of real life. Spanning ages 18 to 65, people can choose their path, whether it be going to college (and incurring a lot of debt, of course), joining the military (with great benefits), buying a house and car, having kids, traveling, investing, and much more. You earn (and lose) points for the decisions you make as well as random things life throws at you. The goal of the game is to have the most points at the end. The great thing is that there are so many ways the game could turn out, my family can play it again and again and each game will be unique."
        ],
        logo: null
    },
    {
        jobTitle: "House Hunt",
        companyName: "https://github.com/AmyWeitzman/House-Hunt",
        location: "",
        startDate: "Apr 2020",
        endDate: "",
        skills: ["Python", "React", "HTML", "CSS", "JavaScript", "Twilio"],
        tasks: [
            "Being stuck at home during the COVID-19 pandemic, playing games so much they became boring, and not being as active outdoors, I decided to make a real-life Scattergories game called House Hunt that my family could play to have fun and stay in shape. Using our phones, we text a phone number to join the game and then receive a text message with a list of categories and a letter. Everyone then runs around the house, searching for objects that fit the category and start with the letter. When we find objects, we take a picture and send it to the phone number. The data is stored and when the game is over, it is fed to a website I built where we can see everyone's results and give out points for unique responses. The back-end and data processing were built with Python and the Twilio API, and the front-end website was built with React, HTML, CSS, and JavaScript. This was project was fun since it was my first time using an API and it was great that my family could play together."
        ],
        logo: null
    },
    {
        jobTitle: "Ivy",
        companyName: "https://github.com/AmyWeitzman/IvyHacks",
        location: "",
        startDate: "Oct 2020",
        endDate: "",
        skills: ["IBM Watson", "HTML", "CSS"],
        tasks: [
            "Meet Ivy, a mental health chatbot to help users find information about mental illnesses, provide resources such as support groups, and suggest activities to better control their mental health. Mental illness is a major issue facing people today, especially during the pandemic. However, while it is a widespread issue, most people with mental illnesses do not seek treatment, often due to the stigma surrounding it. That's why I decided to build Ivy, a mental health chatbot that you can feel comfortable communicating with and discussing your situation knowing that you won't be judged. Ivy can also suggest resources to help you learn more about your mental illness and ways to overcome it. I built Ivy at IvyHacks, a hackathon hosted by the Ivy League universities, using IBM Watson Assistant. Then I developed a website using HTML and CSS that provides some statistics about mental illnesses to give users a better understanding of the widespread issue and know that they are not alone. Some helpful resources are also listed on the page. The Ivy chatbot on the website can help you with issues including depression, anxiety, stress, PTSD, addiction, ADHD, OCD, eating disorders, and suicidal thoughts. Based on your input, Ivy will send a response with information about your mental illness, resources such as support groups, and activity suggestions to better control your mental health. This project was my first time developing a chatbot and working with IBM Watson Assistant. It was also a great way for me to do critical research about mental illnesses and provide a safe space for people with mental illnesses to express their feelings and seek help."
        ],
        logo: null
    },
    {
        jobTitle: "Fit Buddy",
        companyName: "https://github.com/AmyWeitzman/Fit-Buddy",
        location: "",
        startDate: "Sep 2020",
        endDate: "Dec 2020",
        skills: ["Arduino UNO", "AWS", "PostgreSQL", "Tableau"],
        tasks: [
           "To learn more about how hardware and software components work together across the Internet, I decided to take an IoT course, which involved working with an Arduino UNO, sensors, and cloud services. I enjoyed learning about how to work with hardware (I even learned how to solder) and connect wires to different components. For my final project, I built an exercise tracker called Fit Buddy that uses an accelerometer and a wifi module to keep track of the user's exercise time and step count as well as provide analysis to help them improve and reach their goals. The wifi module sends the data collected from the sensors to an AWS EC2 instance and then stores it in a Postgres database. Then, I pull the data into Tableau to create some graphs and give the user insight into how their exercise duration and step count has changed over time and whether they are meeting their goals. This project was a great way to get hands-on experience working with IoT devices and create an interesting, meaningful product"
        ],
        logo: null
    },
    {
        jobTitle: "At-Home Visual Function Testing Prototype",
        companyName: "UC Irvine - Undergraduate Research Assistant",
        location: "",
        startDate: "Sep 2019",
        endDate: "Jun 2020",
        skills: ["Python"],
        tasks: [
            "Established novel visual function testing system using Python & Pupil Labs hardware to more comfortably & objectively evaluate patient contrast sensitivity & visual acuity with real-time feedback & 10 custom settings"
        ],
        logo: null
    },
    {
        jobTitle: "Jeopardy",
        companyName: "",
        location: "",
        startDate: "Jun 2018",
        endDate: "Jul 2018",
        skills: ["Java"],
        tasks: [
            "A trivia buff and programming enthusiast whose goal is to one day be able to answer (or rather question) every clue on Jeopardy, I decided to spend one of my summers creating my own Jeopardy game. The design was based on the real Jeopardy TV show, including various categories, multiple rounds, and wagers. However, I also used my creativity to change certain aspects of the game to make it more unique and fun for my entire family. I began by writing the logic behind the game, such as modifying the score, changing the clues, and storing the players' information. One issue I faced was determining what data structures to use to store all the data, which was large and needed to be easily accessible quickly as to not interrupt the flow of the game. I spent much time optimizing the code to make sure that is was as concise and understandable as possible. Once the back-end worked, I made the game come to life by creating the front-end, which consisted of various windows that displayed the game board, the clues, and the rules. Prior to this project, I had no experience in creating GUIs in Java so I had to teach myself the Java Swing Library. After experimenting with the different features and determining the best ones to use for my project, I coded the program, fixing bugs here and there. Ultimately, the game turned out great and I am so proud of my accomplishments. Going in, I had no idea how to build the application, but since I was motivated, I was able to teach myself along the way. Throughout this process, I learned new computer science skills, enhanced my knowledge of programming and the software engineering process, and created a game that my family could play together."
        ],
        logo: null
    },
]
