import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
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
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/home' component={Home}></Route>
                        <Route exact path='/me' component={Home}></Route>
                        <Route exact path='/resume' component={Resume}></Route>
                        <Route exact path='/projects' component={Projects}></Route>
                        <Route exact path='/activities' component={Activities}></Route>
                        <Route exact path='/contact' component={Contact}></Route>
                        <Route exact path='/blog' component={Blog}></Route>
                        <Route exact path='/blog/structure-and-applications-of-body-area-networks' component={Blog1}></Route>
                        <Route exact path='/blog/impact-of-computer-science-on-next-generation-education' component={Blog2}></Route>
                        <Route exact path='/blog/it-just-takes-a-ripple-to-start-a-wave-of-change' component={Blog3}></Route>
                        <Route exact path='/blog/my-legacy-at-uci' component={Blog4}></Route>
                        <Route exact path='/blog/breaking-tackles' component={Blog5}></Route>
                        <Route exact path='/blog/cs-inspiration-and-goals' component={Blog6}></Route>
                        <Route exact path='/blog/if-i-had-infinite-time-and-money' component={Blog7}></Route>
                        <Route exact path='/blog/unique-interview-questions' component={Blog8}></Route>
                        <Route component={Error}></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    </div>
  );
}

export default App;
