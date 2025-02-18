import React from 'react';
import './Education.css';
import School from './School';
import Course from './Course';
import Scholarship from './Scholarship';

function Education(props) {
  const EDU_IDX = props.eduIdx;
  const EDU_COURSES_KEY = `edu-${EDU_IDX}-course-info`;

  return (
    <div className="edu-container">
      <div className='edu-school-info'>
        <div className='edu-school-info-top'>
          <School 
            logo={props.details.logo}
            name={props.details.name}
            degreeType={props.details.degreeType}
            major={props.details.major}
            additionalInfo={props.details.additionalInfo}
          />
        </div>
        { props.details.scholarships.length > 0 &&
          <div className='edu-scholarships-container'>
            <p className='scholarships-header'>Scholarships</p>
            {
              props.details.scholarships.map((scholarship, idx) => (
                <Scholarship 
                  key={idx}
                  idx={idx} 
                  logo={scholarship.logo} 
                  title={scholarship.title} 
                />
              ))
            }
          </div>
        }
      </div>
      <div id={EDU_COURSES_KEY} className='edu-courses-container'>
        { props.details.courses.length > 0 &&
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
