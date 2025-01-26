import React from 'react';
import '../App.css';
import './Education.css';
import Course from './Course';

function Education(props) {
  const EDU_IDX = props.eduIdx;
  const EDU_COURSES_KEY = `edu-${EDU_IDX}-course-info`;

  return (
    <div className="edu-container">
      <div className='edu-school-info'>
        <img src={props.details.logo} alt={props.details.name + " logo"} className="school-logo"></img>
        <div className="edu-info-container">
          <p className="school-name edu-info-item">{props.details.name}</p>
          <p className="degree-type edu-info-item">{props.details.degreeType} in {props.details.major}</p>
          { 
            props.details.additionalInfo.map(item => <p className="additional-info-item edu-info-item">{item}</p>)
          }
        </div>
      </div>
      <div id={EDU_COURSES_KEY} className='edu-courses-container'>
        {
          props.details.courses.map((course, idx) => {
            let nextCourse = null;
            if(idx < props.details.courses.length - 1) {
              nextCourse = props.details.courses[idx + 1];
            }
            switch(idx) {
              case 1:
              case 3:
              case 5:
                return null;  /* already added to row */
              case 2:      /* add row of courses with heading */
                return  <div className='course-row'>
                          <Course
                            key={`edu-${EDU_IDX}-course-${idx}`}
                            courseColor={course.color}
                            courseIcon={course.icon}
                            courseTitle={course.title}
                            titlePlacement='left'
                          /> 
                          <Course
                            key={`edu-${EDU_IDX}-course-header}`}
                            courseColor='#d3d2d4'
                            courseIcon={null}
                            courseTitle='Courses'
                            titlePlacement='center'
                          />
                          <Course
                            key={`edu-${EDU_IDX}-course-${idx + 1}`}
                            courseColor={nextCourse.color}
                            courseIcon={nextCourse.icon}
                            courseTitle={nextCourse.title}
                            titlePlacement='right'
                          /> 
                        </div>;
              default:  /* add row of courses */
                return  <div className='course-row'>
                          <Course
                            key={`edu-${EDU_IDX}-course-${idx}`}
                            courseColor={course.color}
                            courseIcon={course.icon}
                            courseTitle={course.title}
                            titlePlacement='left'
                          />
                          <Course
                            key={`edu-${EDU_IDX}-course-${idx + 1}`}
                            courseColor={nextCourse.color}
                            courseIcon={nextCourse.icon}
                            courseTitle={nextCourse.title}
                            titlePlacement='right'
                          />
                        </div>;
            }
          })}
      </div>
    </div>
  );
}

export default Education;
