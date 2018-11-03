import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React = require("react");
import { CSSTransition, TransitionGroup } from "react-transition-group";


const AppComponent = () => 
(
    <Router>
        <div>
            <ul className="links">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Route render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={500}
                        classNames="fade"
                    >
                        <Switch location={location}>
                            <Route exact path='/' component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/portfolio" component={Portfolio} />
                            <Route path="/contact" component={Contact} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )}/>
        </div>
    </Router>
);

export const Home = () => <div className="page home"><h1>HOME</h1></div>
export const About = () => <div className="page about"><h1>About</h1></div>
export const Portfolio = () => <div className="page portfolio"><h1>Portfolio</h1></div>
export const Contact = () => <div className="page contact"><h1>Contact</h1></div>

export const App = hot(module)(AppComponent);
