import React from 'react';
import '../App.css';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Badge from "./Badge";

function Experience(props) {
  return (
    <Accordion className='experience-accordion'>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon className='experience-accordion-toggle-icon' />}
            aria-controls="experience-content"
            className='experience-accordion-header'
        >
        { props.details.logo &&
            <img src={props.details.logo} alt={props.details.companyName + " logo"} className="company-logo"></img>
        }
        <div className="experience-info-container">
            <div className='experience-info-item-header'>
                <p className="experience-info-item">
                    <span className='job-title'>{props.details.jobTitle}</span>
                    { props.details.companyName 
                        ? props.details.companyName.startsWith('http')
                            ? <a href={props.details.companyName} target="_blank" rel="noreferrer" className='project-link'>{props.details.companyName}</a>
                            : `, ${props.details.companyName}`
                        : ''
                    } 
                    { ' ' }
                    {props.details.location && <span>({props.details.location})</span>}
                </p>
            </div>
            <div className="skill-list experience-info-item">
                {
                    props.details.skills.map((skill, idx) => 
                        <Badge key={idx} text={skill} isMarkdown={props.isMarkdown ? props.isMarkdown : true} color="gray" bg="black" />
                    )
                }
            </div>
        </div>
        </AccordionSummary>
        <AccordionDetails>
            <div className='task-list'>
                { props.details.tasks.map((task, idx) =>
                    <div key={idx} className="task-container experience-info-item">
                        <FontAwesomeIcon className="task-bullet-icon" icon={faChevronRight} />
                        <p className='task'>{task}</p>
                    </div>
                )
                }
            </div>
        </AccordionDetails>
    </Accordion>
  );
}

export default Experience;
