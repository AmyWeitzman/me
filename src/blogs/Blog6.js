import React from 'react';
import '../App.css';
import './Blog.css';

import cs_icon from '../images/cs_icon.png';
import compiling from '../images/compiling.PNG';
import cs_possibilities from '../images/cs_possibilities.jpg';
import vr from '../images/vr.jpg';

function Blog6() {
  return (
    <div className="content">
      <br></br>
      <div className="container">
      <h3 className="title">CS Inspiration and Goals</h3>
      <div className="img">
        <img src={cs_icon} alt="Computer Science Icon with Computer" width='400px'/> 
      </div>
      <p>My eyes shut; I could not look. My body shivered, but not from the crisp air of the computer lab. Beads of sweat moistened my forehead while my trembling finger reached for the compile button. Click. Checking the console I discovered: “No warnings, no errors.” No forgotten semicolons or undeclared variables or misspelled words. I could not believe it! It worked, it actually worked! Elated, I pounded the “Run” key, a button almost buried in dust from the lack of use, and the program ran. A little window popped up on the screen: “Hello World.” I had completed my first computer program. </p>
      <div className="img">
        <img src={compiling} alt="Code Compiling Message" width='300px'/> 
      </div>
    <p>When I was younger, I loved solving puzzles, devising creative solutions, taking things apart just to see if I could put them back together in a unique way. That's why, when it came time to choose a major for college, I decided to major in computer science. Not just a combination of math, science, and technology, computer science is a foreign world awaiting exploration by those who are daring enough to attempt it, including me. Growing up in an age consumed by technology, I’ve come to realize the great opportunities my generation has to change the world and improve medicine, communication, security, and education. Programming is challenging and allows me to express my creative side because of the immense possibilities. These days, software is present in practically every field, from education to medicine to engineering to even sports. Computer science represents a gateway to various career opportunities and allows me to explore my passions outside of programming.</p>
    <div className="img">
        <img src={cs_possibilities} alt="Various topics in computer science" width='400px'/> 
      </div>
    <p>A strong proponent of the value of learning, I plan to utilize my knowledge of computer science to improve education. Knowledge cannot only be found in a textbook; knowledge derives from experience and hands-on instruction. Through coding, I hope to make websites and apps to make learning more entertaining for kids. Additionally, I would like to explore the potential of virtual reality, possibly allowing kids to have a more in depth experience in education. By employing virtual reality to explore foreign lands or historical events, kids can engage in the learning. Not only will students learn about the signing of the Declaration of Independence, they could be present at the actual event. Or, no longer will one need years of intense training to become an astronaut. All a student will need is a VR headset in order to explore outer space. Riding a dinosaur or swimming in a volcano can become virtual realities.</p>
    <div className="img">
        <img src={vr} alt="Child using virtual reality headset to explore planets in outer space" width='400px'/> 
      </div>
    <p>Through coding, I hope to design websites and apps to make learning more accessible, affordable, and engaging for kids. Through coding, I hope to develop software to detect and diagnosis medical emergencies and diseases earlier and in a less invasive manner to help save lives. Through coding, I hope to expand the role of technology in people's everyday lives to increase their productivity.</p>
    <p>In college, I plan to take rigorous courses, such as data structures and algorithms, to pursue my major. I intend to join clubs to express my interests, including cybersecurity, trivia, and music, as well as introduce me to new topics. In a world of innovation and rapid technological advancements, I will be able to combine my passions, using technology to help further my interests. For instance, music is meant to be enjoyed by everyone, even those who have hearing disabilities. That’s why I’m interested in designing alternative interfaces, such as colors, motion, and graphics, to “listen” to music visually. Likewise, I would like to ensure that everyone, even the less fortunate in developing nations, has the opportunity to learn, live, and prosper. Food, water, shelter, clothing, and education should be available to all. Beyond my schooling, I’d like to secure an internship to explore the various uses for computer science in different industries. Ultimately, my goal is to work at a software company, designing websites and applications to benefit the entire human population.</p>
    </div>
    </div>
  );
}

export default Blog6;
