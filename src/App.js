import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Resume from "./components/Resume/Resume.js";
import Activities from "./components/Activities/Activities.js";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <NavBar />
                <div className="page-content">
                    <Routes>
                        <Route exact path='/me' element={<Home />}></Route>
                        <Route exact path='/resume' element={<Resume />}></Route>
                        <Route exact path='/activities' element={<Activities />}></Route>
                        <Route path='*' element={<Error />}></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    </div>
  );
}

export default App;
