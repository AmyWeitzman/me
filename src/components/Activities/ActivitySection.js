import React from 'react';
import '../../App.css';
import Experience from "../Experience";

function ActivitySection({ sectionTitle, items, showDates, logoSize }) {
  return (
    <div className="activity-section">
        <h2 className="page-section-title">{sectionTitle}</h2>
        {
            items.map((el, idx) => 
                <div className="activity">
                    <Experience key={idx} details={el} showDates={showDates} logoSize={logoSize} />
                </div>
            )
        }
    </div>
  );
}

export default ActivitySection;
