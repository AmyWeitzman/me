import React from 'react';
import '../App.css';
import './Blog.css';

import interviewq from '../images/interviewq.jpg';

function Blog8() {
  return (
    <div className="content">
        <br></br>
        <div className="container">
            <h3 className="title">Unique Interview Questions</h3>
            <div className="img">
                <img src={interviewq} alt="Thinking" width='300px'/> 
            </div>
            <p><b>If I were an animal...</b>I would be a chameleon because I am adaptable and quirky.</p>
            <p><b>If I were a food...</b>I would be a fluffernutter because I am sweet and nutty.</p>
            <p><b>Bio title: </b>Breaking Tackles, Hello World!, The Broke College Student's Guide to Saving Money, Compiling...</p>
            <p><b>If I were stranded on an island...</b>I would bring a pocket knife because it is very resourceful (could be used for hunting, eating, protection, making marks in sand/bark) or the Professor from Gilligan's Island</p>
            <p><b>If I were a new crayon color...</b>I would be sprinkles since, with many colors in one, it would be more efficient.</p>
        </div>
    </div>
  );
}

export default Blog8;
