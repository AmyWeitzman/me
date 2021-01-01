import React from 'react';
import '../App.css';
import './Blog.css';

import ripple1 from '../images/ripple1.jpg';
import ripple2 from '../images/ripple2.jpg';

function Blog3() {
  return (
    <div className="content">
        <br></br>
        <div className="container">
            <h3 className="title">It Just Takes a Ripple to Start a Wave of Change</h3>
            <div className="img">
                <img src={ripple1} alt="Ripple" width='500px'/> 
            </div>
            <p><i>Crash</i>. Cool, salty ocean spray kisses my cheeks. Bright sunlight caresses my fair skin. Seagulls call, gliding through the air, resting on the jagged rocks. Too bad this wondrous environment is suffering due to the recklessness of humans. </p>
            <p>
            Bending down, I collect another cigarette butt. My goal? To carry out the motto of an organization I once volunteered for: Zero Trash. 
            </p>
            <p>
            Squealing, children play in the water, splashing each other and building sand castles. Their smiling faces give me motivation to continue my work. Smooth sand beneath my toes, I advance along the beach, picking up trash. 
            </p>
            <p>The Earth’s water is limited. It may travel through the water cycle, changing its form, but it is always the same water; the same water that dinosaurs drank; the same water that Cleopatra drank. However, pollution and trash damage water and wildlife habitats in the ocean. Plastic bottles suffocate fish. Bags trap sea animals. If humans continue to destroy these marine habitats, what will happen to our water supply? Although water is essential to life, people do not seem to care that much to preserve it.</p>
            <div className="img">
                <img src={ripple2} alt="Trash on Beach" width='500px'/> 
            </div>
            <p>
            That’s why I have volunteered over 100 hours with my high school Key Club. Even though just a few of us were cleaning up the beach, it made a huge difference. Not only am I preserving water for myself and my community, but I am also preserving it for those in other states, other countries, other continents. Water follows a cycle; by preserving its quality here, we preserve its quality everywhere. I may be just a drop, but I can make a ripple.
            </p>
        </div>
    </div>
  );
}

export default Blog3;

