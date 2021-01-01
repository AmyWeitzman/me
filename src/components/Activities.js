import React from 'react';
import '../App.css';
import './Activities.css';
import Experience from "./Experience";

import rtc from '../images/rtc_outline.png';
import project_snapshot from '../images/project_snapshot.png';
import stem_talk from '../images/stem_talk.PNG';
import scholarship_track from '../images/scholarship_track.png';
import uci_research from '../images/uci_research.png';
import att from '../images/att.png';

// list of activites and relevant info to add to page
const activityInfo = [
    {
        jobTitle: "Mentor",
        companyName: "Rewriting the Code",
        location: "",
        years: "Fall 2020—Present",
        skills: [],
        tasks: [
            "Engage with college female interested in tech weekly to foster development of personal and professional skills",
            "Guide mentee through successful technical internship recruitment process by providing mentorship and resources"
        ],
        logo: rtc
    },
    {
        jobTitle: "Mentor",
        companyName: "Project Snapshot",
        location: "",
        years: "Fall 2020—Present",
        skills: [],
        tasks: [
            "Provide mentorship regarding college application process, effective time management, and career options through semi-weekly meetings with high school student interested in pursuing technical field",
            "Organize mini-projects, such as To-Do List app, to help mentee learn technical skills through peer-programming"
        ],
        logo: project_snapshot
    },
    {
        jobTitle: "Executive Member of Software",
        companyName: "STEM TALK",
        location: "",
        years: "Fall 2020",
        skills: [],
        tasks: [
            "Collaborate on team of 10 to design and develop clean, responsive website using HTML, CSS, JavaScript, Webflow that promotes STEM TALK mission's of providing STEM education resources for young students, particularly from underrepresented backgrounds"
        ],
        logo: stem_talk
    },
    {
        jobTitle: "PR and Outreach Volunteer",
        companyName: "Scholarship Track",
        location: "",
        years: "Fall 2020",
        skills: [],
        tasks: [
            "Promoted educational opportunities for 10,000+ students from underrepresented groups in 78+ countries",
            "Dedicated 30 minutes a day to reaching out to former scholarship awardees and internship program participants to interview about their experience for Scholarship Track’s blog, which features insights into the application process",
            "Coordinated former intern participant for internship panel with 100 attendees",
            "Helped Scholarship Track membership double over 2 month period"
        ],
        logo: scholarship_track
    },
    {
        jobTitle: "Undergraduate Research Assistant",
        companyName: "Department of Ophthalmology",
        location: "UC Irvine",
        years: "Fall 2019—Summer 2020",
        skills: [],
        tasks: [
            "Engineered novel visual function testing system using Python and Pupil Labs hardware to more comfortably and objectively evaluate patient contrast sensitivity and visual acuity with real-time feedback and 10 test settings for greater customizability",
            "Reduced patient commute and waiting room time by 100% as the test can be performed on-demand at one’s home",
            "Analyzed 50 microscope slides under 10 lighting sequences to collect millions of samples to feed to machine learning algorithm that reconstructs low resolution images as high resolution ones, saving researchers thousands of dollars"
        ],
        logo: uci_research
    },
    {
        jobTitle: "AT&T Summer Learning Academy Extern",
        companyName: "AT&T",
        location: "Remote",
        years: "Summer 2020",
        skills: [],
        tasks: [
            "Acheived 80 hours of self-paced learning to build business and technical knowledge along with personal growth and professional development",
            "Gained insight and advice on business, leadership, and careers from business executives and recognized experts",
            "Completed entry-level training in human resources, finance, advertising, media and technology, communication, and leadership"    
        ],
        logo: att
    }
];

function Activities() {
  return (
    <div className="activities-content">
        {
            activityInfo.map((el, idx) => 
                <div className="activity box-shadow">
                    <Experience key={idx} details={el} />
                </div>
            )
        }
    </div>
  );
}

export default Activities;
