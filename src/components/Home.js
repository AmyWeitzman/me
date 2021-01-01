import React, { useState, useEffect } from 'react';
import '../App.css';
import './Home.css';

const MIN_DELAY = 20;    // min delay (ms) for auto-typing
const MAX_DELAY = 250;   // max delay (ms) for auto-typing

function Home() {
    const terminalCommand = "curl https://about-me";
    const [command, setCommand] = useState("$ _");
    const [cmdIdx, setIdx] = useState(0);
    const [done, setDone] = useState(false);

    const randNum = () => {
        return Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY;    // choose random number in range min-max
    };

    useEffect(() => {
        if(cmdIdx <= terminalCommand.length) {                         // still more text to write
            const interval = setInterval(() => {
                setCommand(command.slice(0, command.length - 1) + terminalCommand.charAt(cmdIdx) + '_');
                setIdx(cmdIdx + 1);
                document.getElementById("terminal-command").innerHTML = command;
            }, randNum());
            return () => clearInterval(interval);
        }
        else {   
            if(!done) {                                                      // finished writing command, show results
                setTimeout(() => {
                    setCommand(command.slice(0, command.length - 1));        // remove trailing _ when "hit enter"
                    document.getElementById("terminal-command").innerHTML = command;
                    const responseText = document.getElementById("terminal-response");
                    responseText.classList.remove('hidden');
                    responseText.classList.add('visible');
                }, 750);
                setDone(true);
            }
        }
    });

    return (
        <div className="home-content">
            <div id="terminal" className="box-shadow">
                <h3 id="hello-world" classsName="terminal-text">&#62;_</h3>
                <p id="terminal-command" className="terminal-text"></p>
                <p id="terminal-response" className="terminal-text hidden">
                    {'{\n  "name": { \n    "first": "Amy",\n    "last": "Weitzman"\n  },\n  "education": {\n    "school": "UC Irvine",\n    "major": "Computer Science",\n    "gradYear": 2021\n  },\n  "interests": [\n    "coding",\n    "sports",\n    "music",\n    "astronomy",\n    "trivia",\n    "food"\n  ]\n}'}
                </p>
                </div>
        </div>
    );
}

export default Home;
