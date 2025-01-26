import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Activities from "./components/Activities";
import Blog from "./components/Blog";
import Blog1 from "./blogs/Blog1";
import Blog2 from "./blogs/Blog2";
import Blog3 from "./blogs/Blog3";
import Blog4 from "./blogs/Blog4";
import Blog5 from "./blogs/Blog5";
import Blog6 from "./blogs/Blog6";
import Blog7 from "./blogs/Blog7";
import Blog8 from "./blogs/Blog8";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <NavBar />
                <div className="page-content">
                    <Routes>
                        <Route exact path='/' element={<Home />}></Route>
                        <Route exact path='/about' element={<Home />}></Route>
                        <Route exact path='/home' element={<Home />}></Route>
                        <Route exact path='/me' element={<Home />}></Route>
                        <Route exact path='/resume' element={<Resume />}></Route>
                        <Route exact path='/projects' element={<Projects />}></Route>
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
