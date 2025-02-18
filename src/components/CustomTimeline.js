import React from 'react';
import './CustomTimeline.css';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
  } from '@mui/lab/TimelineOppositeContent';

function CustomTimeline(props) {
  return (
    <Timeline
        sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
                fontSize: '1.25rem',
                fontWeight: 'bold',
                paddingLeft: 0,
            },
        }}
    > 
        {
            props.elements.map((el, idx) => (
                <>
                    <TimelineItem  key={`timeline-item-${idx}`}>
                        <TimelineOppositeContent className="timeline-timeframe">
                            {el.startTime} {el.endTime ? `- ${el.endTime}` : ''}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent className="timeline-content">
                            {el.content}
                        </TimelineContent>
                    </TimelineItem>
                </>
                                        
            ))
        }
    </Timeline>
  );
}

export default CustomTimeline;
