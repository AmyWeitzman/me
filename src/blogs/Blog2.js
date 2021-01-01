import React from 'react';
import '../App.css';
import './Blog.css';

import VR_edu from '../images/VR_edu.jpg';

function Blog2() {
  return (
    <div className="content">
        <br></br>
        <div className="container">
            <h3 className="title">Impact of Computer Science on Next Generation Education</h3>
            <p><i>Ping!</i> As the little window pops up on the screen, I’m reminded of why I chose computer science. Not only does it present a challenge, but it allows me to express my creative side, designing apps and games. Harboring a passion for education, I aspire to create programs to help children learn about more than just what can be read in textbooks. Through coding, I hope to write websites and apps to enhance education, making it more entertaining and engaging for kids. Additionally, I would like to explore the potential of virtual reality, possibly allowing kids to have a more in depth experience in education. Not only will kids learn about the signing of the Declaration of Independence, they could be present at the actual event. Or, no longer will one need years of intense training to become an astronaut. All a student will need is a VR headset in order to explore outer space. Riding a dinosaur or swimming in a volcano can become virtual realities. Children will experience learning not only with their minds, but with their entire body. Engaging all 5 senses will help children remember concepts easier and spark their curiosity to discover something new. </p>
            <div className="img">
                <img src={VR_edu} alt="Virtual Reality in Education" width='500px'/> 
            </div>
        </div>
    </div>
  );
}

export default Blog2;
