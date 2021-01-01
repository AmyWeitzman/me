import React from 'react';
import '../App.css';
import './Blog.css';

import personal_edu from '../images/personal_edu.png';

function Blog7() {
  return (
    <div className="content">
        <br></br>
        <div className="container">
            <h3 className="title">If I had infinite time and money...</h3>
            <p>If I had infinite money and time, I would create a virtual personalized school so that those with disabilities could receive an education from the comfort of their own home. Students would first take an assessment to determine their current academic strengths and weaknesses. The examination need not be written; it could simply be a game or puzzle that can be used to evaluate one’s mental capabilities. Based on the students’ scores, they will be given a curriculum that is tailored to their learning abilities and interests. For instance, if a student likes sports or music, the examples given throughout the course will pertain to those subjects of interest to keep the student engaged and excited about the material. The curriculum would incorporate interactive activities and games so that students do not feel bored or discouraged. The course will automatically adjust its pace and teaching methods to the student’s current progress. This way, students will be able to experience a variety of learning styles to find what best suits them and gives them the best chance of success. This online school would be appropriate for everyone, including those with mobile impairments that cannot attend school, those with busy schedules, and those with mental illnesses that may need a more specialized learning environment. As a result, school will become a more engaging, personalized experience that is convenient and effective.</p>
            <div className="img">
                <img src={personal_edu} alt="Steps to Create Personalized Education" width='500px'/> 
            </div>
        </div>
    </div>
  );
}

export default Blog7;
