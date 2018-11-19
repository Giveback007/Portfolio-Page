import React = require("react");
import { BrowserRouter as Router, NavLink, Route, RouteComponentProps, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { links } from "../@data";
import { updateRoute } from "../state";
import { Hero } from "./hero.component";
import { PortfolioComponent } from "./portfolio.component";

const LinkComponent = ({ i, link }: { i: number, link: string[] }) => (
    <NavLink key={i} to={link[0]} activeClassName="active">
        <div className="btn">{link[1]}</div>
    </NavLink>
);

const Links = () => (
    <div className="routes">
        {links.map((link, i) => <LinkComponent key={i} {...{ link, i }} />)}
    </div>
);

const RenderRoutes = () => {

    const routeRenderFunct = ({ location }: RouteComponentProps) => {
        updateRoute(location.pathname);

        return (
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={500}
                    classNames="fade"
                >
                    <Switch location={location}>
                        <Route exact={true} path="/" component={Hero} />
                        <Route path="/about" component={About} />
                        <Route path="/portfolio" component={PortfolioComponent} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        );
    };

    return <Route render={routeRenderFunct}/>;
};

const AppComponent = () =>
(
    <Router>
        <div>
            <Links />
            {/* <Spinner /> */}
            <RenderRoutes />
        </div>
    </Router>
);

export const About = () => <div className="page about"><h1>About</h1></div>;
export const Contact = () => <div className="page contact"><h1>Contact</h1></div>;

export const App = AppComponent;
