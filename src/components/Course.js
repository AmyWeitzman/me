import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Course(props) {

  return (
    <div className='course-item-container'>
        { props.titlePlacement === 'left' && <p className='course-title justify-right'>{props.courseTitle}</p>}
        <div key={props.key} className={`course-item ${props.courseIcon ? '' : 'course-placeholder-icon'}`} style={{backgroundColor: `${props.courseColor}`}}>
            { props.courseIcon && <FontAwesomeIcon className='course-icon' icon={props.courseIcon} /> }
            { !props.courseIcon && <p className='course-placeholder-text'>Courses</p> }
        </div>
        { props.titlePlacement === 'right' && <p className='course-title justify-left'>{props.courseTitle}</p>}
    </div>
  );
}

export default Course;
