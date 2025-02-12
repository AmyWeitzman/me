import React from 'react';
import '../App.css';
import './Activities.css';
import Experience from "./Experience";

import { mentoring, volunteering } from '../activitiesContent';

function Activities() {
  return (
    <div className="activities-content">
        <h2 className="page-section-title">MENTORING</h2>
        {
            mentoring.map((el, idx) => 
                <div className="activity">
                    <Experience key={idx} details={el} showDates={true} logoSize="sm" />
                </div>
            )
        }
        <h2 className="page-section-title">VOLUNTEERING</h2>
        {
            volunteering.map((el, idx) => 
                <div className="activity">
                    <Experience key={idx} details={el} showDates={true} logoSize="sm" />
                </div>
            )
        }
    </div>
  );
}

export default Activities;
