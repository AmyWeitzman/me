import { faChartDiagram, faLaptopCode, faBrain, faServer, faShield, faAtom } from '@fortawesome/free-solid-svg-icons';

import uci_logo from './images/uci_logo.png';
import smart from './images/smart.png';
import awt from './images/awt.png';

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
                logo: smart
            },
            {
                title: "Advancing Women in Technology",
                logo: awt
            }
        ]
    },
];