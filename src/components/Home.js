import React, { useState, useEffect } from 'react';
import '../App.css';
import './Home.css';

import figlet from 'figlet';
import standardFont from 'figlet/importable-fonts/Standard.js';
figlet.parseFont('Standard', standardFont);

const MIN_DELAY = 20;    // min delay (ms) for auto-typing
const MAX_DELAY = 250;   // max delay (ms) for auto-typing

function Home() {
    const terminalCommand = "whois \"Amy Weitzman\"";
    const [command, setCommand] = useState("$ |");
    const [cmdIdx, setIdx] = useState(0);
    const [done, setDone] = useState(false);

    const [figletText, setFigletText] = useState('');

    const randNum = () => {
        return Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY;    // choose random number in range min-max
    };

    useEffect(() => {
        if(cmdIdx <= terminalCommand.length) {                         // still more text to write
            const interval = setInterval(() => {
                setCommand(command.slice(0, command.length - 1) + terminalCommand.charAt(cmdIdx) + (cmdIdx === terminalCommand.length ? '': '|'));
                setIdx(cmdIdx + 1);
                document.getElementById("terminal-command").innerHTML = command;
            }, randNum());
            return () => clearInterval(interval);
        }
        else {   
            if(!done) {                                                      // finished writing command, show results
                setTimeout(() => {
                    figlet('Amy Weitzman', {
                        font: 'Standard',
                    }, (err, data) => {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        setFigletText(data);
                    });

                    setCommand(command.slice(0, command.length - 1));        // remove trailing _ when "hit enter"
                    document.getElementById("terminal-command").innerHTML = command;
                    const responseText = document.getElementById("terminal-response");
                    responseText.classList.remove('hidden');
                    responseText.classList.add('visible');
                }, 750);
                setDone(true);  
            }
        }
    }, [cmdIdx, command, done]);

    return (
        <div className="home-content">
            <div id="terminal" className="box-shadow">
                <div id="terminal-content-container">
                    <h3 id="hello-world" className="terminal-text">&#62;_</h3>
                    <p id="terminal-command" className="terminal-text"></p>
                    <pre id="terminal-figlet" className='terminal-text'>{figletText}</pre>
                    <p id="terminal-response" className="terminal-text hidden">
                        {'{\n  "traits": {\n    "Passionate",\n    "Creative",\n    "Curious"\n  },\n  "skills": {\n    "Software Engineering",\n    "Data Science",\n    "Cybersecurity"\n  },\n  "interests": [\n    "Coding",\n    "Sports",\n    "Music",\n    "Astronomy",\n    "Trivia",\n    "Food"\n  ]\n}'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
