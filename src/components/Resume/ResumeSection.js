import React from 'react';
import './ResumeSection.css';

function ResumeSection({ sectionTitle, content  }) {
  return (
    <div className="resume-section">
        <h2 className="resume-section-title page-section-title">{sectionTitle}</h2>
        {content}
    </div>
  );
}

export default ResumeSection;
