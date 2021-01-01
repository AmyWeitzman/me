import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import '../App.css';
import BlogPost from "./BlogPost";

function Blog() {
  return (
    <div className="blog-page" style={{marginTop: 50, marginBottom: 50}}>
        <Container>
            <Row>
                <Col>
                    <BlogPost 
                        title="Structure and Applications of Body Area Networks"
                        text="This is a paper I wrote for my Networks class about Body Area Networks (BANs). I learned a lot about the useful applications of BANs and it was interesting to see the concepts we were learning in class in the real-world."
                    ></BlogPost>
                </Col>
                <Col>
                    <BlogPost 
                        title="Impact of Computer Science on Next Generation Education"
                        text="This is little something I wrote for the &quot;A Better America&quot; scholarship about the impact my pursuit of computer science can have on the education of the next generation."
                    ></BlogPost>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <BlogPost 
                        title="It Just Takes a Ripple to Start a Wave of Change"
                        text="Preserving our environment today is crucial to the lives of tomorrow. That's why I volunteer at beach clean-ups. As a group, we pick up trash on the beach, helping to keep our oceans clean and safe for everyone, humans and animals."
                    ></BlogPost>
                </Col>
                <Col>
                    <BlogPost 
                        title="If I had infinite time and money..."
                        text="If you had infinite time and money, what would you do? Would you use it to pay off college debts? Buy fancy clothes? Help the homeless? Pursue your dreams? Read to find out what I would do."
                    ></BlogPost>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <BlogPost 
                        title="Unique Interview Questions"
                        text="Interviewers like to ask some unique questions sometimes to really get to know the candidate better and keep them on their toes. Here are some interesting ones I have come across and my answers."
                    ></BlogPost>
                </Col>
                <Col>
                    <BlogPost 
                        title="My Legacy at UCI"
                        text="Someone once asked me, what did I want my college legacy to be..."
                    ></BlogPost>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <BlogPost 
                        title="Breaking Tackles"
                        text="Football guides my life, pushing me to utilize my strengths and
                        improve my weaknesses. Just because I lose doesn’t mean I can’t win.
                        With the mind of a football player, I continue rushing forward, breaking
                        tackles."
                    ></BlogPost>
                </Col>
                <Col>
                    <BlogPost 
                        title="CS Inspiration and Goals"
                        text="When I was younger, I loved solving puzzles, devising creative solutions, taking things apart just to see if I could put them back together in a unique way. That's why, when it came time to choose a major for college, I decided to major in computer science"
                    ></BlogPost>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Blog;
