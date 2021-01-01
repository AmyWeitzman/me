import React from 'react';
import '../App.css';
import './Blog.css';

import football from '../images/football.png';
import bama from '../images/bama.png';
import football_quote from '../images/football_quote.jpg';

function Blog5() {
  return (
    <div className="content">
      <br></br>
      <div className="container">
      <h3 className="title">Breaking Tackles</h3>
      <div className="img">
            <img src={football} alt="American Football" width='300px'/> 
      </div>
      <p>TOUCHDOWN! Cheers shatter the silence as fans resume breathing.
My face cringes as the savory aroma of barbecued wings and delectable
burgers becomes masked by the pungent odor drifting from the armpits of
the fan standing next to me. Tears flood my eyes, possibly from the stench,
possibly from joy, possibly from the salty sweat trickling down my forehead.
What a way to experience my first live football game!</p>
<p>
Football became my passion in 8th grade. Although this sport had
always interested me, my female mind proved deficient when trying to
understand why my dad would rather watch a game on Sunday night than
spend time with his kids. Previously, to me, football seemed unnecessary
chaos: large, sweaty guys attacking each other in pursuit of a ball.
Nevertheless, a curious girl with a thirst for knowledge, I attempted to piece
together this puzzle.
</p>
    <p>September 8, 2012: Click...click. Remote in hand, flipping through the
sports channels, I discovered the game that would become my football
professor: Alabama vs. Western Kentucky. With a mental pencil and paper,
I scribbled meticulous notes, registering everything happening on the field:
player positions, ball whereabouts, penalties…Until that whistle blew, my
mind acted as a supercomputer, calculating every aspect of every pixel
every second. Slowly, but surely, the neurons firing in my brain hit their
targets head on; I began to understand this complex yet thrilling pastime.
As the players scrambled, as the points pasted the scoreboard, as the
yellow flags dotted the grass, I strived to understand the football enigma.</p>
    <div className="img">
        <img src={bama} alt="Alabama Crimson Tide logo" width='200px'/> 
    </div>
    <p>After hours of play, the game clock struck 00:00. With a 35-0 victory
over the Big Red, Bama’s Crimson Tide added not only their second win of
the season but another diehard fan as well. Following Bama straight to the
BCS Championship game, my passion for football swelled. Amassing
countless Tide merchandise—jerseys, posters, license plates—I
constructed a shrine to my favorite college football team.</p>
    <p>Learning the game, I’ve realized its complexity and value, requiring
skill and strategy as well as teaching lessons. For instance, training and
discipline along with passion and dedication represent key elements for
success. My improvement is defined by the risks I take, the sacrifices I
make. Likewise, I learned the importance of teamwork. Everyone
possesses unique abilities to contribute. Some may go with the flow, but I
roll with the tide.</p>
    <p>Football instilled in me the importance of practice; mastery takes
time. Football instilled in me the maxim that when I get knocked down, I get
back up. Football instilled in me the dedication and determination to always
aim for improvement. Ninety-nine percent may be good, but it’s not good
enough. I aim for that extra percent.</p>
    <div className="img">
        <img src={football_quote} alt="Quote by Lewis Grizzard about football and life lessons" width='400px'/> 
    </div>
    <p>My passion for football also prepared me for challenges, including
taking AP classes and running for leadership positions. Now I venture out
of my comfort zone and try new things, such as rock climbing or rabbit
kabobs. Most of all, now I persist through pain because football players
persevere.</p>
    <p>Football guides my life, pushing me to utilize my strengths and
improve my weaknesses. Just because I lose doesn’t mean I can’t win.
With the mind of a football player, I continue rushing forward, breaking
tackles.</p>
    </div>
    </div>
  );
}

export default Blog5;
