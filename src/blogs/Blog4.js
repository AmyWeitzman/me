import React from 'react';
import '../App.css';
import './Blog.css';

import uci from '../images/uci.png';
import zot from '../images/zot.png';
import rollercoaster from '../images/rollercoaster.jpg';
import women_in_tech from '../images/women_in_tech.jpg';
import road_trip from '../images/road_trip.png';

function Blog4() {
  return (
    <div className="content">
      <br></br>
      <div className="container">
        <h3 className="title">My Legacy at UCI</h3>
        <div className="img">
            <img src={uci} alt="UCI Anteater Logo" width='300px'/> 
        </div>
        <p>Someone once asked me, what did I want my college legacy to be...</p>
        <p><i>Zot, zot, zot!</i> Fingers curled up in position, bobbing my hand, I join in the thunderous
    cheer booming throughout the auditorium. Cheeks throbbing from excessive smiling, intense
    emotions flood my mind: excitement, pride, passion. Officially an Anteater, my journey through
    college begins. It’s time to make my mark.</p>
    <div className="img">
        <img src={zot} alt="Anteater Zot Cheer" width='400px'/> 
    </div>
    <p>
    UC Irvine, my new home, constitutes a factory through which I will construct myself
    over the next four years. Entering a shy, naive child, I strive to exit a proud, confident young
    woman. Riding along the rollercoaster of college, savoring the ups just to ease the pain on the
    downs, I progress towards a prized finish line still out of view. At that golden finish line, I
    complete my arduous trek, evaluating whether or not I succeeded in college. Personally, my aim
    of college involves acquiring the necessary abilities to obtain a meaningful job in my chosen field
    while improving my social skills.
    </p>
    <div className="img">
        <img src={rollercoaster} alt="Rollercoaster" width='400px'/> 
    </div>
        <p>Computer science has always interested me. Creating something new just by typing weird
    symbols, computer programming embodies a construction company contracted to build the
    future, one program at a time. Not always straightforward, coding can present colossal
    challenges. But, lucky for me, I thrive on challenges. A female, advancement in computer
    science may seem difficult or even futile considering that the stereotype calls for males.
    However, during my time at UCI, I hope to change this notion, bringing more recognition to
    women in STEM fields. Upon graduating UC Irvine, I hope to see the number of female
    applicants in STEM majors increase significantly.</p>
    <div className="img">
        <img src={women_in_tech} alt="Women in STEM" width='400px'/> 
    </div>
        <p>A strong proponent of the value of education, I plan to utilize my knowledge of
    computer science to improve education for children. By employing virtual reality to explore
    foreign lands or historical events, kids can engage in the learning. Riding a dinosaur or flying
    through outer space can become virtual realities. By performing research at UCI, I endeavor to
    discover these revolutionary possibilities.</p>
        <p>Likewise, as a prospective tutor, I plan to educate not only students but potential future
    tutors as well. Experimenting with new ways of teaching old concepts would allow me to find
    the method of teaching that works best for each student, personalizing the tutoring session.</p>
    <div className="img">
        <img src={road_trip} alt="Road Trip Map" width='500px'/> 
    </div>
        <p>A road trip, college encompasses challenging twists and turns, troublesome stop signs
    and traffic, and rejuvenating freeways and gas stations. One can’t always prepare for the road
    ahead; sometimes the map is outdated or an unexpected crash occurs. However, one can learn
    from his/her mistakes to prepare future generations. UC Irvine provides a place for me to leave a
    legacy of pride, confidence, diligence, and dedication. A passion for learning, an acceptance of
    others, and a desire to change the world signify just a few of the ways I hope to inspire future
    Anteaters. One day, they too will curl their fingers, cheeks throbbing, bob their hands, and join in
    the thunderous cheer booming throughout the auditorium, feeling excitement, pride, and passion.</p>
    </div>
    </div>
  );
}

export default Blog4;
