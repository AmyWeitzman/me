import React from 'react';
import './Activities.css';
import ActivitySection from './ActivitySection';

import { mentoring, volunteering } from '../../activitiesContent';

const SHOW_ACTIVITY_DATES = true;
const ACTIVITY_LOGO_SIZE = 'sm';
const ACTIVITIES = [
    {
        sectionTitle: "MENTORING",
        items: mentoring,
        showDates: SHOW_ACTIVITY_DATES,
        logoSize: ACTIVITY_LOGO_SIZE
    },
    {
        sectionTitle: "VOLUNTEERING",
        items: volunteering,
        showDates: SHOW_ACTIVITY_DATES,
        logoSize: ACTIVITY_LOGO_SIZE
    }
];

function Activities() {
  return (
    <div className="activities-content">
        {
            ACTIVITIES.map((activity, idx) => 
                <ActivitySection
                    key={`activity-${idx}`}
                    sectionTitle={activity.sectionTitle}
                    items={activity.items}
                    showDates={activity.showDates}
                    logoSize={activity.logoSize}
                />
           )
        }
    </div>
  );
}

export default Activities;
