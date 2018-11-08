import React = require("react");
import { AppState } from "../@types";
import { HeroDevIcons } from "./hero-dev-icons.component";
import { HeroVerb } from "./hero-verb.component";

type HeroProps = { icons: AppState['icons']; verb: AppState['verb'] };
export const Hero = ({ icons, verb }: HeroProps) => (
    <div className="hero_page page center_parent">
        <section className='hero_content center'>
            <HeroDevIcons icons={icons}/>

            <h1>Hi, I'm Dave</h1>
            <h3>Software Developer</h3>

            <HeroVerb { ...verb }/>
        </section>

        <a href='#about' className='hero_arrow-down nav_anchor'>
        <i className="fa fa-angle-double-down" aria-hidden="true"></i>
        </a>
    </div>
);
