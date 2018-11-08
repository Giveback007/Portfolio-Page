import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import React = require("react");
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Hero } from "./hero.component";
import { links } from "../data";

// DELETE
console.clear();

const AppComponent = () => 
(
    <Router>
        <div>
            <div className="routes">
                {links.map((link, i) => (
                    <NavLink key={i} to={link[0]} activeClassName="active">
                        <div className="btn">{link[1]}</div>
                    </NavLink>
                ))}
            </div>
            
            {/* <Spinner /> */}

            <Route render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={500}
                        classNames="fade"
                    >
                        <Switch location={location}>
                            <Route exact path='/' component={Hero} />
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

export const About = () => <div className="page about"><h1>About</h1></div>
export const Portfolio = () => <div className="page portfolio"><h1>Portfolio</h1></div>
export const Contact = () => <div className="page contact"><h1>Contact</h1></div>

export const App = hot(module)(AppComponent);
